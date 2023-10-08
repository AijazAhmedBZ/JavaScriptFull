class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }
  addCourse() {
    console.log(`A new course added by ${this.username}`);
  }
}
const mangaoo = new Teacher("Mangaoo", "mangaoo@gmail.com", "123");

// mangaoo.addCourse();
mangaoo.logMe();

const gherPer = new User("Gher Per")

gherPer.logMe()

console.log(mangaoo === gherPer)
console.log(mangaoo instanceof Teacher)
console.log(gherPer instanceof User)
console.log(mangaoo instanceof User)