
//*********Declaring the objects with Constructor(Singleton) */

//  It is a singleton object(constructor)
//const instagramUser = new Object();

//It is not a singleton object
//const instagramUser = {}

//Basic syntax :1
const instagramUser = new Object({
    "email": "priyanshiGoyal@gmail.com",
    "age": 20,
})

console.log(instagramUser);

//basic Synatx : 2
const snapUser = {} // this it is empty objectv
snapUser.id = "Priyanshi_3625" //declaring the key-value pair of snapUser
snapUser.name = "Priyanshi"
snapUser.isLoggesIn = "True"
console.log(snapUser);
console.log(snapUser.id); //Printing specific userid

// Nested Object (declaring new object inside another object)
const WhatsappUser = {
    email: "whatsapp123@gmail.com",
    Fullname: {
        UserName: {
            firstname: "Priyanshi",
            Lastname: "Goyal",
        }
    }
}//WhatsappUser is main object, inside it we have fullname object and then we have username object inside fullname. We can as many as nested object
console.log(WhatsappUser);
console.log(WhatsappUser.Fullname); // Printing fullname object
console.log(WhatsappUser.Fullname.UserName);//printing username object
console.log(WhatsappUser.UserName); //We cannot directly access any object is we use it will return "Undefined ". We have to use Fullnam object to access it without this we cannot access the object


// Merging differnt objects 
// Using Object.Assign method to copy all properties from one or more objects.
const obj1 = {
    1: "a",
    2: "b",
    3: "c"
}
const obj2 = {
    4: "a",
    5: "b",
    6: "c"
}
const obj4 = { obj1, obj2 } //not a good practice
const obj3 = Object.assign(obj1, obj2) // merging object method 1
console.log(obj3);
const obj5 = Object.assign({}, obj1, obj2)//Merging object method 2 (Preferable method 1)
//If is use {} then it will act as the target and object1,obj2,obj3 will be act as the source. Unlike the method 1 ,obj1 will be act as target. So better to give empty object.
console.log(obj5);

// *** Spread method ***
// In this We can merge the two different objects
const obj6 = { ...obj1, ...obj2 } //Preferable method 2 , mostly used
console.log(obj6);

// **** Access Key from an object *****
console.log(Object.keys(instagramUser)); //We have a interesting thing that the the output datatype will be in array. We can use it anywhere and use loops and all.  // Output : [ 'email', 'age' ]

// **** Access Values from an object *****
console.log(Object.values(instagramUser)); //It is in the array //Output : [ [ 'email', 'priyanshi Goyal' ], [ 'age', 20 ] ]

// **** Taking entries from object ***
// mean every Key-value is separately in the different array
console.log(Object.entries(instagramUser));
// Output : [ [ 'email', 'priyanshi Goyal' ], [ 'age', 20 ] ]


// **** Checking/Asking if i am having a value in my object ******
console.log(instagramUser.hasOwnProperty('email')); // True
console.log(instagramUser.hasOwnProperty('name')); // false






