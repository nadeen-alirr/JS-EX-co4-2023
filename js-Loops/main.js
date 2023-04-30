//1
let number='';
for(let x=0 ; x <=10 ; x++){
  number += x + " "; 
}
console.log(number);
console.log();

//2
let number2='';
let x=0 ;
while(x <=10){
    number2 += x +" ";
    x++;
 }
 console.log(number2);
 console.log();

 //3
 let nu3='';
let arr=[1,2,3,4,5];
for(let x=0 ;x<arr.length;x++){
    nu3 += arr[x] +" ";
}
console.log(nu3);
console.log();

//4
let even='';
for(let x=0 ;x<=10 ;x++){
    if(x %2==0){
        even += x +" "; 
    }
}
console.log(even);
console.log();

//5

let count=0;
for(let x=0 ; x <=10 ; x++){
    count+= x ; 
  }
  console.log(count);
  console.log();

//6
let large=arr[0];
for(let x=0 ; x<= arr.length; x++){
    if(arr[x] >= large){
        large = arr[x];
    }
}
console.log(large);
console.log();

//7
small=arr[0];
for(let x=0; x<= arr.length ;x++){
    if(arr[x] <= small){
        small = arr[x];
    }
}
console.log(small);
console.log();

//8

let ave='';
let count2 =0;
for(let x=0; x<arr.length; x++){
    count2 += arr[x];
}

ave=(count2/arr.length);
console.log("the average= "+ave);
console.log();

//9
fact=1;
for(let x=1;x<=arr.length ;x++){
    fact *= x;
}
console.log("the factorial= "+ fact);

//10

function Fibonacci(number){
   let n1=0;
   let n2 =1; 
   let  next; 
   const array_f=[];

   for(let x=1; x<=number ;x++){
    array_f.push(n1);
    next=n1+n2; 
    n1=n2; 
    n2=next;
   }
   return array_f;
}
console.log(Fibonacci(10));

//11

function prime(n){
    let a=' ';
    let count=0;
for(let j=2;j<=n;j++)
{
for(let i=1;i<=j;i++)
{
  if(j%i==0)
  count++;
}
if(count==2)
a += j +" ";
count=0;
}
console.log(a);
}
prime(20);

//12
function multiplication(n){
    let message=" ";
    let result2 ='';
    for(let x=1;x<=10 ;x++){
        result2 = n*x;
        message += `${n} * ${x} = ${result2} ,`;
    }
    console.log(message);
}
multiplication (5);

