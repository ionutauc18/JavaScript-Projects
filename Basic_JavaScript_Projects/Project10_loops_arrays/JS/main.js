function Call_Loop() {// here is our function "Call_Loop"
    var Digit = "";// here is our variable "Digit"
    var X = 1;// here is our second variable "X" with a value of 1
    while (X < 11) {// here is our while loop 
        Digit += "<br>" + X;
        X++;// ++ is used to add one 
    }
    document.getElementById("Loop").innerHTML = Digit;
}

function length_Property() {// here is our function called "length_Property"
    let text = "Hello World!";// here is our let statement "text"
    let length = text.length;// here is our let statement "length"
    document.getElementById("length").innerHTML = length;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];// here is our variable "Instruments"
var Content = "";//here is our variable "Content"
var Y;// here is our variable "Y"
function for_Loop() {// here is our fuction
    for (Y = 0; Y < Instruments.length; Y++) {// here is our For Loop
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() {// here is our function "array_Function"
    var Weather_Forecast = [];// here is our variable "Weather_Forecast"
    Weather_Forecast[0] = "raining";
    Weather_Forecast[1] = "sunny";
    Weather_Forecast[2] = "warm";
    Weather_Forecast[3] = "windy";// here we have our arrays of objects, indexes and the properties of the objects
    document.getElementById("Array").innerHTML = "Outside is very " + Weather_Forecast[2] + ".";
}

function constant_function() {// here is our function named "constant_function"
    const Race_Car = {brand:"Nissan", model:"Silvia S15", color:"Red"};// here we have our constant
    Race_Car.color = "Yellow";
    Race_Car.price = "16.000 pounds";
    document.getElementById("Constant").innerHTML = "The cost of the " + Race_Car.brand + " is " + Race_Car.price + ".";
}

function let_Function() {// here is our function
var Z = true;// here is our variable "Z" 
document.write(Z);
{
    let Z = false;// here is our let statement
    document.write("<br>" + Z);
}
document.write("<br>" + Z);//this will display the value of the variable and not the let statement
}

function myFunction() {// here is our function
    return Math.PI;// this will return the value of PI
 }
 document.getElementById("Return").innerHTML = myFunction();
  
 let dog = {// here is our let statement
    age: "2 years old ",
    breed: "Chihuahua ",
    size: "small ",
    color: "light-brown ",// here are our object's properties
    description : function() {// here is our method "description"
        return "Ruby is a " + this.age + this.size + this.color + this.breed + ".";
    }// we use "this" keyword to return our properties 
 };
 document.getElementById("Dog_Object").innerHTML = dog.description();

 let text = "";// here is our let statement
 for (let x = 1; x < 5; x++) {
    if (x === 4) {break; }// here is our break statement that "jumps out" of a loop
    text += "The number is " + x + "<br>";
 }
 document.getElementById("Break").innerHTML = text;

 let broken_loop ="";// here is our let statement
 for (let y = 1; y < 10; y++) {
    if (y === 4) { continue;}// here is our continue statement that breaks one iteration in our loop 
    broken_loop += "The number is " + y + "<br>";
 }
 document.getElementById("Continue").innerHTML = broken_loop;