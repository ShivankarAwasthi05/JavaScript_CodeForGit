// Reduce on Arrays

// const Arr=[1,2,3,4,5,6,7,8,9,10];

// const newArr = Arr.reduce(function(acc,currval){
//     console.log(`acc:${acc} and ${currval}`);
//     return acc+currval;
// },0)

// console.log(newArr);

// const myNums=[1,2,3,4,5,6,7,8,9,10];

// const newNum=myNums.reduce((acc,currval) => acc+currval,0)
// console.log(newNum);

const shoppingCart=[
   {
    itemname:"JavaScript",
    price:2999,
   },
   {
    itemname:"Python",
    price:2999,
   },
   {
    itemname:"MobileDevelopment",
    price:2999,
   },
   {
    itemname:"DSa",
    price:2999,
   },
]

const priceToPay=shoppingCart.reduce((acc,item) => acc+item.price,0)
console.log(priceToPay);