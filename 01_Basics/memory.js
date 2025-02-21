/* Memory:Memory is the place in the computer where the data of the variable is actually stored.

Types of Memory:
1.stack(Primitive)
2.heap(Non-primitive)(referential)

*/
let value="RadhaRani"
let value2=value
value2="Shrijii"
console.log(value2);
console.log(value);

/* In the stack the variable get the copy of the data not the original data so if we applied some changes on the variable then it can't be reflect on the original data 
*/

let obj={
    name:"RadhaRani",
    name2:"ShriJi",
    name3:"KishoriJi"
}
let obj2=obj
obj.name3="ShyamaShyam"
console.log(obj.name3);
console.log(obj2.name3);

/* In heap memory the variable get the direct reference to the original data so if we applied some changes to the variable then it will directly reflect to the original data
*/

