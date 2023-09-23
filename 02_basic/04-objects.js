// const tinderUser = new Object()  this is singleton object
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser)

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullName: {
      firstName: "Aijaz",
      lastName: "Ahmed",
    },
  },
};

// console.log(regularUser.fullname.userfullName.firstName);

const obj1 = {
  1: "a",
  2: "b",
};
const obj2 = {
  3: "c",
  4: "d",
};

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign({},obj1,obj2)  {} is target, obj1, obj2 is source

const obj3 = { ...obj1, ...obj2 };

// console.log(obj3)

const user = [
  {
    id: 1,
    email: "123@123.com",
  },
  {
    id: 2,
    email: "456@123.com",
  },
  {
    id: 3,
    email: "789@123.com",
  },
];

user[1].email;

// console.log(tinderUser)
// console.log(Object.keys(tinderUser))//bring keys of an object
// console.log(Object.values(tinderUser))//bring values of an object
// console.log(Object.entries(tinderUser))//make key value pair in an array form
// console.log(tinderUser.hasOwnProperty("isLoggedIn"))//case sensitive to check any value if available or not

const course = {
  course: "Javascript",
  price: 999,
  courseInstructor: "Aijaz",
};

console.log("course.courseInstructor",course.courseInstructor)
const {courseInstructor} = course
console.log("courseInstructor",courseInstructor)
const {courseInstructor: instructor} = course
console.log("instructor",instructor)

//REACT EXAMPLE to destructure object

// const navbar = ({company})=> {

// }
// navbar(company = "Aijaz")