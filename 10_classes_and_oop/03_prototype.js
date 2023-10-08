// let myName = "Aijaz     ";

// console.log(myName.truelength);

let heros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    // console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.Aijaz = function () {
  //   console.log("Aijaz is present in all objects");
};

Array.prototype.Ahmed = function () {
  //   console.log("Ahmed is present in all arrays");
};

// heroPower.Aijaz()
heros.Aijaz();
heros.Ahmed();
// heroPower.Ahmed()

//prototypal inheritance

const User = {
  name: "Aijaz",
  email: "mangaoo@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TaSupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

// console.log(User)
// console.log("Teacher ",Teacher)
// console.log("Teacher.__proto__ ",Teacher.__proto__)
// console.log(TaSupport.__proto__)

//modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "Mangaoo    ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is : ${this.trim().length}`);
};

anotherUsername.trueLength()

"Malik       ".trueLength()
"Aijaz       ".trueLength()
"Ahmed       ".trueLength()