"use strict";

console.log("Hello!");

//Lewis preferred way to create a variable//
let myName = "Lubeth";
console.log(myName);

let firstName = "Lu";
let middleName = "";
let lastName = "J";
let address = "123 main";
//Null is a datatype means empty or non-existant//
let suffix = null; //Example of null

//Primitive Datatypes//
//Strings//
let stringExample = "This is a string"; //String Literal
let stringExample2 = ""; //<<<<<This is also a string
let stringExample3 = "Hello, " + "! "; //String Expression
//Concatenation//

//Numbers//
let numberExample = 23; //Number Literal
let numberExample2 = 5+10 //Number Expression
let numberExample3 = 0;
//Undefined //
let undefinedExample = undefined; //Undefined  DO NOT MAKE ANY JS CODE Undefined or explicitly use the word in your code set the value to default or 0
let undefinedExample2;
console.log(undefinedExample2);
//Boolean//
let booleanExample = true;
let booleanExample2 = false;
let booleanExample3 = 6 > 9; //Boolean Expression
let booleanExample4 = "Hello" === "Hello";
let booleanExample5 = "Hello" == "Hello";
let booleanExample6 = "5" === 5; //false
let booleanExample7 = "5" == 5; //true


//BigInt//
//Symbol//
const arrayExample = []; //EWmpty array literal
const arrayExample2 = ["Person", "Steve", "bob", "Pancake"];
const arrayExample3 = [5, true, undefined, null, "hello"];
console.log(arrayExample2[2], arrayExample3[1]);
console.log(arrayExample[3]);
//Object//
const objectExample = {}; //Empty object literal
const objectExample2 = {firstName: "Lu", lastName: "J", age: "36", isVerified: false};
console.log (objectExample2);
const person = {
    firstName: "Bob",
    lastName: "Smith",
    age: 102,
    isVerified: false,
}
console.log(person.firstName);
console.log(person["firstName"]);

function addNumbers(a , b){
console.log(a + b);
}
addNumbers(7,5);