//13
multi_array =[[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let element='';
for(let x=0 ;x<3;x++){
    for(let i=0;i<3;i++){
        element+= multi_array[x][i]+" ";
    } 
}
console.log(element);

//14
let arr_reverse=' ';
for(let x=arr.length-1 ; x>=0; x--){
    arr_reverse += arr[x]+" ";
}
console.log(arr_reverse);
//15
function print(arr2 ,n1,n2){
    let element=''
    for(let x=n1 ;x<=n2;x++){
        element += arr2[x]+" ";
    }
    console.log(element);
}
print(arr ,2 ,4);

//16
function print_step(arr2){
    let element=''
    for(let x=0 ;x<=arr2.length;x+=2){
        element += arr2[x]+" ";
    }
    console.log(element);
}
print_step(arr);

//17
function print_exist(arr2 ,n1){
    let element=' '; 
    for(let x=0 ; x<=arr2.length; x++){
        if(arr2[x] == n1){
            element+=arr2[x];
            return true;
        }
    }
            return false;
    }
print(arr ,2 ,4);
console.log(print_exist(arr,3));

//18
function frequency(arr1,num){
    let count=0;
    for(let x=0;x<=arr1.length;x++){
        if(arr1[x]== num){
            count++;
        }
    }
    console.log(count);
}
frequency(arr,1);
console.log();
//TASK2 loop ....................................................................

//1
let even3='';
let x3=0;
while(x3<2){
 for( let x4=0;x4<=50;x4++){
    if(x4%2 == 0){
        even3+= x4+" ";
    }
}
even3+="\n";
x3++;
}
console.log("the even twice using for and while: \n"+even3);
console.log();


//2
function print(n){
    let even1='';
    let even2=' ';
    for(let x=0;x<=n;x++){
        if(x %2==0){
            even1+=x+" ";
            even2+=x+" ";
        }
    }
    console.log("even using 1 loop "+even1 +"\n"+even2);
}
print(50);
console.log();

//3
function print_even_odd(n){
    let even='';
    let odd='';
    for(let x=0; x<=n ;x++){
        if(x%2 ==0 ){
            even+=x+" ";
        }
    }
    for(let i =0 ;i<=n; i++){
        if(i%2 !== 0 ){
            odd+=i+" ";
        }
    }
    console.log("the even ="+even);
    console.log("the odd ="+odd);
}
print_even_odd(50);
console.log();

//4  Fizz-Buzz!
function Fizz_Buzz(num){
    let message=' ';
    for(let x=1;x<=num;x++){
        if(x%5==0 && x%3==0  ){
            message+= "FizzBuzz ,";
        }
        else if(x %3 ==0){
            message +="Fizz ,";
        }
        else if(x %5 ==0){
            message +="Buzz ,"
        }
        else{
            message +=x+" ,";
        }
    }
    console.log(message);
}
Fizz_Buzz(100);

//5  each iteration will trigger a function call.
function fizzBuzz(num){
    let message=' ';
    if(num%5==0 && num%3==0  ){
        message+= "FizzBuzz";
    }
    else if(num %3 ==0){
        message +="Fizz";
    }
    else if(num %5 ==0){
        message +="Buzz"
    }
    else{
        message +=num+" ";
    }
    console.log(num +":"+message);
}
fizzBuzz(1);
fizzBuzz(15);


//6 recursive
function fizz_Buzz_recursive(number,max){
    if(number >= max){
      return;
    }
    if(number%5==0 && number%3==0  ){
       console.log("FizzBuzz ");
    }
    else if(number %3 ==0){
       console.log("Fizz ");
    }
    else if(number %5 ==0){
        console.log("Buzz ");
    }
    else{
       console.log(number +" ")
    }
    fizz_Buzz_recursive( number+1 , max);
}
fizz_Buzz_recursive(1,50);

//7
function banknotes(num,arr){
    let result=new Array();
    let count=0;
    for(let x=0;x<arr.length;x++){
        count=arr[x];
        while(num>=count){
            result.push(count);
            num -= count;
        }
    }
    return result;
}
const array3=[25, 10, 5, 1];
console.log(banknotes(57,array3));


//8
function counts_char(string,char){
    let count=0;
    let lower=char.toLowerCase();
    let upper=char.toUpperCase();
    for(let x=0; x<=string.length ;x++){
        if(string[x] == lower || string[x] == upper){
            count++;
        }
    }
    console.log(` the count of ${char} = ${count}`);
}
counts_char("Coding Academy by Orange",'o');
console.log();
console.log();
//9 
//a.
for(let x=0 ;x<=20;x++){
    console.log(x);
}
console.log();
console.log("ODD num:");
//b. ODD
for(let x=3 ;x<=29;x++){
    if(x%2 !== 0){
        console.log(x);
    }
}
//c.EVEN
console.log();
console.log("even num:");
for(let x=12 ;x >= -14 ;x--){
    if(x %2 ==0){
        console.log(x);
    }
}
//d.
console.log();
console.log("multiples of 3");
for(let x=50;x>=20;x--){
    if (x %4 == 0){
        console.log(x);
    }
}
//10

let str= "CodingAcademy";
const array5= [7, 500, 'KH404', 'black', 36];
console.log();
console.log("array5");
for(let x=0;x<array5.length;x++){
    console.log(array5[x]+"\n");
}

console.log();
console.log("Str");
for(let x=str.length-1 ;x>=0;x--){
    console.log(str[x]+"\n");
}
console.log();
//11
function print_mainarray(arr){
    const odd_arr=[];
    const even_arr=[];

    for(let x=0;x<=arr.length;x++){
        if(arr[x] %2==0){
            even_arr.push(arr[x]);
        }
        else{
            odd_arr.push(arr[x]);
        }
    }
    console.log("even element:"+even_arr);
    console.log("odd element:"+odd_arr);
}



const main_arr= [7, 23, 18, 9, -13, 38, -10, 12, 0, 124];
print_mainarray(main_arr);
console.log();
//12

function meals(meals_num){
    const Protein_array=['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
    const Grain_array= ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
    const Vegetable_array= ['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus'];
    const Beverage_array=['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
    const Dessert_array= ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi'];

    let choice =new Array();
    let MEALS = new Array();
    let order=new Array();
    
    for (var i = 0; i < meals_num ; i++) {
            let randomly_pro=Math.floor(Math.random() * 6);//1 item from pro
            let randomly_G=Math.floor(Math.random() * 6);//1 item from grain
            let randomly_V=Math.floor(Math.random() * 6);//1 item from vegetable
            let randomly_B=Math.floor(Math.random() * 6);//1 item from beve
            let randomly_D=Math.floor(Math.random() * 6);//1 item from dessert

            choice=[
             Protein_array[randomly_pro],
             Grain_array[randomly_G],
             Vegetable_array[randomly_V],
             Beverage_array[randomly_B],
             Dessert_array[randomly_D]
            ];
             MEALS.push([...choice]);

            if (confirm(`Meal ${i + 1}: ${MEALS.join('\n')}\nDo you want to order this meal?\n`)){
                order.push([...MEALS]);
            }
    }
    let list=new Array();
    let cat= '';
    for(let x=0;x<order.length;x++){
      list=order[x]
      //list.push(order[x].join(',\n'));
    }
    alert("Ordered Meals:\n" + JSON.stringify([...list]));
}
let N_meals=0;
N_meals=prompt("enter number of meals :");
meals(N_meals);
