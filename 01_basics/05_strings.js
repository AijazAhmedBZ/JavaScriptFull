//string interpolation

const myName = "aijaz";
const myRepo = 100;

// console.log(`Aoa, My name is ${myName.toUpperCase()} and my repo count is ${myRepo}`)

const gameName = new String("ageoe");

// console.log(gameName[0])
// console.log(gameName.__proto__)
// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf("e"))

const newString = gameName.substring(0, 2);
// console.log(newString)

const anotherString = gameName.slice(-5, 2);
// console.log(anotherString)

const name1 = "     Aijaz     ";
const dy = `${name1}`;

const newStringOne = "     Tahoora     ";

// console.log(newStringOne)

// console.log(dy.trim())
// console.log(dy)
// console.log(newStringOne.trim())
// console.log(dy)
// console.log(newStringOne.trim())
// console.log(dy)
// console.log(newStringOne.trim())
// console.log(dy)
// console.log(newStringOne.trim())
// console.log(dy)
// console.log(newStringOne.trim())
// console.log(dy)
// console.log(newStringOne.trim())
// console.log(dy)
// console.log(newStringOne.trim())
// console.log(dy)
// console.log(newStringOne.trim())
// console.log(dy)
// console.log(newStringOne.trim())
// console.log(dy)
// console.log(newStringOne.trim())
// console.log(dy)
// console.log(newStringOne.trim())
// console.log(dy)
// console.log(newStringOne.trim())

const url = "https://aijaz.com/aijaz%20ahmed";
console.log(url);
console.log(url.replace("%20", "")); // this is find and replace
console.log(url.includes("malik")); //returns true or false value after search

const myName1 = "Aijaz-Ahmed-Malik";
console.log(myName1.split("-"));
