//****datatypes is of 2 type:[type of dtype is also used to as memory where the data store]***
/*
1 => Primitive datatypes: it is call by value
-> String [Enclosed in double quotes and single quotes]
-> Number [it is number ]
-> Boolean [true or false]
-> Null [Nan, 0]
-> Undefined [variable is defined but no value is defined]
-> Symbol [it is used to make the unique variable]
-> Bigint [Some scientific and Huge number store in bigint]

2 => non-primitve datatypes/Reference Type
[where we can get directly allocated memory]
[here the typeof data is always object 
but the function typeof is ObjectFunction but when we checked ut will return function itself ]
-> Array
-> Objects
-> Function
*/


// it will return string
const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const oursideTemp = null
let userEmail; //undefined
console.table([
    score,
    scoreValue,
    isLoggedIn,
    oursideTemp,
])

//checking the dtype by typeof
console.log(typeof score); //number
console.log(typeof scoreValue); //number
console.log(typeof isLoggedIn); //boolean
console.log(typeof oursideTemp); //object


//***symbol declaration*** */
// in this a variable can hold the same value but when we used symbol then it mean they are unique and they are not same value
//hence give uniqueness to the value
const id = Symbol('123')
const anotherID = Symbol('123')
console.log(id === anotherID) //false

//** BigInt ****/
//just use bigint(...number...) it will represent as bigint
const bigNumber = BigInt(9007199254740991)
console.log(typeof bigNumber);


// ****Array*****
// Array always written in square braces[]
//and we can key key&values in curly brace{}
const names = ['priyanshi', 'Nisha', 'Sneha']
console.log(typeof names) //object
console.log(names) //[ 'priyanshi', 'Nisha', 'Sneha' ]
    //key & values in array
const heros = {
    name: "priyanshi",
    Course: "BCA",
}
console.log(heros); //{ name: 'priyanshi', Course: 'BCA' }


//****function***** */
// myFunction = function name and stored in const 
//function() => declaring function ,()=> this is used to give some parameter and properties.
const myFunction = function() {
    console.log("hello world");
}
myFunction();
console.log(typeof myFunction) //function[but it is ObjectFunction]

//************************************** 
// Stack memory [this memory used in primitive dtype,copy of memory] ,
// Heap memory [this memory used in non-primiive dtype],reference of the value
// stack memory example
let myYoutubename = "priyanshiGoyal"
let anotherName = myYoutubename
anotherName = "Codewithpriyanshi"
console.log(myYoutubename); //PriyanshiGoyal
console.log(anotherName); //Codewithpriyanshi

//heap memory example by object
let userOne = {
    email: "priyanshi@gmail.com"
}
let usertwo = userOne
usertwo.email = "priya@gmail.com"
console.log(userOne.email);
console.log(usertwo.email);