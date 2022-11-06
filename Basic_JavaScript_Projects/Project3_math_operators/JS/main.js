function addition_Function () {
    var addition = 7548 + 646;
    document.getElementById ("Add").innerHTML = "7548 + 646 = " + addition;
}//Here we have an addition_Function that allows us to make an addition

function subtraction_Function () {
    var subtraction = 65465 - 7564;
    document.getElementById ("Subtract").innerHTML = "65465 - 7564 = " + subtraction;
}//Here we a subtraction_Function that allows us to make a subtraction

function multiplication_Function () {
    var multiplication = 655 * 32;
    document.getElementById ("Multiply").innerHTML = "655 * 32 = " + multiplication;
}//Here we have a multiplication_Function that allows us to make a multiplication

function division_Function() {
    var division = 347387 / 9;
    document.getElementById ("Divide").innerHTML = "347387 / 9 = " + division;
}//Here we have a division_Function that allows us to make a division

function multiple_Function() {
    var multiple = (65 + 94) * 7 / 1 - 19;
    document.getElementById ("Multiple").innerHTML = "65 plus 94, multiplied by 7, divided by 10 and then subtracted by 100 equals " + multiple;
}//Here we have a multiple_Function that allows us to make a multiplication

function modulus_Function() {
    var remainder = 543 % 9;
    document.getElementById("Remainder").innerHTML = "When you divide 543 by 9 you have a remainder of: " + remainder;
}//Here we have a modulus_Function that allows us to get a remainder out of 543 divided by 9

function negation_Function() {
    var negation = 64;
    document.getElementById("Negation").innerHTML = -negation;
}//Here we have a negation_Function thst gives us the negative number from Variable 64

var increment = 74;
increment++;
document.write(increment);//Here we have an increment that has been given a variable (74) and will count one step up from that variable

var decrement = 0.5;
decrement--;
document.write(decrement);//Here we have an decrement that has been given a variable (0.5) and will "reduce by discrete" from that variable


window.alert(Math.random (25) * 100);//Here we have a window.alert with the function Math.random that will give us a random number between 25 and 100 

document.write(Math.pow (5,5) );//Here we have an document.write with the function Math.pow that will gives the result of 5 to the power of 5

