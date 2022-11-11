document.write(typeof 5);//This code returns back the type of data of a variable

function my_Function() {
    document.getElementById("NaN").innerHTML = 0/0;
}//This code returns back "NaN" because you can divide 0 by 0

function my_Function2() {
    document.getElementById("true").innerHTML = isNaN ('Is a string');
}//This code returns the result "true" because the variable is not a number 

function my_Function3() {
    document.getElementById("false").innerHTML = isNaN ('53.1');
}//This code returns the result "false" because the variable is a number

function my_Function4() {
    document.getElementById("inf").innerHTML = (3E311);
}//This code returns the result "infinite", the variable "3E311" being  more then the computer can count

function my_Function5() {
    document.getElementById("neginf").innerHTML = (-5E400);
}//This code returns "-infinite" by putting a negative number bigger then 1.8E308 

function my_Function6() {
    document.getElementById("trueB").innerHTML = (30 > 18);
}//This code returns the value "true" by comparing two variables, in this case 30 being bigger then 18

function my_Function7() {
    document.getElementById("falseB").innerHTML = (30 < 18);
}//This code returns the value "false" by comparing two variables, in this case 30 being smaller then 18


console.log(45 + 75);//This code puts the result of this two variables in the console within the browser

function my_coercion() {
    document.getElementById("coercion").innerHTML = ("6" + 69);
}//This code will return a combination of this two variables instead of the adding result because they represent different types of data

console.log(12 > 65);//This code returns the value "false" in the console within a browser

function truefunction() {
    document.getElementById("trueC").innerHTML = ((7 * 5) == 35);  
}// This code returns the value "true" by comparing the multiplication result of the variable "7" and "5" with the variable "35"

function falsefunction() {
    document.getElementById("falseC").innerHTML = (15 == 193);
}//This code returns the value "false" by comparing two variables, in this case "15" and "193"

X = "True"
Y = "True"
document.write(X === Y);//This code returns the result "True" by comparing the value and data type of two variables, in this case "X" and "Y" with the values of "True"  

A = "six"
B = 7
document.write(A === B);//This code returns the result "False" by comparing the value and data type of two variables, in this case "A" and "B" with the values of "7" and "six"

C = "six"
D = 6
document.write(C === D);//This code returns the result "False" by comparing the value and data type of two variables, in this case "C" and "D" with the values of "six" and "6"

E = 6
F = 7
document.write(E === F);//This code returns the result "False" by comparing the value and data type of two variables, in this case "E" and "F" with the values of "6" and "7"

document.write(5 < 25 && 199 > 56);//This code returns the result "true" by having both statements true

document.write(5 < 12 && 199 > 200);//This code returns the result "false" having just one of the statement true

document.write(5 > 1 || 12 < 10);//This code returns the result "true" by having one statement true

document.write(123 > 1000 || 12 < 10);//This  code returns the result "false" by having none of the statements true

function not_Function() {
    document.getElementById("Not").innerHTML = !(1000 < 10);
}//This code returns the result "true" by using the Bolean Logical operator "!" with the statement of this variable being "false"

function dnot_Function() {
    document.getElementById("DoubleNot").innerHTML = !(1000 > 100);
}//This code returns the result "false" by using the Bolean Logical operator "!" with the statement of this variable being "true"



