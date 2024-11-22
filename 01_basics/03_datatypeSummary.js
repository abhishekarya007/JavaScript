//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId); // false

// const bigNumber = 3456543576654356754n

// Reference (Non Primitive) ** typeof Non Primitive = Object

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
  name: "abhishek",
  age: 25,
};

const myFunction = function () {
  console.log("Hello world");
};

console.log(typeof heros);

//++++++++++++++++++++++++++++++++++
//Memory
//Stack(Primitive) Heap(Non-Primitive)

//Stack returns copy of a value
//Heap returns reference of a value

let fname = "abhishek";

let name2 = fname;
name2 = "arya";

console.log(fname);
console.log(name2);
//fname will not change

let user = {
  name: "Abhishek",
};

let userTwo = user;
userTwo.name = "Arya";

//user.name will be update to "Arya" because it takes the reference to the obj

console.log(user);
