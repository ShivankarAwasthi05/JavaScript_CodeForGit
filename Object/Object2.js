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