const array=new Array(1,2,3,4,5);
array.push(6);    //To Insert new Value into the array
console.log(array);

array.pop();
console.log(array); // To delete last value from thr array

array.unshift(9);   // To insert value at the starting point in the array
console.log(array);

array.shift();
console.log(array);  // To delete the first value from the array

console.log(array.includes(3));
console.log(array.indexOf(4));

const array2=array.join()
console.log(array);
console.log(array2);
console.log(typeof array);
console.log(typeof array2);
