
const temple = ["Govind dev ji", "Vaishno devi ", "Kedarnath"]
const gods = ["Krishna ji", "Mata Rani", "Mahadev ji"]

temple.push(gods)
console.log(temple); //it merhe both array according itself it can print array into data orr it can be in array


//***** CONCAT *******
const allgods = temple.concat(gods) //merge both array 
console.log(allgods)

//****** SPREAD OPERATOR ******
//merge both array no difference b/w concat and spread operator . But somewhere it is more preferable . Just define it by using [...arrayname, ...arrayname]. This 3dots specify the spread operator
const all_gods = [...temple, ...gods]
console.log(all_gods);

//******** FLAT ****
// It help us to convert multiple array in a single array.
// Multiple array = depth in this . After defining flat(Depth) which mean how many array he have to solve
const another_array = [1, 2, 3, [4, 5, 6,], 7, [6, 7, [4, 5]]]
const usefull_array = another_array.flat(Infinity)
console.log(usefull_array);

//Sometimes we have to do data scraping but it gives in different format so for converting it into array we can use : FROM(content | data you have to convert)
// Hence it can number,alphabets, symbols
console.log(Array.from("Priyanshi")) // it will convert into array
console.log(Array.from("#@$%^"))

//for checking that it is array or not we use : isArray()
console.log(Array.isArray("Priyanshi")) //False ... As it is string

// Array.of(element1,element2....) :- It is a method which is used to create a new array from different types of arguments. 
//Arguments can be strings,number,arrays, etc.
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3))
