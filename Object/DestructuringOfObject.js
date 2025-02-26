const object={
    Name1:"RadhaRani",
    Name2:"Shriji",
    Name3:"Kishoriji",
    Name4:"ShyamaShyam"
}
console.log(object.name1);
const {Name1}=object;
const {Name2}=object;
const {Name3}=object;
const {Name4}=object;
console.log(Name1);
console.log(Name2);
console.log(Name3);
console.log(Name4);

// This above mentioned technique is known as de structuring of Object 
/* If we have to call any Value from the object then we have to use the common syntax as mentioned below:
console.log(Object.Name1);
But by the help of the destructuring of the object as mentioned below:

const {value}=object;
now we don't have to write again and again (object.Name1) now we just have to write 
console.log(Name1) and that it.
*/

//
const {Name2:n}=object;
console.log(n);

/* Now the syntax:
const {Value:AlternateName}=object:
now we can just call value by the AlternateName of the Value.
Example
const {Name1:N}=object;
console.log(N);
Output:RadhaRani

*/
