class User {
  constructor(email, password) {
    (this.email = email), (this.password = password);
  }

  get email() {
    return this._email.toUpperCase();
  }

  set email(value) {
    this._email = value;
  }

  get password() {
    return `${this._password}aijaz`;
  }
  set password(value) {
    this._password = value;
  }
}

const aijaz = new User("aijaz@aijaz.ai", "abc");

console.log(aijaz.email);
console.log(aijaz.password);
