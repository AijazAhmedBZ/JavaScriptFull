const discriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(discriptor);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
  name: "ginger tea",
  price: 250,
  isAvailable: true,
  orderchai: function () {
    console.log("chai nahen bani");
  },
};

// console.log(chai);
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
  writable: false,
  enumerable: true,
  configurable: false,
});

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}
