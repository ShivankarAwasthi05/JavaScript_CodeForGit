/* On The basis of how variable stored in the memory the datatypes are classified into two types:>
1)Primitive
2)Non Primitive
*/

/* Primitive: (CallByValue)These type of datatype when we call then we have the copy of the original data all the changes we make are applied to copy of the data */

/* Ther are 7 primitive datatypes
1.String
2.Number
3.Boolean
4.Null
5.Undefined
6.Symbol
7.BigInt
*/


/* Non-Primitive(Reference Type):These type of datatypes when we call the we have the direct reference of the original data and all the changes we have done with the data are directly applied to the original data */

/* Types of non-primitive datatype are:
1.array
2.objects
3.functions
*/

/* Javascript is dynamically typed language because we don't have to provide which type of value stored by the variable javascript understood on its own */

// const score=2100;
// const score=21.1;

const isloggedIn= false;
const outside=null;
let user;

/* Symbol always represents a unique value if the user whether given the same value or not */
const id=Symbol('123');
const idd=Symbol('123');
console.log(id);
console.log(idd);
console.log(id===idd);

const bigNumber=12345678998777687687677878678n;

const heros=["Radha Rani","Shriji","ShriHariVansh"];
let myobject = {
    name:"shivankar",
    age:20,
    phoneNumber:9555841688,
}

const myfunction = function(){
    console.log("Shri radhika rani");
}

console.log(typeof bigNumber);  //bigint
console.log(typeof myfunction); //function object
console.log(typeof heros);      //object
console.log(typeof myobject);   //object
console.log(typeof null);       //object
console.log(typeof id);         //symbol
console.log(typeof idd);        //symbol
console.log(typeof user);       //undefined
console.log(typeof outside);    //object 
console.log(typeof isloggedIn); //boolean

/* Difference between const,var and let keyword in javascript:
1.var:var keyword in javascript declare variable in a code and can be accessed globally. Scope of variable declare with var keyword can be accessed outside the block as well.

2.let:let keyword in javascript declare variable in a code and can not be accessed globally . Scope of the variable declares with let keyword can limited to the function or block where it is declared.

3.const:const keyword in javascript declare that type of variable whose value we don't want to change during the program execution.Scope of the variable declare with const keyword is limited to the function or block where it is declared.

*/
