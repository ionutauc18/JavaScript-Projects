var X = 64;//Here we assigned the variable X a value of 64
function Add_numbers_1() {//Here is our function
   document.write(67 + X + "<br>");//Using our document.write method here we display the result of 67 added to our global variable "X"
}
function Add_numbers_2() {//Here is our second function
    document.write(X + 58 + "<br>");//Using our document.write method we add the value of our "X" global variable to 58
}
Add_numbers_1();//This display our result from the first adding function
Add_numbers_2();//This displays our result from our second adding function

function Multiplying_numbers_1() {//Here is our function
    var Y = 18;//Here is our variable "Y" with a value of 18
    document.write(Y * 5 + "<br>");//Using our document .write method we are multiplying the value of our variable "Y" with 5
}
function Multiplying_numbers_2() {//Here is our second function
    document.write(30 * Y);//Here is our second operation using our variable "Y" to be multiplied by 30
}
Multiplying_numbers_1();//This displays our result from our first function
Multiplying_numbers_2();//Because we used a local variable the second function will not be displayed the result

function adding_numbers_1() {//Here is our function
    var Z = 70;//Here we assigned variable "Z" a value of 70
    console.log(Z + 2 + "<br>");//Here we use the console.log method that will help us debug our code
}
function adding_numbers_2() {//Here is our second function
    console.log(Z + 10);//Using the console.log method that will help us debug the code using the browser's console
}
adding_numbers_1();//The result will not be displayed but if we open our console we'll see the error "X is not defined"
adding_numbers_2();//The result will not be displayed but if we open our console we'll see the error "X is not defined"

function greeting_Function() {//Here is our function
    if (new Date().getHours() < 18) {//Here we use a "if" statement and the Date().getHours() method by saying that if the hour is smaller the the value of 18
        document.getElementById("Greetings").innerHTML = "How are you today?";//Here it displays our final result by printing out "How are you today?"
    }
}

function closing_Function() {//Here is our function
    if (new Date().getHours() < 22) {//Here we use a "if" statement and the Date().getHours() method by saying that if the hour is smaller the the value of 22
        document.getElementById("Closing_Hours").innerHTML = "Welcome! We are open!";//Here we display our text according to what the "if" statement result is
    }
}

function Height_Function() {//Here is our function
    Height = document.getElementById("Height").value;//Here we use the document.getElementById method on our "Height" Id
    if (Height >= 140) {//Here is our "if" statement saying that if Height is bigger or equal to 140
        Ride = "You can ride the carousel on your own!";//Here we display the result by having our input higher or equal to the value of 140 displaying the <p> element result
    }
    else {//Here is our "else" statement
        Ride = "You need an adult to be able to ride!";//Here we state that if the input is smaller the 140 we display the result from this <p> element
    }
    document.getElementById("What_is_your_height?").innerHTML = Ride;//This displays our result according to the path taken by our input
}

function Time_function() {//Here is our function
    var Time = new Date().getHours();//Here we give our variable "Time" the value of the hour displayed using our Date().getHours() method 
    var Reply;//Here we have our variable called "Reply"
    if (Time < 12 == Time > 0) {//Here is our "if" statement, where we say that if variable is smaller then 12 and and bigger then 0 
        Reply = "It is morning time!";//Display the following result
    }
    else if (Time > 12 == Time < 18) {//Here is our "else if" statement, where we say that if variable "Time" is bigger then 12 or else if variable "Time" is smaller then 18 
        Reply = "It is the afternoon.";//Display the following result
    }
    else {
        Reply = "It is evening time.";//Here is our "else" statement that states that any other result that display the following statement
    }
    document.getElementById("Time_of_day").innerHTML = Reply;//This displays our result according to the path taken by our Date().getHours() method
}