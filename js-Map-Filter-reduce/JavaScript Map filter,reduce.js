//1
function  cleanNames(arr){
    //numbers.map(Math.sqrt);
    return arr.map(element=>element.trim());
}
console.log(cleanNames([" injustice ", " SuperMan ", " Batman ", " flash "]));

//2
const miles = [10, 20, 30, 40];
const toKm=miles.map(convert);
console.log(toKm);
function convert(element){
    const totalDistanceInKilometers= element * 1.60934;

    return totalDistanceInKilometers;
}

//3

let array=[1, 2, 3, 4, 5];

let ave= (arr) =>{
    let sum=0;
    let average='';
    for(let x=0;x<arr.length;x++){
        sum+=arr[x]*arr[x];
    }
     average=sum/arr.length;
     return average;
}
console.log(ave(array));

//4
const numbers = [1, 2, 3, 4, 5];
let plus4=numbers.map(element => element+4);
console.log(plus4);

//5
const number6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenDoubleEven=number6.filter(num=> num%2 == 0).map(num => num * 2) .reduce((total,num)=> total +num);
console.log(evenDoubleEven);

//6
const words = ['apple', 'banana', 'cherry', 'date'];
const upperCaseWords=words.map(element=> element.toLocaleUpperCase()) ;
console.log(upperCaseWords);

//7

const heros = [
    {name: 'Iron Man', power: 'Tech'},

    {name: 'Spider-Man', power: 'Spider abilities'},

    {name: 'Thor', power: 'Godly powers'},
    {name: 'Hulk', power: 'Super strength'}
    ]

    const newHeros= heros.map((hero,index)=>{
        return {
            hero:hero.name,
            hero:hero.power,
            id :index,
        };
    });

    console.log(newHeros);

//8 
   function charUpper7(arr){

    const new_arr =arr.filter(element => element.length >=7).map(element => element.toUpperCase());
    return new_arr;
   }
   const inputWords = ["spray" ,"limit", "elite", "exuberant", "destruction", "present"];

console.log(charUpper7(inputWords));

//9
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let oddNumbers=numbers1.filter(element => element %2 !== 0);
const divisibleBy2or5=numbers1.filter(element => element %5==0 || element %2==0);
const divisibleBy3Squared = numbers1.filter(element=> element % Math.pow(3,2) == 0 );
const sumSquaredDivisibleBy5=numbers1.filter(element =>element %5==0).map(element=>Math.pow(element,2)).reduce((total,num) => total + num);

console.log(oddNumbers);
console.log(divisibleBy2or5);
console.log(divisibleBy3Squared);
console.log(sumSquaredDivisibleBy5);

//10
let nums = [11, 22, 33, 46, 75, 86, 97, 98];
let even_number=nums.filter(element => element %2==0).map(element=> Math.pow(element,2));
console.log(even_number);

//11
let countries = ['India', 'United States', 'Russia', 'Japan', 'China'];
let filter_array = countries.filter(element => element.slice(0, 1).toUpperCase() !== 'U' && element.slice(0, 1).toUpperCase() !== 'R').map(element => element.toUpperCase()).reduce((total,element)=>total + element).length;
console.log(filter_array);


//12
const numbers2 = [12, 45, 67, 89, 23, 56, 73, 99, 100];
let grater_50=numbers2.filter(element => element >=50);
console.log(grater_50);