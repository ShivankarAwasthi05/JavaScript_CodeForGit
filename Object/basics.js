console.clear();
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