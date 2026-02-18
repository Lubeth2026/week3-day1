"use strict";

console.log("It's a new day!");
//Example of function//

//const user1Name = "Jess";
//let user1Score = 10;

//const user2Name = "Grace";
//let user2Score = 20;

//Example of Object// Much better to group items in JS
//This is the object //Code inside makes it a literal object//
const user1 = {
  userName: "Jess",
  userScore: 10,
};
const user2 = {
  userName: "Grace",
  userScore: 20,
};

console.log(user1.userName + " " + user1.userScore);
console.log(user2.userName, user2.userScore);

//An object can be anything Example below://
const metaPhone4 = {
  screensize: 1.9,
  processor: "4.5gz",
  powerOn: function () {
    //send a signal to the battery
  },
};

//Very usable language to organize your data
const header = {
  position: "sticky",
  width: "100%",
  links: ["home", "About", "Sales"],

  getCodeSpaces: function () {
    //go to DB and find out//
  },
};

//FUNCTIONS//
//memorize this pattern//
function displayText() {
  //this is where the function code goes//
  //what ever you want the function to do goes here//
  document.writeln("Hello!");
  console.log("Hi!!!");
  console.table(["Hello", "Hi!"]);
}
displayText();

//Another Example of Function//
//function makeUser(name, score) {
  //console.log(name, score)
  //return { userName: name, userScore: score };
//}
//const userOne = makeUser("Yaya", 15);
//const userTwo = makeUser("Bob", 22);

//const userThree = makeUser(prompt("What is your name?"), 33);
//console.log(userOne);
//console.log(userTwo);
//console.log(userThree);
//console.log("Banana");

//Object literal to show Example of this which means just the object you are in with JS//
//const user6 = {
//  userName: "George",
//userScore: 22,
//talk: function(){
//      console.log("Hi my name is " + this.userName)
//}
//};
//const user7 = {
//userName: "Fred",
//userScore: 22,
//talk: function () {
// console.log("Hi my name is " + this.userName);
//},
//};

//function getData(){
//  console.log("Getting data....")
//}
//const alsoGetData = function (){
//  console.log("Hey!")
//}

//Class Work 2/17/26//
//JSON Example//
const jsonExample = {
  color: "red",
  priceNumber: 100,
};
const jsonExample2 = '{"color": "red", "priceNumber": 100, "thisOne": true}';

try {
const objectJSON = JSON.parse(jsonExample2)
console.log(objectJSON.color);
}catch (error){
    console.log("Hey", err)
}
const jsonStringed = JSON.stringify(jsonExample)
console.log(jsonStringed);
