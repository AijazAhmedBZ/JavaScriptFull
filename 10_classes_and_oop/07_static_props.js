class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Username : ${this.username}`);
  }
  static creatId() {
    return "123";
  }
}

const Aijaz = new User("Aijaz");

// console.log(Aijaz.logMe());
// console.log(Aijaz.creatId());

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const iPhone = new Teacher("iPhone", "i@phone.com");

// iPhone.logMe()
console.log(iPhone.creatId());
