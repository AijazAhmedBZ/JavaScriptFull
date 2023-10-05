const promiseOne = new Promise((resolve, reject) => {
  //Do any async task
  //DB calls, cryptography, network
  setTimeout(() => {
    console.log("Async task one");
    resolve();
  }, 1000);
});

promiseOne.then(() => {
  console.log("Promise Consumed");
});

new Promise((resolve, reject) => {
  console.log("Async task two");
  resolve();
}, 1000).then(() => {
  console.log("Async task two resolved");
});

const promisethree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "Aijaz", email: "abc@abc.com" });
  }, 1000);
});

promisethree.then((user) => {
  console.log(user);
});

const promisefour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "Aijaz", email: "abc@abc.com" });
    } else {
      reject("Error: Something went wrong");
    }
  }, 1000);
});

promisefour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolved or rejected"));

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "Ahmed", email: "abc@abc.com" });
    } else {
      reject("Error: Promise five went wrong");
    }
  }, 1000);
});

consumedPromiseFive = async () => {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
consumedPromiseFive();

// getAllUsers = async () => {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     // console.log(response)
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error)
//   }
// };

// getAllUsers();

fetch("https://api.github.com/users/hiteshchoudhary")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
/*********************Fetch**********
 fetch creates micro task queue which is priority queue over task queue
 */