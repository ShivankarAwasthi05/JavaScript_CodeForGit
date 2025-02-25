//Non-Singelton Object Creation in Javascript
/*console.clear();
// Object in JavaScripts
// Object literals
//Object.create

const mySyn = Symbol("Key1");
const mySyn2 = Symbol("Key1");

console.log(mySyn);
console.log(mySyn2);

const user = {
  name: "RadhaRani",
  name2: "Shrijji",
  age: 14,
  location: "Vrindawan",
  email: "RadhaRani108@gmail.com",
  isLoggedIn: true,
  LastLoggeddays: ["Monday", "Tuesday"],
  Name: "shriShyamaShyam",
  [mySyn]: "mykey1",
  [mySyn2]:"myKey1"
};
// console.log(user.email);
// console.log(user["email"]);
// console.log(user["Name"]);
// console.log(typeof user["mySyn"]);
// console.log(typeof mySyn);
// console.log(user[mySyn]);

user.email = "RadhaRani10808@gmail.com";
//Object.freeze(user);
user.email = "RadhaRani108@gmail.com";
// console.log(user["email"]);

// console.log(user);

user.greeting = function () {
  console.log("RadhaVallabhShriHariVansh");
  return "hello";
};
// console.log(user.greeting());
// user.greeting();

user.greeting2 = function () {
  console.log(`Hello,${this.email}`);
};
// user.greeting2();
console.log(user[mySyn]);
console.log(user[mySyn2]);
*/

//Object Creation in JavaScript

//creation of symbol in javascript
const mySyn= Symbol("Key1");

const obj={
  Name:"Shivankar Awasthi",
  RollNumber:2201641520164,
  Course:"Btech",
  Branch:"CS-AI",
  Year:"Third-year",
  [mySyn]:"Key1"
}
console.log(obj);
const name="RadhaRani";


//Function in javascript
obj.myfun= function(){
  console.log(`The name of godess is ${this.Name}`)
}
obj.myfun();

console.log(obj["Name"]);
console.log(obj.RollNumber);
console.log(obj["Course"]);
console.log(obj["Branch"]);
console.log(obj["Year"]);
console.log(obj[mySyn]);

const mySyn2=Symbol["Key2"];

const obj2={
 name: "RadhaRani",
  name2: "Shrijji",
  age: 14,
  location: "Vrindawan",
  email: "RadhaRani108@gmail.com",
  isLoggedIn: true,
  LastLoggeddays: ["Monday", "Tuesday"],
  Name: "shriShyamaShyam",
  [mySyn]: "mykey1",
  [mySyn2]:"myKey1"
}
obj.myfun2= function(){
  console.log(`The Ultimate Name is ${this.name},${this.name2}`);
}
obj.myfun2();


