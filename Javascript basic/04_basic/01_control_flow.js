//control flow -: It mean code execution is depend on the condition unnecessary executing whole code it will help us to run specific peice of code which is basically depend on the condition

const { use } = require("react");

/*********IF condition***** */
// if condition: it will only execute the code of block when the condition is true otherwise not

const userLoggedIn = true
if (userLoggedIn === true) {
    console.log("LogIn successful")
}

/*
*** Operator ****
< -> less than
> -> greater than
<=  -> less than or equal to
>=  -> greater than or equal to
==  -> equal to
!= -> not equal [negative checking]
=== -> it is for strict checking (somewhere we have number and string so for these kind of condition we use strict equal)
[= -> it is not an operator it just help us to assign the vale ]
*/

if (2 == "2") {
    console.log("Equal"); // Equal , It only check number no dtype matter
}

if (2 === "2") {
    console.log("executed"); // Not print anything as we use strict equal where datatype also matters

}

const temperature = 30
if (temperature < 40) {
    console.log("Weather is Okay"); // weather is okay
}// If we change the value of temperature instead of 30 we take 41 so it print nothing because it only execute if the condition is true


/*********IF-ELSE condition***** */
//if-else : it will execute when code of block is true and also exceute if code of block is false. In this we have both true and false condition
const temp = 45
if (temp < 40) {
    console.log("Temprature is good");
} else {
    console.log("Temprature is not so good"); //Temprature is not so good , Because if condition is false then it will execute else statment
}

const number = 19
if (number % 2 === 0) {
    console.log("Yes, it is divisible by 2");
} else {
    console.log("Try another Number");
}

//running according to the global and block scope
const score = 200
if (score > 100) {
    const power = 'fly'
    console.log(`User power: ${power}`); //User power: fly
}
// console.log(`User power: ${power}`); we cann't print it outside it's scope 


//Shorthand Notation
//[It is Implicit Method : Mainly Implicit is written in one line and end with semicolon but some developers use comma to write more lines of code and end with semicolon
//But not Good practice
const balance = 1000
if (balance > 500) console.log("Successful");

//Like this we ca write More line in Implicit method
const account_balance = 1000
if (balance > 500) console.log("Valid Amount"), //By adding comma
    console.log(`You have ${account_balance} in your account`); //Ending with semicolon


/****IF-Else-If statement******/
// This Statement is used to check the multiple statement based on condition
const amount = 1000
if (amount > 1000) {
    console.log("More Than 1000");
} else if (amount < 750) {
    console.log("less than 750");
} else if (amount < 900) {
    console.log("less than 900");
} else {
    console.log("Less than 1200");
}

//&& =Ampersent symbol which mean only run when the condition is true

const userLogIn = true
const debitCard = true
if (userLogIn && debitCard) {
    console.log("Allow to Buy Course");
}

// || = OR operator mean it only want one condition to be true from multiple condition 
const loggedInFromGithub = false
const loggedInFromGoogle = true
if (loggedInFromGithub || loggedInFromGoogle) {
    console.log("Logged In Successfully"); // Logged In Successfully
}


const user_email = [] //"priyanshi@gmail.com"
if (user_email) {
    console.log("Got user email")
} else {
    console.log("didn't get your email");
}

/*
Falsy Value[which value is consider as false] : false,0,-0,bigint(0n) , null, undefined, Nan,""

Truthy Value[which value is consisder as True] : "0"[string written as 0 then it is truthy value], 'false' , " ", [],{}, function(){}

*/

//Array is empty or not 
if (user_email.length === 0) {
    console.log("Array is empty");
} // just to check whether the array is empty or not if the length og array element is equal to 0 then it will print array is empty


//Object is empty or not
const emptyobj = {}
if (Object.keys(emptyobj).length === 0) {
    console.log("Object is empty");

}


/*
false  == 0 -> true
false == '' -> true
0 == '' ->true
*/


// Nullish Coalescig Operator(??) : NULL undefined
// It basically check if their is number, null, undefined value it's first priority will be to return the number
let val1;
// val1 = 5 ?? 10  // 5
// val1 = null ?? 10   //10
//val1 = undefined ?? 15  //15
val1 = null ?? 10 ?? 15 // in this first priority will be first number
console.log(val1);


// Terniary Operator
//condition ? true_statement : false_statemenent
const Tea = 80
Tea <= 60 ? console.log("Less than 80 ") : console.log("More than 80");
;
