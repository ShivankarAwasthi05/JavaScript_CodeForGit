for(let index=1;index<=10;index++){
    if(index===5){
        console.log("ShriShyamaShyam");
    }
    console.log(index);
    console.log("RadhaVallabhShriHariVansh");
}

for (let i = 1; i <=10; i++) {
    console.log("RadhaVallabhShriHariVansh");
    for (let j = 1; j <=10; j++) {
        console.log("ShriVrindavanShriVanChand");
    }
    
}
// Tables for numbers
for(let i=1;i<=10;i++){
    console.log(`Table of Number ${i}`);
    for(let j=1;j<=10;j++){
        console.log(i+"*"+j+"="+i*j);
    }
}
//Loop on Arrays
const name=["RadhaRani","Radhika","Shriji","ShriShyamaShyam"];
for(let i=0;i<=name.length-1;i++){
    console.log(name.length);
    const result=name[i];
    console.log(result);
}

//break and continue keyword

for (let i=1;i<=20;i++){
    if(i===5){
        console.log("Detected the  Number");
        break;}
    console.log("Value of i is:",i);
}
for (let i=1;i<=20;i++){
    if(i===5){
        console.log("Detected the  Number");
        continue;}
    console.log("value of i is: ",i);
}

//Break will terminate the loop if we use the break statement in the loop.
//continue will skip that state or number in the loop for which we apply the continue .