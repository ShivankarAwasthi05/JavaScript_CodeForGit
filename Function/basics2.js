/*
function calculateCartPrice(num1){
    return num1;
}
console.log(calculateCartPrice(200,400,500));
*/

//Rest Operator

function calculateCartPrice(...num1){ //Rest Operator (...num1).
    return num1;
}
console.log(calculateCartPrice(200,400,500));
console.log(calculateCartPrice(100,300,600));

//Another syntax for declaring Rest arguements:

function calc(val1,val2,...num2){
    return val1,val2,num2;
}
console.log(calc(100,200,300,400));

const user={
    username:"Shivankar",
    price:200,
    price2:300,
}
 function handleObject(anyobject){
    console.log(`UserName is ${anyobject.username} and Price of product is ${anyobject.price}`);
 }
 // handleObject(user);
handleObject(
    {
        username:"shivankar",
        price:200
    }
)

const mynewArray=[200,400,600];
function  returnSecondvalue(getArray){
    return getArray[1];
}
console.log(returnSecondvalue([200,400,600])); 
/*
function_Name(mynewArray));
*/

const Amount =function(...value){
    console.log(`The Total Amount is ${value}`);
}
Amount(100,1100,1110,100010);

