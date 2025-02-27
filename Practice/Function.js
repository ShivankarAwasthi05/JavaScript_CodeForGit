const object={
    name:"RadhRani",
    name1:"Shriji",
    name2:"Kishorijui",
    name3:"ShyamaShyam"
}
function objectHandle(anyobject){
    console.log(`This is the Ultimate name of Godess is ${anyobject.name} and ${anyobject.name1} and ${anyobject.name2} and ${anyobject.name3}`);
}
objectHandle(object);

const arr=[1,2,3,4,5,6,7,8];

function arrayhandle(getarray){
    return getarray[2];
}
console.log(arrayhandle(arr));


function handleCart(...num1){
    return num1;
}
console.log(handleCart(2,3,4,5));


function UserLogin(name="Radhika"){
    console.log(`Welcome Back ${name}`);
    return "RadhaRani";
}
console.log(UserLogin("Shriji"));
console.log(UserLogin(""));
console.log(UserLogin());