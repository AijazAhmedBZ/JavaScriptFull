// ["", "", ""];
// [({}, {}, {})];

const arr = [1,2,3,4,5]

// for (const iterator of object) {
    
// }
for (const num of arr) {
    // console.log(num)
}

const greeting = "Hello world!"

for (const greet of greeting) {
    // console.log(`Each char is ${greet}`)
}

/***********   Map   ***********/

const map = new Map()
map.set('PK', "Pakistan")
map.set('AF', "Afghanistan")
map.set('IR', "Iran")

// console.log(map)

for (const [key, value] of map) { //this [key, value] is how array can be de structured 
    console.log(key, ':-', value)
}
