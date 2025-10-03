// Array related Loops


//For of Loop
const arr = ['1, 2, 3, 4, 5']
for (const num of arr) {
    console.log(num);
}
/* num is = variable name
arr = object which mean on which we have to run for of loop
*/

const greetings = "Hello User"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}
/*
Each char is H
Each char is e
Each char is l
Each char is l
Each char is o
Each char is
Each char is U
Each char is s
Each char is e
Each char is r
*/


/******  Map **********/
// Map : It holds the key-value pairs and any dtype can be taken. Their will be no duplicate value we always have to take unique value. And always stay in order
const map = new Map()
map.set('IN', "INDIA")
map.set('USA', "UNITED STATE OF INDIA")
map.set('FR', "FRANCE")
map.set('IN', "INDIA") // It wil not print because in map it will not take duplicate value

console.log(map);
/*Map(3) {
  'IN' => 'INDIA',
  'USA' => 'UNITED STATE OF INDIA',
  'FR' => 'FRANCE'
} */

// Put Loop on Map
for (const [key, value] of map) {
    console.log(key, '->', value);
}
/*IN -> INDIA
USA -> UNITED STATE OF INDIA
FR -> FRANCE */

// Prinitng only value
for (const [value] of map) {
    console.log(value);
}
/* IN
USA
FR */

