// Functions : It is block of code which we can reuse as many as time we want
// Function is a keyword

/*Syntax: 
function function_name(){
  scope of the function
}
  function_name()  // for execution of the function
*/

//Basic code
function myname() {
    console.log("P");
    console.log("R");
    console.log("I");
    console.log("Y");
    console.log("A");
    console.log("N");
    console.log("S");
    console.log("H");
    console.log("I");
}
myname()  // execution or reference of function

// Parameter : when we take input value in function i.e. is parameters
// Arguments : when we call/execute the value in function i.e. is arguments. arguments are passed in the reference of function

// Code 1 
function addingNumber(number1, number2) { //number1,number2 is the parameter
    console.log(number1 + number2);
}
addingNumber() // NaN : beacuse we haven't pass any arguments
addingNumber(3, 7) //10 : hence now passed the arguments
addingNumber(3, "7") // 34 : as string and number = string
addingNumber(3, "a") // 3a
addingNumber(3, null) //3
const result = addingNumber(3, 7) //10 : executing the function while declaring it in variable
// console.log("Result: ", result) // Result : undefined because we havenn't pass the return value

// code 2 (way 1)
function multiplyNumber(value1, value2) {
    return value1 * value2
}
const multiply = multiplyNumber(5, 2)
console.log("Value of Multiplication is :", multiply); //Value of Multiplication is : 10

//code2 (way 2)
function addTwoNumber(number1, number2) {
    let result = number1 + number2   // we stored number1,number2 in the variable i.e. result
    return result // we return result by this we didnot get the undefined value
    console.log("BCA") /* after return keyword we cannot run any line of code but before return keyword line we can execute any line of code*/
}
const add = addTwoNumber(3, 4) // addTwonumber stored in new variable or you can use result as variable i have used above that's why i am giving the "add" variable name
console.log("Result: ", add) // Now we execute the add variable where the function addTwonumber is stored // Output is : Result:  7

// Code 3 
function signin(Username) {
    return `${Username} just logged in` // Just give backticks and defined the variable by ${define the parameter} and message
}
console.log(signin("PRIYANSHI")) //just execute and Variable value

//Example
function whatsapp(message) {
    return `How are you ${message} ! `
}
console.log(whatsapp("Priyanshi")); //How are you Priyanshi !
console.log(whatsapp()); //How are you undefined !


// To stay away from "undefined value" we use Conditional Statements
//These type of problem occur when user did not give any arguments
function snapUser(message) {
    if (message === undefined) { // if condition only run when the condition is tru otherwise is will not run
        console.log("Please enter a username");
        return
    }
    return `${message} machale !`
}
console.log(snapUser("Dhoom ")); // Dhoom machale !
console.log(snapUser());//Please enter a username  undefined

// Define with parameter 
function twitterUser(IDrname = "sam") { // define the parameter
    if (!IDrname) { //[!IDrname mean that it check it is true or not if is not it will end the if condition and print the condiiton that is out of this cond.]
        console.log("Plse enter username :");
        return
    }
    return `${IDrname} just logged in`;
}
console.log(twitterUser()); //sam just logged in [we already befine the argument in parameter]
console.log(twitterUser("priyanshi")); //priyanshi just logged in [it overwrite the given string]

//When we try to create shopping app we started adding all the item in cart so we want to collect all the item in one place we will use:
// *** Spread Operator/ Rest Operator (similiar but depend on use case)

function calculateCartPrice(...num1) {
    return num1
}
console.log(calculateCartPrice(200, 400, 500)) //we get in array

//Something for interview purpose
function Price(val1, val2, val3, ...num) {
    return num
}// Val1 = 200, val2=450, val3=500, and rest will be in num for we return num
console.log(Price(200, 450, 500, 800, 2000)); //[ 800, 2000 ]

// Passing Object in Function (Way 1)
/* Create object first */
const user = {
    Item: "Watch",
    Price: 2500,
}
// Run function by passing any parameter
function handleObject(anyObject) {
    console.log(`Item name is ${anyObject.Item} and Price is ${anyObject.Price}`);
}
handleObject(user) //Item name is Watch and Price is 2500

// We can Directly pass object in function (way2)
function manageObject(items) {
    console.log(`Item name is ${items.itemname} and Price is ${items.Rate}`);
}
manageObject({
    itemname: "Linen Shirt",
    Rate: 2500
}) //Item name is Linen Shirt and Price is 2500

// Passing Array in function [Way 1]
const MyArray = [200, 500, 800, 1000]
function handleArray(fetchArray) {
    return fetchArray[2]
}
console.log(handleArray(MyArray));

//Directly Adding array in function [Way 2]
function manageArray(GetArray) {
    // return GetArray[4] //By this fetch any index value
    return GetArray // Get all the index value
}
console.log(manageArray([500, 100, 800, 1000, 200]));
