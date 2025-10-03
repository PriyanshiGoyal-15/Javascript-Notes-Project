// Array : Array allow us to stored multiple items in one variable at the contiguous memory location
//It can be number,string,boolean which mean mixture of dtype.
//It can not be associative array which mean it can not be access by string name . It only accessed by Index value
//Indexing started with 0,1...and so on.
//Array-copy operations create shallow copies which one when we can change in copy it also change in original array . It share the same reference point/
// Deep copy in array  mean it does not share the same reference
const myArr = [0, 1, 2, 3, 4, 5] //declaring num in array
const MyHeros = ["shaktiman", "Naagraj"];//declaring string in array

const myArr2 = new Array(1, 2, 3, 4)//by using new keyword we can declare array
console.log(MyHeros);//we can access all array value
console.log(myArr[2]);//we can access array value just by giving index number by that we can get index value


// Array Methods

//+++++ Push operation in Array ++++++++
//it help us to add value in an existing array or can add another array into it.
myArr.push(6)
myArr.push(7)
console.log(myArr);

//++++ Pop Operation in Array +++++++
// It remove the last value in the array
myArr.pop()
console.log(myArr)

//++++ Unshift Operation in Array +++++++
//it add the value at the starting that is given inside the unshift and remove the last element of array
myArr.unshift(90)
console.log(myArr)


//++++ shift Operation in Array +++++++
// it return the removed value of the array 
myArr.shift()
console.log(myArr)

// Checking the element is present in the array or not. it return the output in boolean datatype
console.log(myArr.includes(9)); //false
console.log(myArr.includes(2)); //true

// accessing the element by the index number . If the index number is their it will return the number otherwise return the -1
console.log(myArr.indexOf(9)); //-1
console.log(myArr.indexOf(3)); //3 hence my array value of 3rd index is 3

//++++++ Join method +++++
// It firstly join the array with another variable and new variable return string value and old array return array value
const newArr = myArr.join()
console.log(newArr);
console.log(myArr);

console.log(typeof newArr);// string
console.log(typeof myArr); //  object : Array


// ++++ Slice , Splice +++++

//*********Slice ********
console.log("A", myArr)  //It help us to give the array name i. "A"
console.log("A", myArr.slice(1, 3)) // it return selected array index value by the slice method ...which mean as I selected index [1,3] it only include 1,2 index number and exclude the 3rd index value

const myn2 = myArr; //now myArr data is stored in myn2
console.log(myn2)

const Myn2 = myArr.slice(1, 4); //now by data tranferring into another array and sliced the array .
console.log(Myn2)

//*********Splice ********
//this method is used to add or remove the array elements
//array.splice(starting index, deleteCount element, "item1", "item2",......)
const table = [2, 4, 8, 10, 12, 14, 16, 18]
table.splice(2, 0, "6") // it will add 6 at 2nd index without removing any element 
console.log(table) //print table array
const Twotable = table.splice(2, 5, "6") //now it add "6" at 2nd index and will keep 5element by including the added element and remove rest of the element
console.log(Twotable);

const ThreeTable = table.splice(1, 5); //now it will print 1 index value then it will count 5element and then print 5th element
console.log(ThreeTable); // [4,'6',16,18]


