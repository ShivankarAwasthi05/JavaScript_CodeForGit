/*let mydate=new Date();
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toISOString());
console.log(mydate.toLocaleDateString());
console.log(mydate.toLocaleTimeString());
console.log(mydate.toLocaleString());
console.log(mydate.toTimeString());
console.log(mydate.toUTCString());
console.log(typeof mydate);

let myCreatedDate=new Date(2025,24,2,5,3);
console.log(myCreatedDate.toString());
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleDateString());
console.log(myCreatedDate.toLocaleString());

let date2=new Date("02-24-2025");
console.log(date2.toLocaleString());

let timeStamp=Date.now();
console.log(timeStamp);
console.log(myCreatedDate.getTime());
console.log(timeStamp.toLocaleString());
console.log(Math.floor(Date.now()/1000));
*/

let newDate=new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

newDate.toLocaleString('default',{
  weekday:"long",

})
console.log(newDate);

