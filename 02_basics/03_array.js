// array

const myArr = [0, 1, 2, 3, 4, 5];
const myHeors = ["shaktiman", "naagraj"];

const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr[1]);

// Array methods

myArr.push(6);
myArr.push(7);
myArr.pop();

//append val at the start of the arr
myArr.unshift(9);

//same as pop()
myArr.shift();

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join(",");

// console.log(myArr);
// console.log(newArr);

/// Slice and Splice

const testArr = [1, 2, 3, 4, 5];

console.log(testArr);

console.log(testArr.slice(2));

console.log(testArr.splice(1, 2));
console.log(testArr);

//note: splice returns the deleted part of array, 2nd argument take delete count
