let myDate = new Date();

// console.log("typeof: ", typeof myDate);
// console.log("toDateString: ", myDate.toDateString());
// console.log("toISOString: ", myDate.toISOString());
// console.log("toJSON: ", myDate.toJSON());
// console.log("toLocaleDateString: ", myDate.toLocaleDateString());
// console.log("toLocaleTimeString: ", myDate.toLocaleTimeString());
// console.log("toString: ", myDate.toString());
// console.log("toTimeString: ", myDate.toTimeString());
// console.log("toUTCString: ", myDate.toUTCString());

let myCreatedDate = new Date("01-14-2023");

// console.log("myCreatedDate",myCreatedDate);
// console.log("toDateString()",myCreatedDate.toDateString());

let myTimeStamp = Date.now()

// console.log("myTimeStamp",myTimeStamp)
// console.log("myCreatedDate.getTime()",myCreatedDate.getTime())
// console.log("Math.floor(Date.now())",Math.floor(Date.now()/1000)) //between two time comparisions always do in mili seconds
// console.log("Math.floor(Date.now())",Math.floor(myTimeStamp/1000)) //between two time comparisions always do in mili seconds

let newdate = new Date()

// console.log(newdate)
// console.log(newdate.getMonth()+1)
// console.log(newdate.getDay())
// console.log(newdate.getTime())

// `${newdate.getDay()} and the time is ${newdate.getTime()}`

console.log(
  newdate.toLocaleString("default", {
    year: "numeric",
    month: "long",
    weekday: "long",
  })
);