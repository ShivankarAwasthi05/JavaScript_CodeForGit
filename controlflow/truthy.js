const userEmail="shivankarawasthi974@gmail.com";
if(userEmail){
    console.log("Got the UserEmail");
}
else{
    console.log("Not Got the UserEmail");
}
const userEmail2="";
if(userEmail2){
    console.log("Got the UserEmail");
}
else{
    console.log("Not Got the UserEmail");
}
const Arr=[];
if(Arr.length===0){
    console.log("Array is Empty");
}

/* Falsy Values in Javscript:
1)False
2)0
3)BigInt(0n)
4)-0
5)""
6)NaN
7)undefined

Truthy values in Javascript
1)"0"
2)"False"
3)" "
4)[]
5){}
6)function(){}
*/

const EmptyObject={};
if(Object.keys(EmptyObject).length===0){
    console.log("Object is Empty");
}
console.log(false==0);
console.log(false=="");
console.log(false==[]);