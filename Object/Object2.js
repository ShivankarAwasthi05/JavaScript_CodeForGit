//Singelton Object by constructor in javascript
/*const obj=new Object();
obj.name="RadhaRani";
obj.name2="Shriji";
obj.name3="ShriShyamaShyam";
obj.isLoggedIn=true;
console.log(obj);

const Name={
    name5:"ShriRadha",
    name6:{
        name1:"ShriShyamaShyam",
        name2:"ShriRadhika"
    },
    name7:"shriji",
    name8:{
        name9:{
            firstName:"RadhaRaman"
        }
    }
}
console.log(Name.name6.name1);

//Object Nesting is also possible in javascript by the above code we easily understand  the code of nested object in javascript 

const obj2={
    name:"RadhaVallabh",
    name1:"ShriHariVansh",
    name2:"ShriShyamaShyam",
    name3:{
        name4:"RadhaRani"
    },
    name5:{
        name6:{
            name7:{
                name8:"Shrijii"
            },
        },
    },
    name9:"ShriKishorijii"
    
}
console.log(obj2.name5.name6.name7.name8);
*/
const mySyn=Symbol["ShriRadhe"];
const obj={
    name:"Radharani",
    name1:"ShyamaShyma",
    name2:"Shriji",
    name3:{
        name4:{
            name5:{
                name6:{
                    name7:"ShriKishorijii"
                },
            },
        },
    },
    name8:"Shrijii",
    name9:"ShriVrindawaneshwari",
    [mySyn]:"ShriRadhe"
}

obj.myfun=function(){
    console.log(`This is the Ultimate Name of goddess is ${this.name3.name4.name5.name6.name7}`);
}
obj.myfun();
console.log(obj[mySyn]);

/*
Non Singelton Object Syntax :
const obj={
.......
}

2.Singelton Object Syntax:

const obj=new Object();
obj.v="..";
obj.k="..";
.. many more

3.Symbol Syntax

const mysyn=Symbol["ShriRadhe"];
console.log(obj[mysyn]);

4. function 

obj.myfun=function(){
console.log(`.......${}`);
}

*/

//Concatination of two object in javascript

const obj1={1:"A",2:"B"};
const obj2={3:"C",4:"D"};
const obj3={obj1,obj2};
console.log(obj3);
// Object.assign(v1,v2..vn) method are used in javascript for concatination of two object .

const obj4=Object.assign(obj1,obj2);
console.log(obj4);

//Better syntax for concatination of n object in  javascript 

const obj5=Object.assign({},obj1,obj2);
console.log(obj5);

// Syntax for Better concatination on object in javascript 
/*
Object.assign(target{},source1,source2,source3,..sourcen);
In the above mentioned technique the concatination of all the source data will be concat into the target {} .
*/

/*
By default if we do not pass a target {} empty array in the concatination process then the concatination result of all the sources are concatinate into the source1 in the syntx
*/

const obj6=Object.assign(obj1,obj2); 
console.log(obj6===obj1); // As we early mentioned the value concatinate into obj1 .
console.log(obj6);        // Data available in the obj6 and obj1 is same.
console.log(obj1);

// Spread method for concatination of n object in javascript 
const object1={1:"R",2:"A",3:"D",4:"H",5:"A"};
const object2={1:"R",2:"A",3:"N",4:"I"};
const object3={...object1,...object2};
console.log(object3);
console.log(object3===object1);

/*Best Technique for concatination of n object in javascript in spread
Syntax:
const obj3={...obj1,...obj2}
*/



