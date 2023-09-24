const user = {
  username: "Aijaz",
  price: 999,
  wellcommessage: function () {
    console.log(`${this.username}, wellcome...`);
    console.log(this);
  },
};

// user.wellcommessage()
// user.username = "Malik"
// user.wellcommessage()
// console.log(this); //**this*** method is used to refer context, it only works with objects not functions

// function chai() {
//     let username = "Aijaz"
//   console.log(this.username);
// }

// chai()

// const chai = function (){
//     let username = "Aijaz"
//     console.log(this.username)
// }
// chai()

const chai = () => {
  //remove function word and add => after parentheses, () => {} this is arrow function
  let username = "Aijaz";
  console.log(this.username);
};

// chai();

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

// const addTwo = (num1, num2) => num1 + num2;
//in implicit return, return keyword not used and values can be grouped in ()
// const addTwo = (num1, num2) => (num1 + num2);
const addTwo = (num1, num2) => ({username:"Aijaz"});//to return object will be wrapped in {braces}

console.log(addTwo(3, 4));
