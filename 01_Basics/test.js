console.log("Shri Radha Rani");
const syn=Symbol("Key");
const obj={
    Name:"Aditya Awasthi",
    Roll_Number:2201641520164,
    Branch:"CS_AI",
    ID:32710
    [syn]="key"
}
console.log(obj["ID"]);
console.log(obj[syn]);