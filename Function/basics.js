/* Functons in Javascript */
// console.log("RadhaRani");
// console.log("ShriShyamaShyam");
// console.log("Shriji");
// console.log("ShriRadhika");
// console.log("ShriRamya");

// function godessName(){
// console.log("RadhaRani");
// console.log("ShriShyamaShyam");
// console.log("Shriji");
// console.log("ShriRadhika");
// console.log("ShriRamya");
// }

// godessName();

// function AddTwoNumber(number1,number2){//function F_Name(Parameter1,Paramter2).
//     console.log(number1 + number2);
// }
// AddTwoNumber(2,4);
// AddTwoNumber(2,'4');
// AddTwoNumber('2',4); // FunctionName(Arguement1,Arguement2);
// AddTwoNumber('2','4');
// AddTwoNumber(2,null);

// const result=AddTwoNumber(2,3);
// console.log(result);
// console.log(typeof result);

// function addtwonumber(num1,num2){
//     console.log("Radha");
//     return num1+num2;
// }
// const result1=addtwonumber(6,8);
// console.log("Result:",result1);

function loginUserMessage(username="Radhika"){
    if(username === undefined){  //if(!username):Means same as undefined.
        console.log("Please enter a godess name");
        return;
    }
    return `welcome back goddess ${username}`;
}
const user=loginUserMessage("Shriji");
console.log(user);

const user1=loginUserMessage("");
console.log(user1);

const user2=loginUserMessage();
console.log(user2);

/*
1.With Arguement.
2.Without Arguement.
3.black arguement.
4.default arguement.
*/


