// conditions

let marks = 60;

if(marks >= 75) {
    console.log("A");
} else{
   console.log("B") ;
}


let day = 2;

switch(day) {
    case 1 :
        console.log("Monday");
        break;

    case 2 :
        console.log("Tuesday");
        break;

    case 3 :
        console.log("Invalid");
        
}


//  for Loop

for(let i = 1 ; i <= 5 ; i++){
    console.log(i);
}

//  while Loop

let s = 1;

while (s <= 5){
    console.log(s);

    s++;
}

// do - while

// let m = 1 ;

// do {
//     console.log(m);
//     m++;
// } while (m<=5);

//  Loop controls

// break

for(let i =1 ; i<=5 ; i++){
    if(i === 3){
        break;
    }
    console.log(i);
}

// continue

for(let i =1 ; i<=5 ; i++){
    if(i === 3){
        continue;
    }
    console.log(i);
}