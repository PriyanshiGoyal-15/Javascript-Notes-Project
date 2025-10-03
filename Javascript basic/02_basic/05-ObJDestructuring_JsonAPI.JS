// Object Destructuring
const course = {
    cousrename: "BCA",
    Fees: "99999",
    Institution_Name: "Rajasthan University"

}
console.log(course.cousrename) //Sometimes it's difficult to access different different key-value pair so we use new and easy method : Object Destructurinh

const { cousrename } = course
console.log(cousrename);

//We can rename the key name while printing it 
const { Institution_Name: Institution } = course
console.log(Institution); // now we can print institution name just by institution


//****  JSON Basics *****
// Json Created as : {key value pair} but key-value(both) pair is in string
//it is basic structure without any const,var,and let later of we can stored it in variable . here if we does not give and kind of name to the const It is treated as json-object{ }. Sometimes we got json in array format [ { }, { },...] 
/*example:
{
   "name" : "Priyanshi",
    "Stream" : "BBA",
}*/




