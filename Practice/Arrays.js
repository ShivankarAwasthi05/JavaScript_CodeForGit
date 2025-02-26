// const arr=["RadhaRani","shyamaShyam","shriji","kishoriji"];
// console.log(arr);
// arr.push("Shyamajiu");
// arr.push("RadhaVallabhShriHariVansh");
// arr.unshift("Shri Radhika");
// arr.shift();
// //arr.pop();
// console.log(arr);

// const Arr=[1,2,3,4,5,6,7,8];
// console.log(Arr.slice(1,3));
// console.log(Arr.splice(1,3));
// console.log(Arr);
const Arrr1=new Array(1,2,3,4,5,6,7,8);
const Arrr2=new Array(9,10,11,12,13,14);
const Arrr3=[...Arrr1,...Arrr2];
console.log(Arrr3);

console.log(Array.isArray(Arrr1));
console.log(Array.isArray(Arrr2));
console.log(Array.isArray(Arrr3));

console.log(Array.from("RadhaVallabh"));
console.log(Array.of("ShriHariVansh"));