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
console.log(godessName.charAt(2));
console.log(godessName.indexOf('d'));

//substring method 
const newName=godessName.substring(0,5);
console.log(newName);

//slice method
const newName2=godessName.slice(-9,9);
console.log(newName2);

//trim method 
const godessName2="  Radhika    "
console.log(godessName2.trim());

//replace method
const godessName3="https://RadhikaRani.com//%20@shriShyamaShyam"
console.log(godessName3.replace("%20","-"));

//includes method
console.log(godessName3.includes("RadhikaRani"));
console.log(godessName3.includes("shriShyamaShyam"));

//split method
const godessName4="Radhika-Rani-ShriShyamaShyam"
console.log(godessName4.split("-"));