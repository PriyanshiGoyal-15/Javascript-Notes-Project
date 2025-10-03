// ***************Number***********************

const score = 400;

//defining balance into new which is Number datatype
const balance = new Number(200)
console.log(balance);
console.log(typeof score); //number 
console.log(typeof balance); //object


//Number Prototype
console.log(balance.toString()); //it will convert the number into string 
console.log(typeof balance.toString()); //string

console.log(balance.toString().length); //give length of the balance after converting it into the string

console.log(balance.toFixed(2));//it will convert the number into string and show 2 decimal points/number after the number
console.log(balance.toFixed(1));//it will show 1 decimal number after the number

const othernumber = 12.89
console.log(othernumber.toPrecision(3)); //it will not show the number after 3 digit.It will give precised value of the number and output : 12.4. It will round off the number.


//it will convert the number into Indian format with commas
const hundred = 1000000
console.log(hundred.toLocaleString('en-IN')); //it will convert the number into Indian format with commas
console.log(hundred.toLocaleString('en-US')); //it will convert the number into US format with commas


//++++++ Maths +++++++++++
// Math is the built-in library in js which have different methods and properties
console.log(Math); //it is an object
console.log(Math.abs(-5)); //it willconvert -ve value into +ve value that is absolute value . Output: 5 [positive stay positive]

console.log(Math.round(4.3)); //it will round off the value to nearest integer.
console.log(Math.round(4.6));

//if you want to control the number that i want upper value or lower value
console.log(Math.ceil(4.4)); //ceil is used to give the upper value i.e. 5
console.log(Math.floor(4.7)); //floor is used to give the lower value i.e. 4

console.log(Math.pow(5, 3)); //it will give the power value of the number . In this 5 is number and 3 is power value. //output : 125

console.log(Math.min(45, 23, 15, 78)); //it will give the minimum value from the given numbers. Output: 15

console.log(Math.max(45, 48, 23, 78)); //it will give the maximum value from the given numbers. Output: 78

// Math Random Function 
console.log(Math.random()); //it will give the random number between 0 to 1 but it will never give 1

console.log((Math.random() * 10) + 1);
const min = 1
const max = 6

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

