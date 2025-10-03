// console.log("priyanshi") just check whether running or not

let score = true //it is a string

//let score = 33 now the typeof is number

//2 way to check the type of the var
console.log(typeof score); //string
console.log(typeof(score));


//by this we can change the type of var 
let valueInNumber = Number(score) // i take the let and defined the name of it , and i give the score as number which mean now any number,alphabets is stored as number
console.log(typeof valueInNumber);
console.log(valueInNumber) //we print valueInNumber

// "33" ==> 33 
//"33abc" ==> Nan
//true ==> 1, false ==> 0

/*
// we take string 
then print string,string , number , Nan

// we take null
then print object ,object,number, 0

//we take undefined
then print undefined,undefined, number, NaN

//we take boolean 
then print boolean , boolean, number , 1
*/


//**********converting number into boolean*********
let isLoggedIn = 1 //1==>true , 0 ==>False
let booleanIsLoggesIn = Boolean(isLoggedIn)
console.log(booleanIsLoggesIn)

//**********converting empty string  *********
let Isloggedin = "Priyanshi"
    //if string empty ==>False 
    //if string has value ==> True
let Booleanisloggedin = Boolean(Isloggedin)
console.log(Booleanisloggedin)


//**********converting number into string**********
let someNumber = 25
let StringNumber = String(someNumber)
console.log(StringNumber); //number become string 
console.log(typeof StringNumber) //check by typeof



//**************** OPERATIONS ************* */
let value = 3
let negvalue = -value
console.log(negvalue) //we can convert +ve value to -ve value

console.log(2 + 2) //add
console.log(2 - 2) //subtract
console.log(2 * 2) //multiply
console.log(2 / 2) //divide
console.log(2 ** 2) //power
console.log(2 % 2) //remainder ,modulus

// merging two strings
let str1 = "helllo"
let str2 = " world"
let str3 = str1 + str2
console.log(str3)

// complex string merging 
//String concatenation (if one side is a string).
console.log("1" + 2) //12
console.log(1 + "2")
    /*
    left side is string,
    right side is number,
    which mean when we see string + number ==> it convert the number to string 
    */

console.log("1" + 2 + 2) //122
    /*
    1 => is a string,
    2 => is a number
    ["1"+2 +2] by string concatenation
    ["1" + 2] => 12 //it is string
    [2] =>2 //it is number
    string +number = string 
    [12] + 2 = 122
    */
console.log(1 + 2 + "2") //32
    /*
    [1+2+"2"]
    1+2 =>number
    ["2"] =>string
    1+2 =>3
    now we only have string and number 
    so string is "2".
    and number is 3
    number + string=> string
    3 + "2" => 32
    */
console.log(true) //true
console.log(+true) //1
console.log(+"") //0

// ****Precedence**
// postfix precedence: the increment operator increments and returns the value before incrementing.
let gamechanger = 50
gamechanger++;
console.log(gamechanger); //51

//prefix precedence [the increment operator increments and returns the value after incrementing.]
let gamepoint = 50
    ++gamepoint;
console.log(gamepoint); //51