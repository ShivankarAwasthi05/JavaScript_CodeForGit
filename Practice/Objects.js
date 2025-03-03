// const object1={1:"A",2:"B",3:"C"};
// const object2={1:"D",2:"E",3:"F"};
// const object3=Object.assign(object1,object2);
// console.log(object3);
// console.log(object1);
// const object4={...object1,...object2};
// console.log(object4);

const object1={
    name:"RadhaRani",
    name1:"Radha",
    name3:"Kishorijui",
    name4:{
        name5:{
            name6:{
                name7:{
                    name8:"ShriShyamashyam",
                    name9:"Shrijii"
                },
            },
        },
    },
}

const object2={
    name:"ShriRadha",
    name1:"Shrijii",
    name2:"ShriShyamashyam",
    name3:{
        name4:{
            name5:{
                name6:{
                    name7:"Shriji",
                    name8:"RadhaRamanji"
                },
            },
        },
    },

}

// console.log(object1);
// console.log(object2);

const object3={...object1,...object2};
console.log(object3);


object1.myfun=function(){
    console.log(`The Ultimate name of goddes is ${this.name4.name5.name6.name7.name8}`);
}
object1.myfun();


const object10=Object();
object10.name="Shriji";
object10.name2="ShriShyamaShyam";
object10.name3="ShriRadhika";

console.log(`The name are ${object10.name} ,${object10.name2},${object10.name3}`);

const numm ={
    num1:1,
    num2:2,
    num3:3
}

const nummm={
    num4:4,
    num5:5,
    num6:6
}

const nummmm={...numm,...nummm};
console.log(nummmm);