//1
// Write a JavaScript function that receives an object as a parameter and returns an array of the 
// object's properties. Use the Object.keys() method to get an array of the object's properties.


function return_prop(obj){
    return   Object.keys(obj);

}
const object1={name : "John", age : 30, city : "New York" };
console.log(return_prop(object1));


//2
// Create a JavaScript function that receives an object as a parameter and returns the number of 
// properties in the object. Use the Object.keys() method to get an array of the object's properties 
// and then use the length property of the array to get the number of properties

function return_pope2(obj){
    return   Object.keys(obj)+ " "+ Object.keys(obj).length;
}
console.log(return_pope2(object1));

//3
// Write a JavaScript function that receives two objects as parameters and returns a new object 
// that combines the properties of both objects. Use the Object.assign() method to merge the 
// objects.


function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
  }
  
  // Example usage
  const object2 = {
    name: "John",
    age: 30
  };
  
  const object3 = {
    occupation: "Engineer",
    country: "USA"
  };
  
  const mergedObject = mergeObjects(object2, object3);
  console.log(mergedObject);

  //4
//   Create a JavaScript function that receives an object as a parameter and returns a copy of the 
// object with all of its properties converted to uppercase. Use a for...in loop to iterate over the 
// object's properties and the String.toUpperCase() method to convert the property values to 
// uppercase.

function convert_upper(obj){
    let newObj = {};

for (let x in obj) {
    if(obj.hasOwnProperty(x)){
        let value=obj[x];
        if(typeof value === 'string'){
             newObj[x] =value.toUpperCase();
        }
        else{
            newObj[x] =value;
        }
    }
  }
  return newObj;
}

const object4 ={
    name: "John",
    age: 30,
    occupation: " ",
    country: "USA"
}
const convert= convert_upper(object4);
console.log(convert);

//5
// Write a JavaScript function that receives an object as a parameter and returns a new object 
// that contains only the properties with non-null values. Use a for...in loop to iterate over the 
// object's properties and the if statement to check if the property value is not null.

function check_null(obj){
   const new_obj={};
   let value='';
   for(let x in obj){
    if(obj.hasOwnProperty(x)){
         value=obj[x];
        if(value  !== ' '){
            new_obj[x]=value;
        }
    }
   }
   return new_obj;
}
const object5 ={
    name: "John",
    age: 30,
    occupation :" ",
    country: "USA",
}
const null1=check_null(object5);
console.log(null1);


//6

// Create a JavaScript function that receives an object as a parameter and returns an array of the 
// object's property names sorted alphabetically. Use the Object.keys() method to get an array of 
// the object's properties and the Array.sort() method to sort the array

function sort(obj){
    //const new_obj={};
    return Object.keys(obj).sort();
    }
const object6 ={
    name: "nadeen",
    age: 25,
    occupation: "F_S",
    country: "jordan"
}

const sort1=sort(object6);
console.log(sort1);

//task object file
//1
object7= { 
 name: "Adam",
 age: 25,
 gender: "male" 
};
for(let x in object7){
    console.log(object7[x]);
}
//2
let object8= { name: "Adam", age: 25 };
object8.gender="male";
console.log(object8);

//3
object8['email']='sdksld@fll,gmail';
console.log(object8);

//4
console.log(object8.name);
//5
console.log(object8['name']);
//6
for (let x in object8){
    console.log(x +':'+object8[x]);
}
//7
let arr17= Object.keys(object8);
console.log(arr17);
//8

let value=Object.values(object8);
console.log(value);
//9

let enteries= Object.entries(object8); 
console.log(enteries);
//10

object9={ name: "Adam", age: 25 };
object10= { gender: "male" };

let merge= Object.assign({},object9,object10);
console.log(merge);
//11

Object.freeze(object8) ;
object8['email2']='sdksld@fll,gmail';
console.log(object8);
//12

Object.seal(object8);
object8.name='nadeen';
console.log(object8);



