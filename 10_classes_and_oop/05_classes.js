//ES6

// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }

//   encryptPassword() {
//     return `${this.password}abc`;
//   }
//   changeUserName() {
//     return `${this.username.toUpperCase()}`;
//   }
// }

// const mangaoo = new User("mangaoo", "mangaoo@gmail.com", "123");

// console.log(mangaoo.encryptPassword());
// console.log(mangaoo.changeUserName());

//behind the scene

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};

User.prototype.changeUserName = function () {
  return `${this.username.toUpperCase()}`;
};

const gher = new User("gher", "gher@gmail.com", "123");

console.log(gher.encryptPassword());
console.log(gher.changeUserName());
