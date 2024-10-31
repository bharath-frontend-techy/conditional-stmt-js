

// Task-1



let day="Tuesday"
if(day=="monday"){
    console.log("Start your week strong");
}
else if(day=="Tuesday"){
    console.log("Keep going");
}
else if(day=="Wednesday"){
    console.log("Halfway there");
}
else if(day=="Thurseday"){
    console.log("Almost the weekend");
}
else if(day=="Friday"){
    console.log("Happy friday");
}
else if(day=="Saturday"){
    console.log("Enjoy your weekend")
} 
else if(day=="Sunday"){
    console.log("Enjoy your weekend");
}
    

// Task2



let trafficlight=+prompt("enter Color signal");

if("red"){
    console.log("Stop");
}
else if("Yellow"){
    console.log("Get Ready");
}
else if("Green"){
    console.log("Go");
}

Task3

let amount=+prompt("Enter the total Purchase amount")
// debugger
// let amount = 1000;
if(amount<50){
    console.log("NO Discount");
}
else if(amount >= 50 && amount <= 100){
    console.log("5% discount");
}
else if(amount >= 101 && amount<=200){
    console.log("10% Discount");
}
else if(amount > 200){
    console.log("15% Discount");
  
}


// Task4



let dishname="veg pula";
if(dishname=="Biriyani"){
    console.log("Biriyani price is 250rs");

}
else if(dishname=="shawarma"){
    console.log("Shawarma price is 150rs");

}
else if(dishname=="Fried rice"){
    console.log("Fried rice price is 100rs");

    
}
else if(dishname=="veg pula");{
    console.log("veg pula price is 80rs");
}


// task5


let num1=20;
let num2=5;

let opp="-";

switch(opp){
    case"+":
    console.log(num1+num2);

    break;

    case"-":
    console.log(num1-num2);

    break;

    default:
        console.log("invalid operator")


}


