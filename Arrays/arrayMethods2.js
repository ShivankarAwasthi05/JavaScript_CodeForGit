/*const godess=["RadhaRani","Kishoriji","ShyamaShyam","Radhikaji"];
const godess2=["Ramya","Radha","Shriji","Vrindawaneshwari"];
//godess.push(godess2);
//console.log(godess);
const godess3=godess.concat(godess2);
console.log(godess3);

const godess4=[...godess,...godess2]; //spread as concatination of n arrays.
console.log(godess4);

console.log(godess.reverse());
console.log(godess.sort());

const godess5=["Radha","Ramya","RadhaRani","Shriji"];
const godess6=["ShyamaShyam","Radhika","Satya","ShriKrishnawallabha"];
const godess7=[...godess5,...godess6];
console.log(godess7);
*/


//concat methods allways return a new Arrays as the combination of n-number of arrays.

const another_Array=[1,2,3,[4,5,6],7,[6,7[4,5]]];
const real_Array=another_Array.flat(Infinity);
console.log(real_Array);

console.log(Array.isArray("Radha"));
console.log(Array.from("RadhaRani"));
console.log(Array.from({name:"RadhaRani"})); //Interesting Case

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));

/*
Methods of Arrays in JavaScript
1.push().
2.pop().
3.concat().
4.spread().
5.reverse().
6.sort().
7.Array.flat().  : to convert multidimensional array to one dimensional array.
8.isArray().     :to Know Whether the given data is a array or not.
9.from().        :to convert data into array.
10.of().         : to submerge n-number of arrays.
*/

