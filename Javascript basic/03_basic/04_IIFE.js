// IIFE = Immediately Invoked Function Expression

//It immediately execute the scope code. and We used this to make safe code from global pollution(declaration and all) 

// Syntax of iife:
/*
(return function or arrow ..anything you want to execute)(just leave blank or give any argument);
*/

// Code 1 : It is Named IIFE as it has name
(function chai() {
    console.log(`DB_CONNECTED`); //DB_CONNECTED

})();
// first paranthesis : is for function
// and second paranthesis : if for the execution
// and add semicolon after IIFE code completion

// COde 2
//We can run this just by arrow function : Simple iife
(() => {
    console.log(`DB_CONNECTED_2 `); //DB_CONNECTED_2

})();

//Code 3
// Run IIFE by adding variable / Pass Parameter in IIFE
((name) => {
    console.log(`Db_Connected_3 ${name}`); //Db_Connected_3 Priyanshi

})("Priyanshi");

setInterval(() => {
    console.log("Hello");
}, 1000);