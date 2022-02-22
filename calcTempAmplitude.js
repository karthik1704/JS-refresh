
const temperatures = [3, -2, -6 , -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// Understanding the Problem

// - What is temp amplitude? answer :  differeance between lowest and highest temp
// - How to compute max and min temperatures?
// - What's a sensor error? and what do to?

// Breaking up into sub-problems

// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - subtract main from max (amplitude) and return it

const calcTempAmplitude = function(arr){
    
    // const tempWithOutError=[];
    let min = arr[0];
    let max = arr[0];
    for (let i=0; i<arr.length; i++){
        const curTemp = arr[i];
        if (typeof curTemp !== 'number') continue;
        // tempWithOutError.push(arr[i]);
        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }

    // ES6 Way
    // // - Find max value in temp array
    // // const min = Math.min(...tempWithOutError); 
    // const min = Math.min.apply(null, tempWithOutError);

    // // - Find min value in temp array
    // // const max = Math.max(...tempWithOutError);
    // const max = Math.max.apply(null, tempWithOutError)
    // console.log(min, max);

    // - subtract main from max (amplitude) and return it
    return max - min;
}

console.log(calcTempAmplitude(temperatures)); 

// Problem 2 

// - Function should now receive 2 arrays of temps

// Understanding the problem
// - with 2 arrays , should implement functionality twice? No. Just merge 2 array to one

// Breaking up into sub-problems

// - Merge 2 arrays

const calcTempAmplitudeNew = function(t1, t2){
    const arr = t1.concat(t2);
    // const tempWithOutError=[];
    let min = arr[0];
    let max = arr[0];
    for (let i=0; i<arr.length; i++){
        const curTemp = arr[i];
        if (typeof curTemp !== 'number') continue;
        // tempWithOutError.push(arr[i]);
        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }

    // ES6 Way
    // // - Find max value in temp array
    // // const min = Math.min(...tempWithOutError); 
    // const min = Math.min.apply(null, tempWithOutError);

    // // - Find min value in temp array
    // // const max = Math.max(...tempWithOutError);
    // const max = Math.max.apply(null, tempWithOutError)
    // console.log(min, max);

    // - subtract main from max (amplitude) and return it
    return max - min;
}

console.log(calcTempAmplitudeNew(temperatures,[7,-4, 8, 9])); 