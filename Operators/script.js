// Arthmatic Operators

let a = 10;
let b = 3;

console.log(a + b); // 13
console.log(a % b); // 1


// comparison Operator

let xo = 5;

console.log(xo == "5"); // true
console.log(xo === "5"); // false .It also comparison data type that why 2nd one got false.
 

// logical Operators

let age = 20 ;
console.log(age > 18 && age < 30); // true

//  standerd function
function add(a,b) {
    return a + b ;
    
}
console.log(add(2,3));

// functional Expression

const added = function add(a,b){
    return a + b ;
};
console.log(added(2,3));

//  Scope
//  01. Global scope

let name = "John";

function show() {
    console.log(name);
    
}

show();

function text() {
    let x = 10;
    console.log(x);
    
}
text();
// console.log(x); can't creat outside function

if(true){
    let a = 5;
    const b = 10;
}

// console.log(x); can't creat outside function


// function Hosting
greet();

function greet() {
    console.log("Hello");
}

