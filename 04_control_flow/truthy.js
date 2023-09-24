// const userEmail = "a@123.com"
// const userEmail = ""
const userEmail = [];
if (userEmail) {
  //   console.log("Got user email");
} else {
  console.log("Don't have user email");
}

//falsy values

//false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values

//true, "0", 'false', " ", [], {}, function(){}

if (userEmail.length === 0) {
  //to check empty array
  console.log("Array is empty");
}

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}
