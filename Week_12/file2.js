import {name ,  greet} from "./file1.js";

console.log(name);
greet();


import { newName, city,add ,age as userAge } from "./file1.js";
console.log(newName);
console.log(city);



add(10,20);

// import greet1 from "./file1.js"

// greet1()
// default nisa curly bracket one nh

import multiply ,{num} from "./file1.js";

console.log(num);
multiply(10, 20);

console.log(userAge);

