/* Switch Statements in javascript

Syntax:
      switch(key){
      case:value
          break;
      default:
          break;
      

*/
const month=4;
switch(month){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("Augus");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Enter the Wrogn value");
        break;
}

//For String type of key in which statements:
const name="Shriji";
switch(name){
    case "Radha":
        console.log("Radha");
        break;
    case "RadhaRani":
        console.log("RadhaRani");
        break;
    case "ShriKrishnaVallabha":
        console.log("RadhaRani");
        break;
    case "Radhika":
        console.log("Radhika");
        break;
    case "Shriji":
        console.log("Shriji");
        break;
    default:
        console.log(`Name of Godess ShriRadhika is supreme`);
        break;
}