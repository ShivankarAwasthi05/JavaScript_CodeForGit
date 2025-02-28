// const object={
//     name:"Shriji",
//     name2:"RadhaRani",
//     welcome:function(){
//         console.log(`Welcome Back godess ${this.name}`);
//         console.log(this);
//     }
// }
// object.welcome();
// object.name="ShyamaShyma";
// object.welcome();
// console.log(this);

// function Happy(){
//     const name="Shivankar";
//     console.log(this.name);
// }

// Happy();


//In function we can't use {this.variable} to access the data but we can use it for variable use in objects.


// const fun=function(){
//     console.log(this);
// }
// fun();

// const fun2=function(){
//     const Name="ShyamaShyam";
//     console.log(this,Name);
// }
// fun2();

//Arraow function 

// const fun =() =>{
//     const name="Shiriji";
//     console.log(this.name);
// }
// fun();

// Arrow function syntax

const fun =() =>{
    console.log("Shri Radha Rani");
}
fun();

//Explicit Arrow Function

const funExplicit=(name1,name2) =>{
     return name1+name2;
}
console.log(funExplicit("ShriRadha","Rani"));

//Implicit Arrow Function

const funImplicit=(name1,name2) => name1+name2;
console.log(funImplicit("ShriShyama","Shyam"))

/* Note: If we using implicit arrow function with {} then we have to use return keyword otherwise if we using () brackets the we don't have to use return keyword and if we don't want to use any bracket then we can do this also
*/

const addTwoNumber = (num1,num2) =>({Username:"Shriji"});
console.log(addTwoNumber(2,3));

/* If we Take case of returning object using implict arrow function then we have to use the {} brackets because it is necesary in case of object return 
*/


// const ReFun= function(name){
//     console.log(`The Ultimate name of godess ${name}`);
//     console.log(this);
// }
// ReFun("Shriji");

// const ReFunn =(name1) =>("Shriji");
// const namee=ReFunn();
// console.log(namee);

// const Refunnn=(nameee) =>{
//     console.log(this);
// }
// Refunnn();