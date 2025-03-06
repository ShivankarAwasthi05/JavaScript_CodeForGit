// for of Loop in javscript

const arr=[1,2,3,4,5,6,7,8];
for (const num of arr) {
    console.log(num);
}

const name=["Shriji","ShyamShyam","Radhika","ShriShyamaShyam"];
for (const str of name) {
    console.log(str);
}

//Maps in Javascript 

const map=new Map();
map.set(1,"Shriji");
map.set(2,"ShyamaShyam");
map.set(3,"Radhika");
map.set(4,"Radhe");
map.set(5,"Satya");

console.log(map);

for (const Value of map) {
    console.log(Value);
}

for (const[Key,Value] of map){
    console.log(Key,":-",Value);
}

const myObject={
    game1:"NFS",
    game2:"Spiderman",
    game3:"GTA5",
    game4:"GTA6"
}
// for (const [Key,Value] of myObject) {
//     console.log(Key,":-",Value);
// }

