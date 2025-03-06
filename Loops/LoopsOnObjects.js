const Languages={
    js:"JavaScript",
    cpp:"C-Plus-Plus",
    rb:"Ruby",
    swift:"swift by Apple"
}

//For Iteration of object in javascript we use for in loop

for (const key in Languages) {
     console.log(Languages[key]);
}

for(const key in Languages){
    console.log(`The Shortcut for languages ${key}`);
}

const Programing=["JavaScript","Java","CPP","C","Ruby","Rust"];
for(const key in Programing){
    console.log(`The Languages are ${Programing[key]}`);
}

//for in loop in javscript

const map=new Map();
map.set(1,"Radhika");
map.set(2,"RadhaRani");
map.set(3,"Shriji");
map.set(4,"ShyamaShyam");

// for(const key in map){
//     console.log(key);
// }

for(const [key,Values] of map){
    console.log(key,":-",Values);
}