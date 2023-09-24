//Immediately Invoked Function Expressions (IIFEs)

(function chai() {
  //named IIFE
  console.log("DB connected");
})();

((name) => {
  console.log(`DB connected Two ${name}`);
})("Aijaz");

