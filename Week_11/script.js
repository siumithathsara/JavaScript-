//================ String And Numbers ==================

// String methods ========
let text = " Hello World ";

// 1. length - it counts the numbers of characters including spaces
console.log(text.length); // 13

// 2. trim - it trims the spaces
console.log(text.trim());

// 3. toUpperCase - letters turn into upper case
console.log(text.toUpperCase());

// 4. toLowerCase -  letters turn into lower case
console.log(text.toLowerCase());

// 5. includes -  it check the word is include or not
console.log(text.includes("World"));

// 6. slice - it prints characters 1 to 6
console.log(text.slice(1, 6));

// Template Literals ========

// it makes easy to combine variables with text
let name = "kamal";
let age = 25;

console.log(`My Name is ${name} and I am ${age} years old`);

// Number methods ========
let num = 10.567;

// 1. decimal dekakata fix karaganna
console.log(num.toFixed(2)) // 10.57

// 2. convert string to the Integer
console.log(parseInt("20")); // 20

// 3. convert string value to the float value
console.log(parseFloat("3.14")); // 3.14

//  4. convert string to the Number
console.log(Number("50")); // 50


// Math Object ========
// provide mathematical functions and constants


// 1. round krnwa. aasannama agayata watayanna
console.log(Math.round(4.6)); // 5

// 2. round number ekak hoyana pahalata enawa
console.log(Math.floor(4.9)); // 4

// 3. round number ekak hoyan udata yanne
console.log(Math.ceil(4.1)); // 5

// 4. to generate random number
console.log(Math.random()); // random number 0 - 1

// 5. to find max value 
console.log(Math.max(1, 5, 3)); // 5

// 6. to find min value
console.log(Math.min(1, 5, 3)); // 1

// DOCUMEN OBJECT MODEL (DOM)

// 1. Selecting Elements ====
// getElementById()
function changeStyle() {
    document.getElementById("para").style.color = "red";
}
// getElementByTagName()
// ================ Document Object Modal (DOM) ========================

// Selecting Elements ==========

// getElementById() - ex. "empID"
function changeGreeting() {
    const element = document.getElementById('greeting');
    element.textContent = "New Greeting Text";
}
// getElementByTagName() - ex. "div" , "span"

function changeColor() {
    var paragraph = document.getElementsByTagName("h1");
   paragraph[0].innerHTML = "I have been changed!";
}

// getElementByClassName() - ex. "myClass"

 function changeBg() {
            let boxes = document.getElementsByClassName("box");

            for (let i = 0; i < boxes.length; i++) {
                boxes[i].style.backgroundColor = "lightblue";
            }
        }    

// getElementByName() - ex. "Username" name attribute
 let user = document.getElementsByName("username");

    console.log(user[0].value); 


    // QuerySelector - it select 1st element of the item set

    let el = document.querySelector(".item");
    console.log(el.textContent);

    // QuerySelector - it select all element of the item set

    let element = document.querySelectorAll(".item");
    element.forEach(el => {
       console.log(el.textContent);  
    });

    // manipulating text -     this change only the text ,not html
    document.getElementById("title").textContent = "Welcome"

    // manipulating Html
    document.getElementById("title").innerHTML = "<b>Welcome</b>"

    // manipulating Attributes - changing element propertise ex- src herf etc
    // document.getElementById("img").src = "img.jpg"

    // manipulating Styles - changing css by using js
    let elements = document.getElementById("title")

    elements.style.color ="red";
    elements.style.fontSize ="30px";

    // create elemnet =====================

    let p = document.createElement("p")

    // step 2 = add content

    p.textContent = "This is a new paragraph"


    // step 3 = Add to page 
    document.body.appendChild(p)

    // remove element===================

    document.getElementById("removeMe").remove();

    //  =============================== jQuery ==================================
    document.getElementById("hello")
    $("#hello");
    
    $("#hello").text("Welcome");
    $("#hello").html("<b>Welcome</b>");
     $("#hello").css("color" , "red");
    

     $("#btn").click(function() {
        alert("Button clicked!")
     });

    //  Event  Listner - detect the event
    
    document.getElementById("btn").addEventListener("click",function(){
        alert("button clicked!!!!")
    })

    document.getElementById("btn").addEventListener("mouseover",function(){
        btn.style.backgroundColor = "blue"
    })
    document.getElementById("btn").addEventListener("mouseout",function(){
        btn.style.backgroundColor = "red"
    })

    // keyBoard Event ==============================

    document.addEventListener("keydown",function(e){
       console.log(e.key);
    });


    // Form Event ==========

    document.getElementById("form").addEventListener("Submit",function(){
        e.preventDefault();
        alert("form Submited")
    });

    let input = document.getElementById("name").value;

    if (input === ""){
        alert("Name required");
    }
    
   
