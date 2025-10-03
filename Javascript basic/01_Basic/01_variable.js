//const [it's value is not changeable/ we cannot defined it again]
const accountId = 144553;
// accountId = 2 // try to change but it is undefined

//let &var can be defined again
let accountEmail = "hitesh@google.com";
//we mostly don't prefer var beacuse of the block issue and fucntional scope]
var accountPassword = "12345";

// we can define variable without using var,let&const 
//but it is not a good practice
accountCity = "Jaipur";

//we can define var without giving value as it is undefined
let accountState;

//change the value of var&let & accountcity
accountEmail = "hc@hc.com";
accountPassword = "21212121";
accountCity = "Bengaluru";


// it is used to print the output 
console.log(accountId);

//instead of writing console.log multiple times we use console.table
console.table([
    accountId,
    accountEmail,
    accountPassword,
    accountCity,
    accountState, //value of this is undefined as we havent give any value
]);


