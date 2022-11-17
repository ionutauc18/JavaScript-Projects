function Vote_Function() {//Here we have a function named Vote_Function
    var Age, Can_Vote;//Here we have two variables "Age" and "Can_Vote"
    Age = document.getElementById("Age").value;//Here we have our variable "Age" where we state the minimum age of voting
    Can_Vote = (Age < 18) ? "You are not old enough to vote":"You can vote!";//Here we have our second variable "Can_Vote" where we will decide if the user can vote based on the input
    document.getElementById("Vote").innerHTML = Can_Vote;//Code that gives us the final output
}

function Animal(Class, Color, Age, Weight) {//Here we have our object constructor "Animal"
    this.Animal_Class = Class;
    this.Animal_Color = Color;
    this.Animal_Age = Age;
    this.Animal_Weight = Weight;//Here we have our keywords that indicates the object that is the owner of the code 
}
var Lion = new Animal ("Mammalia", "dark brown", 15, "225 kg");//Here we have our variable "Lion" with its four values connected to our keywords 
function my_Function() {//Here we have our function "my_Function"
    document.getElementById("Object_Constructors").innerHTML = 
    "The Lion weighs around " + Lion.Animal_Weight + " has " + Lion.Animal_Color +
    " fur, lives about " + Lion.Animal_Age + " years " + " and it's part of the " + 
    Lion.Animal_Class + " class. ";//Here we have our piece of code that gives us our final output
}

function count_Function() {//Here we have our function "count_Function"
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {//Here we have our function "Count", that is the main function
        var Starting_point = 10;//Here we have our variable "Count" with an assigned value
        function Plus_eight() {Starting_point += 8;}//Here we have our nested function, which is a function within a main function, that are connected between each other
        Plus_eight();
        return Starting_point;//This would return us the the final output
    }
}