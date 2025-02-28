// Immediately Invoked Function Expression 

function DataBase(){
    console.log("DataBase Connected");
}
DataBase();

/*Synatx To Write a IIFE Function in JavaScript
(function Function_Name(){
  Body;
})()

()()
*/

(function DbConnection(){
    console.log("DB Connected");
})();


/* why we Use IIFE :Because sometimes we the changes or pollution in the global space can also impacts for database connnection function or any other function which we want to immediatly execute then we use IIFE Technnique to separte the specific function from the global space changes or pollution
*/


// Arrow function as IIFE Technique 

( () =>{
    console.log("DataBase Connection commit");
})
();

/* Note: If we forget to apply (;) semicolon just after the ()(); in the IIFE the then compiler does not understand where to stop this IIFE Specified function in the whole code 
*/

(
    (name) =>{
        console.log(`The Name is ${name}`);
    }
)("Shrji");