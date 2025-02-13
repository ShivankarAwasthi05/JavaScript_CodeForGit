const account_Id=32710 // Variable define with const keyword can't be change 
let accountEmail="Shivankarawasthi108@gmail.com"
var accountPassword="12345"
accountCity="kanpur"
let account_State;//Undefined because it does not contain any value

/*
prefer not to use var keyword because of issue of block scope and functional scope
*/

//account_Id=2

accountEmail="2k22.csai.32710@gmail.com"
accountPassword="Shivay@12345"
accountCity="kalyanpur"

//print with oridinary console.log method
console.log(account_Id);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

//print with console.table([a1,a2,a3]) method
 console.table([account_Id,accountEmail,accountPassword,accountCity,account_State]);

