function SetUsername(username) {
  //complex DB calls
  this.username = username;
  console.log("called")
}

function creatUser(username, email, passwrod) {
  SetUsername.call(this, username);

  this.email = email;
  this.passwrod = passwrod;
}

const mangaoo = new creatUser("mangaoo", "mangaoo@fb.com", "123");

console.log(mangaoo);
