function my_Dictionary() {//Here we have a function called my_Dictionary
    var Car = {//Here we have a variable called "Car" that represents an "object" 
        Type:"Racing",
        Color:"Red",
        Engine:"V8",
        Speed:200,
        Sound:"Vrooom!"
    };//Here we added different attributes to the variable "Car" that would make it behave like a real-life car
    document.getElementById("Dictionary").innerHTML = Car.Sound;//Code that gives us the output of:Vrooom!
}

function my_Undefined() {//Here we have a function called my_Dictionary
    var Car = {//Here we have a variable called "Car" that represents an "object" 
        Type:"Racing",
        Color:"Red",
        Engine:"V8",
        Speed:200,
        Sound:"Vrooom!"
    };//Here we added different attributes to the variable "Car" that would make it behave like a real-life car
    delete Car.Sound;//Deletes the output from Car.Sound and makes the result as "undefined"
    document.getElementById("Undefined").innerHTML = Car.Sound;//Code that gives us the output of:Vrooom!
}