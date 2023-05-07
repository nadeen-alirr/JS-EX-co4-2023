//1
const array1=["Coding", "Academy", "By", "Orange"];

let array2=array1.concat("Jordan");
console.log(array2);

let array3=array1.slice(0,2);
console.log(array3);

let array4=["Welcome","To" ,...array1]
console.log(array4);

let array5 =array1.slice(1,4);
console.log(array5);


let str= array1.join(" ");
console.log(str);

console.log(array1);

array1.splice(1,2);
console.log(array1)

var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

console.log(vegetables.pop())
console.log(fruit.pop())
console.log(fruit.indexOf("orange"))
fruit.push(1);
console.log(fruit);
console.log(vegetables.length);
vegetables.push(2);
console.log(vegetables);

let food=new Array();
food=fruit.concat(vegetables);
console.log(food);
console.log(food.splice(4, 2));
//
for(let x=food.length-1 ; x>0 ;x--){
  console.log(food[x]);
}
console.log();
let str2='';
for(let x=0;x<food.length;x++){
    str2+=food[x] +" ";
}
console.log(str2);

// task 2.......................................
//1
let arr = [1, 2, 3, 4, 5];
arr.forEach(myFunction);
arr.push(6);

function myFunction(item, index) {
  console.log(item);
}

//2
const arr2=[1,2,3,4,5];

let new_arr2= arr2.map(multiple);
console.log(new_arr2);
function multiple(item,index){
    return item * 2;
}

//3
let even=arr2.filter(even_number);
console.log(even);
function even_number(item){
    let result='';
    if(item %2==0){
        result+=item;
    }
    return result;

}
//4
let sum=arr2.reduce(totall);
console.log(sum);

function totall(total, num){
    return total+num;
}
//5
 let arr6= ["banana", "apple", "cherry"];
 arr6.sort();
 console.log(arr6);

//6
arr6.reverse();
console.log(arr6);
//7

let arr7=[1, 2, 3];
let arr8= [4, 5, 6];
let arr9=arr7.concat(arr8);
console.log(arr9);

//8
// Input: [1, 2, 3, 4, 5, 6], 2, 4;
// Output: [1, 2, 5, 6]
let arr10= [1, 2, 3, 4, 5, 6];
let x11=arr10.slice(0,2);
let x2= arr10.slice(4);
let arr_n=x11.concat(x2);
console.log(arr_n);

//9
// Input: [1, 2, 3, 4, 5], 3;
// Output: 2
//using splice

arr11=[1, 2, 3, 4, 5];
let index1= 3;
let element=arr11.splice( index1-2,1);
console.log(element);


//10
//indexof

const arr16 = [1, 2, 3, 4, 5];
const element2 = arr16.indexOf(2);
console.log(element2);

//11
// Input: [1, 2, 3, 4, 5];
// Output: "1,2,3,4,5"

let arr12=[1, 2, 3, 4, 5];
let str3=" ";
str3=arr12.join(' ');
console.log(`"${str3}"`);

//12
// Input: "1,2,3,4,5";
// Output: [1, 2, 3, 4, 5]
str4="1,2,3,4,5";
const arr13=str4.split(",").map(Number);
console.log(arr13);

//13
let element4=arr16.length;
console.log(element4);

//14
//for...of loop to iterate through an array

for(let element of arr16){
    console.log(element);
}

//15
//15.Use the for...in loop to iterate through the indexes of an array
for(let index in arr16){
    console.log(index);
}
//16
//.Use the Array.isArray() method to check if an object is an array.
let check= Array.isArray(arr16);
console.log(check);

//17
//Use the Array.from() method to convert an array-like object to an array.
// Input: {0: "a", 1: "b", 2: "c", length: 3};
// Output: ["a", "b", "c"]

object7={0: "a", 1: "b", 2: "c", length: 3};

let x=Array.from(object7);
console.log(x);

//18
//Use the Array.of() method to create an array with a set of elements.
let result3=Array.of(1, 2, 3);
console.log(result3);

//19
//Use the Array.prototype.fill() method to fill an array with a specific value.

console.log(arr16.fill('*'));

//20
// Use the Array.prototype.copyWithin() method to copy a sequence of elements within an array.

arr17=[1, 2, 3, 4, 5 ,6];
let result4=arr17.copyWithin(2,0);//1 1
console.log(result4);



















