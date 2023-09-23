//array

// console.log("(Parantheses)")
// console.log("[Brackets]")
// console.log("{Braces}")
// console.log("Array[element, element]")

const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["Aijaz", "Ahmed"];
const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr2[1]);

//Array methods

// myArr.push(6) //push addes value at the end of an array
// myArr.push(7)
// myArr.pop() //pop removes value at the end of an array

// myArr.unshift(9); //unshift addes value at begining of an array
// myArr.shift(); //shift removes value at begining of an array

// console.log(myArr.includes(9));//checkes for value existence in an array and return in boolean i.e. true or false
// console.log(myArr.indexOf(9));//if value dose not exiset in an array then result will be -1

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

//slice, splice

console.log("Original Array", myArr);

const myn1 = myArr.slice(1, 3);
console.log("Slice",myn1)
// console.log("B", myArr);

const myn2 = myArr.splice(1, 3);//slice just bring section of an array without manipulating original array
console.log("Splice",myn2)//splice manupilates original array
console.log("Slice after splice",myn1)
console.log("Original array after splice", myArr);
