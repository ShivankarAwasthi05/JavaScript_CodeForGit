// control Statements in javascript 
 /*
1)if Statments 
Syntax:
        if(condition){
        Statements;
        }
 */
/*
        if(true){
            console.log("ShriRadhaVallabhShriHariVansh");
        }
        
*/

//Basics Operators in Javscript:(<)less than,(>)Greater than,(>=)less tha or equals to or (<=) greater than or equals to, (==)equals,(!=)not equals, (===)type equals to,(!==)

console.log(2==="2"); //Strict equals False;
console.log(-4!==-4);
console.log(-4!==4);

const temperature=200;
if(temperature>100){
    const temp=200;
    console.log(`temperature is High as ${temp}`);
}
console.log("RadhVallabhShriHariVansh");

if(temperature>300){
    console.log("Temperature is greater than 300");
}
else{
console.log("temperature is less than 300");
}

//Implicit scope if statements

const score=1000;
if(score>500)
    console.log("Score is Greater than 500");

//for multiple line execution in if statements without using of {} brackets.

if(score>500)
    console.log("Score is High"),
    console.log("Score is as high as 500");

// for multiple line execution after if statement we have to use (,) commaa after each line of statement. but generally avoid this technique for multiple line execution after if statement.

//Nested if-elseif statements for program Execution

const value=1000;
if(value>1500){
    console.log("Value is greater than 500");
}
else if(value>700){
    console.log("Value is greater than 700");
}
else if(value>900){
    console.log("Value is greater than 900");
}
else{
    console.log("Value is less than 1200");
}

//if else statements with And ,OR,Not Operator.

const userRegister=true;
const userDebitCard=true;
if(userRegister && userDebitCard){
    console.log("Allow user to buy the course");
}
const userRegisterThroughGoogle=false;
const userRegisterThroughEmail=true;
const userRegisterThroughGuest=false;

if(userRegisterThroughGoogle || userRegisterThroughEmail || userRegisterThroughGuest){
    console.log("Allow user to view the courses");
}




    
