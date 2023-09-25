//for

//syntax//
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }

//step 01 let index = 0;
//step 02 index < array.length;
//step 03 const element = array[index];
//step 04 index++
//loop step 02 than 03 than 04 till step to condition is true

for (let index = 0; index < 10; index++) {
  const element = index;
  if (element == 5) {
    // console.log(element, "is best number")
  }
  // console.log(element)
}

for (let i = 0; i <= 10; i++) {
  // console.log(`Outer loop: ${i}`)
  for (let j = 0; j <= 10; j++) {
    // console.log(`${j} Inner loop ${i} Outer loop`);
    //   console.log(i + " * " + j + " = " + i * j);
  }
}

let myArray = ["flash", "batman", "superman"];

for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  //   console.log(element);
}

// break and continue

for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log(`Detected 5`);
    break;
  }
  console.log(`Value of index is: ${index}`);
}
