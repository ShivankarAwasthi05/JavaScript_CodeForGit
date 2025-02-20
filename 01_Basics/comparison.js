/*console.log(2>1);
console.log(2>=1);
console.log(1==1);  //comparision operator in javascript 
console.log(2!=1);*/

console.log("2">1);                                      
                         /*we should take care of that no 
                        different type of variable be comapred */
console.log(1<"02");

console.log(null >0);                /*null is an empty value  but some time conversion problem comes when greater than 
                                     or equals  to then the null also convert into zero */
console.log(null ==0);
console.log(null<=0);

console.log(undefined >=0);
console.log(undefined ==0);
console.log(undefined >=0);


//Strict Check in JavaScript (===) check the value as well the datatype of the variable 
console.log("2"===1);
console.log(1===1);
console.log("3"==="2");