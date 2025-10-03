// **** Objects { } ******

//We can declare objects with to methods: 1. Literals , 2. Constructors

//Singleton : when we created object with constructors then singleton object is created.It ensures that a class has one instance throughtout the application. And when we created the objects with litrals then singleton objects will not occur

// Object.create : defining object by constructor
// const user_js = { }  : defining objects by literals

//+++++ Objects literals +++++++

const user_js = {
    name: "Priyanshi",  // defining key : value of the element
    "full_name": "Priyanshi Goyal", //now we can dirctly print this
    course: "BCA",
    location: "Jaipur",
    email: "priyanshi@gmail.com",
    lastloginDays: ["Monday", "Saturday"],
    isAvailable: false
}

console.log(user_js["course", "email"]);
console.log(user_js.email) // we can access a single key-value pair
console.log(user_js["full_name"]); // we have define it like this as we used the string into the object.

user_js.course = "Bachelors of Computer Application" //from changing the value

//FREEZE the object which mean after this now we can change anything
Object.freeze(user_js) //freese the object i.e. user_js . After using freeze now whatever we like to change in object it cannot reflect after the freeze
user_js.course = "Bachelors of Business Administration" //now this change will not reflect
console.log(user_js);



// create symbol and insert it into object keys
const mysym = Symbol("keys1")
const user = {
    name: "xyz",
    course: "bba",
    location: "jaipur",
    email: "xyz123@gamil.com",
    [mysym]: "keyvalue1" //for accessing this key value from object and define it as the symbol. Hence, we print the object it will show as [Symbol(keys1)]: 'keyvalue1'.
}

console.log(typeof user.mysym); //now it is string but we have to convert it into symbol then we used square braces[] in the object where we define the mysym key
//for converting string into symbol we use:
console.log(user[mysym])
console.log(user);

//function treats as type-one citizen which mean their is no discrimination we can treat it as variables their will be no difference
user.greeting = function () {
    console.log("hello js user")
}
console.log(user.greeting()); // printing function in object //hello js user
console.log(user.greeting) // by this we get the reference of function
//output is : [Function (anonymous)]

//GREETING THE SPECIFIC KEY-VALUE PAIR
// by "THIS" keyword we can access any particular key-value pair from the object by the function .
// Mandatory to use the backticks (` `)
user.greetingTwo = function () {
    console.log(`hello js user, ${this.name}`)
};
console.log(user.greetingTwo())
console.log(user.greetingTwo)
