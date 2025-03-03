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



function handleUser(First_name,Last_name,...amount){
        console.log(First_name);
        console.log(Last_name);
        console.log(amount);
        console.log("Happy Customer");
        return;
}
const result=handleUser("Shivankar","Awasthi",1000,10000,100000);
console.log(result);

const fun8=(name8,name9) => {
    console.log(`The name are ${name8} and ${name9}`);
}
fun8("Shriji","ShyamaShyam");

const fun9=(n,m) => n+m;
console.log(fun9("Shriji","ShyamaShyam"));




