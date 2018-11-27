"use strict";

/**
 *function takes a number (n) and returns the sum of the numbers 1 to n
 * @param n
 * @returns {number}
 */
function basic_sum(n) {

    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;

}

/**
 * Function takes a number (n) and returns the sum of the multiples of 3 or 5 to n.
 * @param n
 * @returns {number}
 */

function sum_3_5(n) {

    let sum = 0;
    for (let i = 0; i < n; i++) {

        if (i % 3 === 0 || i % 5 === 0) {

            sum += i;
        }
    }
    return sum;
}

/**
 * Function returns the largest integer in a given array.
 * @param arr
 * @returns {number}
 */
function largest_int(arr) {

    let largest = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;

}

/**
 * Function checks whether an element occurs in the array.
 * @param arr
 * @param valToCheckFor
 * @returns {boolean}
 */

function in_array(arr, valToCheckFor) {

    var i = 0, len = arr.length;

    while(i < len && arr[i] != valToCheckFor) {

        i++;
    }
    return i != len;
}

/**
 * Function concatenates two arrays using the spread operator.
 * @param arr1
 * @param arr2
 * @returns {...*[]}
 */

function concat_arrays(arr1, arr2) {

    let merged = [...arr1,...arr2];
    return merged;
}

/**
 * Creates an object that has a property 'name' with the food name and a property 'ingredients' with an of array of ingredients
 * Example call: `let pizza = food_object_factory('pizza', 'tomato sauce', 'cheese', 'banana peppers')`
 * @param {string} name
 * @param {string[]} ingredients
 * @return {object} the food object
 */
function food_object_factory(name, ...ingredients) {
    //let n = {
    //    'name': name,
    //    'ingredients': ingredients,
    //};

    //return n;

    //return {
    //    'name' : name,
    //    'ingredients': ingredients
    //};

    return {name, ingredients};
}

/**
 * Sums positive numbers within an array of mixed values
 *
 * ** IMPORTANT: **
 * use BOTH `Array.protoype.reduce()` and the `Array.protoype.filter()` methods
 * Do not use loops or conditionals of any other sort here
 *
 * Example call: `let sum = reduce_sum_positive([5, -2, 0, 'javascript', 'problems', 'are fun', 3])`; // sum should equal 8
 * @param {int[]} values the array of values to take
 * @return {int} the sum of all the positive integers in values
 */
function reduce_sum_positive(values) {
    //to filter out non-numericals
    let onlyNums = values.filter(e => isFinite(e));
    //let positiveIntegers = values.filter(value => {....});
    let posInts = onlyNums.filter(value => value >= 0);
    //use reduce method to add all remaining numerical elements
    let sum = posInts.reduce((acc, val) => acc + val);
    return sum;
}

/**
 * Takes an array of integers and another integer to add to each value within the array
 * Example: increase_ints([1, 2, 4, 8], 3) returns [4, 5, 7, 11]
 *
 * ** IMPORTANT: **
 * use BOTH `Array.protoype.map()` method
 * Do not use loops of any other sort here
 *
 * @param {int[]} values the array of values to take
 * @param {int} valueToIncreaseBy the value to increase each int within the array by
 * @return {int[]} the modified array
 */
function increase_ints(values, valueToIncreaseBy) {
    {
      values = values.map(x => x + valueToIncreaseBy);
    }
return values;
}


    const Test = {
        run: () => {
            Test.basicSum();
            Test.sum35();
            Test.largestInt();
            Test.inArray();
            Test.concatArrays();
            Test.foodObjectFactory();
            Test.reduceSumPositive();
            Test.increaseInts();
        },

        rand10Plus: (max) => Math.floor(Math.random() * (max - 10)) + 10,
        basicSum: () => {
            if (basic_sum(5) === 1 + 2 + 3 + 4 + 5
                && basic_sum(10) === basic_sum(5) + 6 + 7 + 8 + 9 + 10) {
                console.log("basic_sum() passes");
            } else {
                console.error("basic_sum() fails");
            }
        },

        sum35: () => {
            // n = 19 => sum = [3, 5, 6, 9, 10, 12, 15, 18] = 78
            // n = 23 => sum = [3, 5, 6, 9, 10, 12, 15, 18, 20, 21] = 119
            if (sum_3_5(19) === 78
                && sum_3_5(23) === 119) {
                console.log("sum_3_5() passes");
            } else {
                console.error("sum_3_5() fails");
            }
        },

        largestInt: () => {
            if (largest_int([-20, 327, 0, 218, 5, 12, 474, 388]) === 474) {
                console.log("largest_int() passes");
            } else {
                console.error("largest_int() fails");
            }
        },

        inArray: () => {
            if (in_array([-20, 327, 0, 218, 5, 12, 474, 388], 218) === true
                && in_array([73, "hello", 3, "world"], 5) === false
                && in_array(['truth be told', 'i think this assignment is too easy', 'right?'], 'truth be told') === true) {
                console.log("in_array() passes");
            } else {
                console.error("in_array() fails");
            }
        },

        concatArrays: () => {
            let result = concat_arrays([-20, 327, 0, 474, 388], [218, 50]);
            let expected = [-20, 327, 0, 474, 388, 218, 50];
            if (JSON.stringify(result) === JSON.stringify(expected)) {
                console.log("concat_arrays() passes");
            } else {
                console.error(`concat_arrays() fails:\n\tReturned: ${result}\n\tExpected: ${expected}`);
            }
        },

        foodObjectFactory: () => {
            let expected = '{"name":"pizza","ingredients":["tomato sauce","crust","cheese","banana peppers"]}';
            let result = food_object_factory('pizza', 'tomato sauce', 'crust', 'cheese', 'banana peppers');
            if (result && JSON.stringify(result) === expected) {
                console.log("food_object_factory() passes");
            } else {
                console.error(`food_object_factory() fails:\n\tReturned: ${result}\n\tExpected: ${expected}`);
            }
        },

        reduceSumPositive: () => {
            let testVals = [Test.rand10Plus(1000), Test.rand10Plus(1000), Test.rand10Plus(1000)];
            let testArr = ['this', 'is', testVals[0], 0, -127, testVals[1], -342, -1, 'a', testVals[2], 'test'];
            let result = reduce_sum_positive(testArr);
            let expected = testVals[0] + testVals[1] + testVals[2];

            if (result === expected) {
                console.log("reduce_sum_positive() passes -- but ensure you are using filter() & reduce()");
            } else {
                console.error(`reduce_sum_positive() fails:\n\tReturned: ${result}\n\tExpected: ${expected}`);
            }
        },

        increaseInts: () => {
            let testVals = [Test.rand10Plus(1000), Test.rand10Plus(1000), Test.rand10Plus(1000)];
            let testIncrementer = Test.rand10Plus(5);

            let increaseIntsResult = increase_ints(testVals, testIncrementer);

            if (increaseIntsResult
                && increaseIntsResult[0] === testVals[0] + testIncrementer
                && increaseIntsResult[1] === testVals[1] + testIncrementer
                && increaseIntsResult[2] === testVals[2] + testIncrementer) {
                console.log("increase_ints() passes -- but ensure you are using map()");
            } else {
                console.error("increase_ints() fails");
            }
        }
    };

    Test.run();
