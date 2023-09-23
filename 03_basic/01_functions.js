function sayMyName() {
  console.log("A");
  console.log("I");
  console.log("J");
  console.log("A");
  console.log("Z");
}
// sayMyName();//sayMyName is reference and () is execution

// function addTwoNumbers(number1, number2) {
//   //here (number1, number2) are input values of function and it is called parameters
//   console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
  //   let result = number1 + number2;
  //   return result;
  return number1 + number2; //just another way to write above line code
}

// addTwoNumbers(3, 4); // here (3 , 4) used while calling function and it is called argumentes
const result = addTwoNumbers(3, 5);

// console.log("Result : ", result);

function loginUserMessage(username = "Aijaz") {
  if (!username) {
    console.log("Please enter user name");
    return;
  }
  return `${username} is just logged in`;
}
// console.log(loginUserMessage("Aijaz"));
// console.log(loginUserMessage("Ahmed"));

function calculateCartPrice(...num1) {
  //here ... befor num1 is rest operator
  return num1;
}
// console.log(calculateCartPrice(200,300,400))

const user = {
  username: "Aijaz",
  price: 199,
};

function handleObject(anyobject) {
  console.log(
    `User name is ${anyobject.username} and price is ${anyobject.price}`
  );
}

// handleObject(user);
handleObject({
  username: "Ahmed",
  price: 299,
});

const myNewArray = [200, 400, 100, 600];
function returnSecondValue(getvalue) {
  return getvalue[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 600]));
