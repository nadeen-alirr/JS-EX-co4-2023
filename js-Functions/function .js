//1
function seperated(str){
    let output=str.split(" ");
    return output;
}
console.log(seperated("Orange Jordan"));

//2
// Write a function that converts the first seven digits of a mobile phone number to a hidden form.
// Sample Input: 0776807777
// Sample Output: *******777

function hide(num){
    let first_seven_digit=num.slice(0,7).replace(/\d/g,"*");
    let number= first_seven_digit + num.slice(7);// *******+777
    return number;
}
console.log(hide("0776807777"));

//3
// 3. Write a function that converts an email address to a hidden form.
// Sample Input: orange_academy@orange.jo
// Sample Output: orange…@orange.com

function hid_email_add(email){
    const at_index =email.indexOf('@');//14
    const dot=email.lastIndexOf('.');//21
    const user_name =email.slice(0,at_index);//0,14(cut the user name)
    const domain=email.slice(at_index+1 ,dot);//15,21 (cut the domain)
    const hidden_email= `${user_name.slice(0,6)}...@${domain}.com`;
    return hidden_email;
}
console.log(hid_email_add("orange_academy@orange.jo"));

//4
// 4. Write a function that turns the first letter of every word in a string to the upper case.
// Sample Input: “coding academy by orange”
// Sample Output: “Coding academy by orange”

function convert_first_letter(str){
       const new_txt=str.slice(0,1).toUpperCase();
       str =str.replace(str[0],new_txt);
       return str;
}

console.log(convert_first_letter("coding academy by orange"));

//5
// 5. Write a function that turns the first letter of every word in a string to the upper case.
// Sample Input: “coding academy by orange”
// Sample Output: “Coding Academy By Orange”

function convert_letter_word(str){
   let words=str.split(" ");//return array 
   let capital=words.map(word =>
    word.charAt(0).toUpperCase() +word.slice(1));
    return capital.join(" ");
}
console.log(convert_letter_word("coding academy by orange"));

//6
// 6. Write a function that flips a number.
// Sample Input: 92485
// Sample Output: 58429

function flips(num){
   let reversed= num.toString().split('').reverse().join('');
   return parseInt(reversed,10)
}

console.log(flips(92485));

//7
// 7. Write a function that swaps the value of 2 variables in at least three ways.
// Sample Input: a=3, b=4
// Sample Output: a=4, b=3


function swaps(a,b){
     let temp=a;
    a=b;
    b=temp;
    console.log("a= "+ a +"  "+"b= "+ b );
}

let a=3;
let b=4;
console.log("a= "+ a +"   "+"b= "+ b );
swaps(3,4);

//8
// 8. Write a function that removes an indexed character from a string.
// Sample Input: (“Orange”, 3)
// Sample Output: Orage

function removes(str,index){
    if(index<0 || index>str.length){
        return str;
    }
        return str.slice(0,index)+str.slice(index+1);
}
console.log(removes("Orange", 3));

//9
// 9. Write a function that merges two strings after removing the first character of each one.
// Sample Input: (“lora”, “inge”)
// Sample Output: orange

function merges(str1,str2){
    let merge=str1.slice(1)+str2.slice(2);
    return merge;
}

console.log(merges("lora","inge"));

//10
// 10. Write a function that ensures a specific character appears in a string's first or last position.
// Sample Input: (“o”, “orange”) 
// Sample Output: true


function check_letter(char,str){
   let first= str.charAt(0);
    let last =str.charAt(str.length-1);
        if(first===char || last ===last){
            return true;
        }
        return false;
}
console.log(check_letter("o","orange"));

//11

// 11. Write a function that takes a string and returns every word in the string as an array element.
// Sample Input: “Coding Academy by Orange”
// Sample Output: [“Coding”, “Academy”, “By”, “Orange”]

function string_array(str){
    return str.split(" ")
}
console.log(string_array("Coding Academy by Orange"));

//12
// Write a function that takes a string and reorders the characters alphabetically.
// Sample Input: “Orange”
// Sample Output: “aegnor”

