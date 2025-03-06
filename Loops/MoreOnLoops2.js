// const name=["Radha","Shriji","ShyamaShyam","Kishorjui"]
// const value =name.forEach((langs) => {
//     console.log(langs);
//     return langs;
// });
// console.log(value);

const myNums=[1,2,3,4,5,6,7,8,9,10];
const newNums=myNums.filter((num) => num>4) // [5,6,7,8,9,10]
console.log(newNums);

const newNums2=myNums.filter((num) =>{      // []
     num>4
})
console.log(newNums2);

const newNums3=myNums.filter((num) =>{      // [5,6,7,8,9,10]
    return num>4
})
console.log(newNums3);

const newNums4=[];
myNums.forEach((num) =>{
    if(num>4){
        newNums4.push(num);
    }
})
console.log(newNums4);

