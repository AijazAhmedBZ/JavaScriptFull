const myObject = {
  js: "javascript",
  cpp: "c++",
  rb: "ruby",
  swift: "swift by apple",
};

for (const key in myObject) {
  //   console.log(myObject[key]);
  //   console.log(`${key} is shortcut for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
  //   console.log(key);
  //   console.log(programming[key]);
}

const map = new Map();//Map is not iteratable
map.set("PK", "Pakistan");
map.set("AF", "Afghanistan");
map.set("IR", "Iran");

for (const key in map) {
  console.log(key);
}
