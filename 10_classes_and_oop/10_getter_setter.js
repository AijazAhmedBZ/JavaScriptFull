class User {
  constructor(email, password) {
    (this.email = email), (this.password = password);
  }
}

const aijaz = new User("aijaz@aijaz.ai", "123");
console.log(aijaz.password)