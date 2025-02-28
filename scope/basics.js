var a=10;
let b=20;
const c=30;
console.log(a);
console.log(b);
console.log(c);

/* At this step all code is running very well because we are not using any {} block then if we take the case where the {} blocks are the part of the code then the which keyword we use with variable declaration is matters a lot
*/

// var d=100;

if(true){
    var d=100;
    let e=200;
    const f=300; 
}
console.log(d);
//console.log(e); 
//console.log(f);

/* let: As we already know that the variable declare with let keyword will accessed only in that particular block not outside of that block (Local Space).
*/

/* const:As we already know that the variable decalre with const keyword will accessed only in that particular block not outside of that block and the variable can re-assign the value to that variable declare with const keyword
(Local space).
*/

/* var : As we already know that the variable declares with var keyword will accessed in the global space means everywhere in that particular code .(global Space).
*/


function one(){
    const godessName="ShriRadhaRani";
    function two(){
        const godName="ShriKrishna";
        console.log(godessName);
    }
    // console.log(godName);  The godessName is under the scope of function one() but godName is not under the scope of function two().
    two();
}
one();

/* When we class nested function then the child function can access the variable of the parent function but parent function can not access the variable of child function */

if(true){
    const User="Shriji";
    if(User === "Shriji"){
        const User2="ShriShyamaShyam";
        console.log( User + User2);
    }
    // console.log(User2);
}
// console.log(User);


// Function declaration Techniques in javascript
 
console.log(addOne(5));

function addOne(num1){
    return num1+1;
}


console.log(addTwo(8)); //   Cannot access 'addTwo' before initialization

const addTwo=function(num2){
    return num2+2;
}
