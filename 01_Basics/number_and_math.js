const score=108
console.log(score);
const num=new Number(108)
console.log(num);
console.log(num.toString());
console.log(num.toFixed(2));

const num2=23.897
console.log(num2.toLocaleString());
console.log(num2.toPrecision(3));

const rupees=1000000
console.log(rupees.toLocaleString('en-IN'));

/***************************************************Maths**************************************************************** */

console.log(Math);
console.log(Math.round(-4.8));
console.log(Math.ceil(4.1));
console.log(Math.floor(4.9));
console.log(Math.sqrt(36));
console.log(Math.abs(-6));
console.log(Math.min(2,3,4,5,6));
console.log(Math.max(2,3,4,5,6,));

//Math.random()
//console.log(Math.random());
//console.log(Math.random());
//console.log(Math.random());
//console.log(Math.random());
//console.log(Math.random());

//The default value of Math.random() is always between 0 to 1;
console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.random());

const min=10;
const max=20;

console.log(Math.floor(Math.random()*(max-min+1))+min);



