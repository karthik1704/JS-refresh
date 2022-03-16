import { async } from 'regenerator-runtime/runtime';
import { API_URL } from './config.js';
import { getJSON } from './helpers.js';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
  },
  bookmark: {},
};

export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(`${API_URL}${id}`);

    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
    console.log(recipe);
  } catch (err) {
    // Temp error handling
    console.error(`${err.message}`);
    throw err;
  }
};

export const loadSearchResults = async function (query) {
  try {
    state.query = query;
    const data = await getJSON(`${API_URL}?search=${query}`);
    console.log(data);

    const { recipes } = data.data;
    state.search.results = recipes.map((rec) => {
      return {
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        image: rec.image_url,
        servings: rec.servings,
        cookingTime: rec.cooking_time,
        ingredients: rec.ingredients,
      };
    });
  } catch (err) {
    console.error(`${err.message}`);

    throw err;
  }
};
