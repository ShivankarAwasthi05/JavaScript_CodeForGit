/*
Types of special Loops in JavaScript

1)For Each loop:This loop is basically used to direct get the access of the array or string by used follow the syntax of this loop.
*/

const Arr=[1,2,3,4,5,6,7,8,9,10];
Arr.forEach(function(num,index,Array){
    console.log(num,index,Array);
})
    
Arr.for (const element of Arr) {
    console.log(element);
}


