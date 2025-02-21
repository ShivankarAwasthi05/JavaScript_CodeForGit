const name="RadhaRani"
const nameNumber=28
console.log(name+nameNumber+ " Shriji");

// string interpolation

console.log(`Best Name in the universe is ${name} and number of names of Shrimati Kishoriji is ${nameNumber}`);

/* String Interpolation:This is the writting technique for concatination of two or more string such that the string can also perform some extra features such as touppercase , tolowercae etc

Syntax:(`Sentence ${Variable_name} and Sentence ${variable_name});

*/

//Syntax for string declaration

const godessName=new String('RadhaRani');
console.log(godessName);

/* String {'RadhaRani'}0: "R"1: "a"2: "d"3: "h"4: "a"5: "R"6: "a"7: "n"8: "i"length: 9[[Prototype]]: String[[PrimitiveValue]]: "RadhaRani"
*/
 
console.log(godessName[0]);
console.log(godessName.__proto__);
console.log(godessName.length);
console.log(godessName.toUpperCase());