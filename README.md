# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jonny-ms/lotide`

**Require it:**

`const _ = require('@jonny-ms/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`:  returns the first item in an array, and returns `undefined` if the array is empty.
* `tail(array)`: returns an array with everything except the first item in an array, and returns `undefined` if the array is empty or only has one element.
* `middle(array)`: returns the middle element of an array. If the number of elements in the array is even then it returns the two middle elements. If the array has less than three elements it returns an empty array
* `flatten(array)`: flattens an infinite number of nested arrays.
* `takeUntil(array, callback)`: returns an array with all elements before conditions of callback function are no longer truthy.
* `without(array1, array2)`: returns an array with all elements of array1 that are not in array2.
* `map(array, callback)`: takes an array and a callback function, and returns an array based on the results of the callback function.
* `letterPositions(string)`: takes a string and returns an object with all the letters in the string as keys, and their indeces in an array as their value.
* `findKeyByValue(object, value)`: takes an object and a value, and returns the first key that holds said value. If the value is not found, it returns `undefined`.
* `findKey(object, callback)`: takes an object and a callback function, and returns the first key for which the callback holds true.
* `countLetters(string)`: takes a string and returns an object of letters found with their count as a value.
* `countOnly(array, object)` takes an array and an object and return an object containing counts of everything that the input object listed.