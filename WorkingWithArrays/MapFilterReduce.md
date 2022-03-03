# Data Transformations with Map, Filter and Reduce

## Map

- **map** returns a new array containing the results of applying on operation on all original array elements.

## Filter

- **filter** returns a new array containing the array elements that passed a specified **test condition**.

## Reduce

- **reduce** boils ("reduces") all array elements down to one single value (e.g adding all elements together)

## To Mutate original array

- Add to original
  - .push (end)
  - .unshift(start)
- Remove from original
  - .pop (end)
  - .shift(start)
  - .splice (any)
- Others
  - .reverse
  - .sort
  - .fill

## A new Array

- Computed from original:
  - .map (loop)
- Filtered using condition:
  - .filter
- Protion of original:
  .slice
- Adding original to other
  - .concat
- Flattening the original:
  - .flat
  - .flatMap

## An array index
- Based on value:
    - .indexof
- Based on test condition:
    - .findIndex

## An array element
- Based on test condition:
    - .find

## Know if array includes
- Based on value:
    - .includes
- Based on test condition:
    - .some
    - .every

## A new string
- Based on separator string:
    - .join

## To tranform to value
- Based on accumulator:
    - .reduce - (Boil down array to single value of any type: number, string ,boolean, or even new array or object)

## To just loop array
- Based on callback:
    - forEach - (Does not create a new array , just loops over it)

