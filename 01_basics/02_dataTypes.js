"use strict"; // treat all JS code as newer version

// Primitive datatypes are called by value

/*
01-string
02-number
03-boolean
04-null
05-undefined
06-symble
07-bigInt
*/

//javaScript is dynamicaly typed language

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outSideTemp = null;
let userEmail;

//symbol

const id = Symbol("123");
const anotherId = Symbol("123");

// console.log(id);
// console.log(anotherId);

// console.log(id === anotherId);

const bigNumber = 12345678912654654n;

// Reference or Non-Primitive datatypes are called by reference

/*
01-array
02-objects
03-functions
*/

const heros = ["Malik", "Aijaz", "Ahmed"];
let myObj = {
  name: "Aijaz",
  age: 44,
};

const myFunction = function () {
  console.log("Aoa");
};

//************Memory Types*********** */

/*Primitive types use Stack memory, and
reference or Non-Primitive types uses Heap memory (any change will made on original value)*/

const myYoutube = "Aijaz";
let anotherName = myYoutube;

// console.log(anotherName);

let userOne = {
  email: "example@123.com",
  cell: +3312887490,
};

let userTwo = userOne

userTwo.email = "abc@abc.com"

console.log(userOne.email)
console.log(userTwo.email)