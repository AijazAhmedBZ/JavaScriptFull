// there are two ways to declare objects

//01-object litral
//02-constructor

//singleton object cannot created by litrals
//singleton object can created by constroctor
// Object.create is constructor method and create singlton object

//01-object litral

const mySym = Symbol("key1");

const jsUser = {
  name: "Aijaz",
  "full name": "Aijaz Ahmed",
  [mySym]: "mykey1",
  age: 18,
  location: "Karachi",
  email: "abc@abc.com",
  isLggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);
// console.log(typeof jsUser[mySym]);

// console.log(jsUser)
jsUser.email = "123@123.com"
// Object.freeze(jsUser)
// console.log(jsUser)
jsUser.email = "456@456.com"
// console.log(jsUser)

jsUser.greetings = function(){
    console.log("Aoa")
}
jsUser.greetingsTwo = function(){
    console.log(`${this.name}`)
}
console.log(jsUser.greetings())
console.log(jsUser.greetingsTwo())