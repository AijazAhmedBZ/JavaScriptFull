// object literal is literally is object

const user = {
  username: "Aijaz",
  loginCount: 8,
  signIn: true,
  getUserDetails: function () {
    // console.log("Got user details from database");
    // console.log(`Username: ${this.username}`);
    console.log(this);
  },
};

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this)

/* - Constructor function *** below here new key word is constructor function
which allows to create multiple instances from single object literal
and make new context or new empty instance
*/

// const promiseOne = new Promise();
// const date = new Date();

function User(username, loginCount, isLoggedIn) {
  (this.username = username),
    (this.loginCount = loginCount),
    (this.isLoggedIn = isLoggedIn);
    
    this.greeting = function(){
        console.log(`Welcom Mr. ${username}`)
    }
    return this
}

// const userOne = User("Aijaz", 12 , true);
// const userTwo = User("Ahmed", 11 , false);

const userOne = new User("Aijaz", 12 , true);
const userTwo = new User("Ahmed", 11 , false);

console.log(userOne)
console.log(userTwo)