// exeption and error handeling 
try{
    let x = y ;

}catch(error){
    console.log("Error occurred")
}
// Es6 Features ===================
// 
// LET & CONST 

let x = 10; // value cna change
const y = 10;  // value can't changed

//  2. Template Leterals
let name  ="Kamal";
console.log(`hello ${name}`); // use backtricks and ${} for variables.

// 3.Destructuring - object ekak thiyenawa variable eliayat ganna puluwan

let person = {name1 : "Amal" , age : 25}// Extract value easily from object

let {name1, age} = person;
console.log (name1);
 

// example
let student = {name2 : "Nimal" , age1 : 25 , address:"Galle"}

let {name2 , age1 , address} = student
console.log(`Hello ${name2},You are ${age1} and lives in ${address}`);

// 4. Spread operator -spread copies or expand values

let arr1 = [1,2]
let arr2 = [...arr1 ,3]

console.log(arr2);

// 5. Rest operator - rest collect multiple into an array

// function to calculate sum of numbers
function sum(...num){
    return num.reduce((a, b) => a + b ,0); // loop wenna
    //  a = total value , b = current value , 0 =  starat value eka
}

//  calling the function

let result1 = sum(1,2,3);
let result2 = sum(5 ,10 ,15, 20);

console.log(result1); //6
console.log(result2); // 50

// 6. Default parameter - argument ekak awe nathnama default deela thiyena value eka assigned karaganna puluwan .


// Example 01
function greet(name = "Guest"){
    console.log(name);
}

// Example 02
function showMessage(msg ="Welcome"){
    console.log(msg);
}

showMessage()
showMessage("Hello")

// Example 03

function multiply(a , b = 1){
   let result = a * b ;
   console.log(result);  
}

multiply(5);
multiply(5,2);

// Example 04
function totalPrice(price , tax = 0.1){
   let totalAmount = price + (price * tax) ;
   console.log(totalAmount);  
}

totalPrice(100);
totalPrice(100,0.2);