function alphabetically(str){
    let alpha=str.split("").sort().join("");
    return alpha;
}

console.log(alphabetically("Orange"));

//task function File 

//1
function findSmallest(arr){
    let smallest=arr[0];
    for(let x=0;x<=arr.length;x++){
        if(arr[x]<smallest){
            smallest=arr[x];
        }
    }
    return smallest;
}
console.log(findSmallest([30, 45, 60, 7]));

//2
//Function that will return your string in Alphabetical order
function AlphabeticalOrder(str){
    return str.split('').sort().join('');
    
}

//3
console.log(AlphabeticalOrder('hello'));

function factorial(num){
    if(num==1 ||num==0){
        return 1;
    }
    return num* factorial(num-1);
}
console.log(factorial(8));
//4

function oddOrEven(n){
    if(n%2==0){
        return `${n} = even`;
    }
    else{
        return `${n} = odd`;
    }

}
console.log(oddOrEven(9));

//5
function evenNum(arr){
    const new_arr= new Array();
    for(let x=0;x < arr.length;x++){
        if(arr[x] %2 === 0){
            new_arr.push(arr[x]);
        }
    }
    return new_arr;
}
console.log(evenNum([1, 2, 3, 4, 5, 6,7,8,9]));

//6
function numbersOnly(arr){
    const numbers=new Array();
    for(let x=0;x < arr.length;x++){
        if(typeof arr[x] === 'number'){
            numbers.push(arr[x]);
        }
    }
    return numbers;
}
console.log(numbersOnly(['Ayham', 3, 7, 'Alaa', 13, 'coding']));

//7
function addUp(num){

    let count= 0;
    while(num>=0){
        count += num;
        num--;
    }
    return count;

}
console.log(addUp(8));

//8
function minMaxLengthAverage(arr){
    let smallest=arr[0];
    let  large=arr[0];
    let  length_array=arr.length;
    let Average='';
    const array=[];
    let count=0;

    
    for(let x=0 ; x<arr.length ; x++){
        if(arr[x]<smallest){
          smallest =arr[x];
        }
    }
    array.push(smallest);

    for(let x=0; x<arr.length ;x++){
        if(arr[x]>large){
          large =arr[x];
        }
    }
    array.push(large);

    for(let x=0; x < arr.length;x++){
        count += arr[x];
    }
    average = count / arr.length;
    array.push(average);
     array.push(length_array);
    return array;
}

console.log(minMaxLengthAverage([7, 13, 3, 77, 100]));

//9
function romanNumbers(num){
    let r='';
    const obj={

    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1

    };

     for(let x in obj){
        while(num >=obj[x]){
            r+=x;//
            num -= obj[x];//
        }
     }
     return r
}
console.log(romanNumbers(1989));

//10 
function countWords(str){
    const word=str.split(/\s+/);
    return word.length;
}
console.log(countWords('hello from CodingAcademy !'));

//11
function MultiplyByLength(arr){
    let new_arr=new Array();
    for(let x=0; x < arr.length;x++){
        arr[x] *=arr.length;
        new_arr.push(arr[x]);
    }
    return new_arr;
}
console.log(MultiplyByLength([4,2,5]));

//12

function checkEnding(str1,str2){
    let element=str1.slice(-1);
    let element2=str2.slice(-1);
    if(element === element2){
        return true;
    }
    return false;
}
console.log(checkEnding( "CodingSchool" , "Ac"));

//13
function doubleChar(str){

    return str.split('').map(char => char+char).join('');
}
console.log(doubleChar('Coding'));

//14
function findIndex(arr,str){
    for(let x=0;x<=arr.length;x++){
        if(arr[x]===str){
            return true;
        }
        return false;
    }
}
console.log(findIndex(['Ali', 'Mazen', 'Ayham', 'Murad'], 'Ali'));

//15
function getAbsSum(arr){

    let count=0;
    for(let x=0;x<arr.length;x++){
        count += arr[x];
    }
    return Math.abs(count);
}
console.log(getAbsSum([-1, -3, -5, -4, -10, 0]));



