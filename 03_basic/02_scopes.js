// {} //this is called block scope, values in block scope are not available outside the scope
//out of block scope is global scope, which is available in block scpoe
let a = 300;

if (true) {
  let a = 10;
  const b = 20;
  //   console.log("Inner of block scope: ",a);
  //   var c = 30;
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const userName = "Aijaz";
  function two() {
    const website = "youtube";
    console.log("From one username: ", userName);
  }
//   console.log("from function two website: ", website);
  two();
}
one()