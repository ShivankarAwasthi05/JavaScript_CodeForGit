const obj=new Object();
obj.name="RadhaRani";
obj.name2="Shriji";
obj.name3="ShriShyamaShyam";
obj.isLoggedIn=true;
console.log(obj);

const object=[
    {
        userId:1,
        emails:"Radha108@gmail.com"
    },
    {
        userId:1,
        emails:"ShyamaShyam108@gmail.com"
    },
    {
        userId:1,
        emails:"Shriji108@gmail.com"
    },
    {
        userId:1,
        emails:"RadhaRani108@gmail.com"
    }
    
]
console.log(obj);
console.log(Object.keys(obj));
console.log(Object.values(obj));
const arr=Object.keys(obj);
const arrr=Object.keys(obj);
console.log(arr);
console.log(arrr);

/* In javascript the method Object.values(obj) & Object.Keys(obj) are used to get the all the values and keys of the object (obj) in an array
*/

// Object.entries() in Javascript

console.log(Object.entries(obj));
/* The Object.entries(obj) in javascript will prepare the key-value pair of the object in the array form 
Example:
[
  [ 'name', 'RadhaRani' ],
  [ 'name2', 'Shriji' ],
  [ 'name3', 'ShriShyamaShyam' ],
  [ 'isLoggedIn', true ]
]
  */

//hasownproperty() method in javascript
console.log(obj.hasOwnProperty('isLoggedIn'));



