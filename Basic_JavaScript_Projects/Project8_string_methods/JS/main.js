function full_Sentence() {//Here is our function
    var part_1 = "This is ";//This is the first variable
    var part_2 = "my first time ";//Second variable
    var part_3 = "concatinating ";//Third variable
    var part_4 = "a sentence. ";//Fourth variable
    var whole_sentence = part_1.concat(part_2, part_3, part_4);//Using .concat Method we are concatineting our four variables in to a sentence
    document.getElementById("Concatenate").innerHTML = whole_sentence;//This displays the final result
 }

 function slice_Method() {//This is our function
    var Sentence = "I am gonna cut the word strawberry from this sentence.";//Here we have our variable "Sentence"
    var Section = Sentence.slice(24,35);//Here we use the .slice Method on our variable "Sentence"
    document.getElementById("Slice").innerHTML = Section;//This displays the final result
 }

 function uppercase_Method() {//Here is our function
    let text = document.getElementById("Uppercase").innerHTML;//This selects the <p> element text from our HTML file
    document.getElementById("Uppercase").innerHTML = text.toUpperCase();//Using the .toUpperCase we will change the lowercases in to uppercase letters and display the result
 }

 function search_Method() {//Here we have our function
 let text = "Where is the first occurance of number seven in this sentence?";//This is our variable "text" 
 let position = text.search("seven");//Using the .search Method we will find the position of "seven" 
 document.getElementById("Search").innerHTML = position;//This will display our result
 }

 function string_Method() {//Here is our function
    var Z = 64;//Here we have our variable "Z" with a value of 64
    document.getElementById("Number").innerHTML = Z.toString();//Using .toString Method this will return our variable as a string 
 }

 function precision_Method() {//Here is our function
    var Y = 453886.5363;//Here we have our variable "Y"
    document.getElementById("Precision").innerHTML = Y.toPrecision(7);//Using the .toPrecision Method this will return our variable "Y" value to a specified lenght
 }

function fixed_Method() {//Here is our function
    var X = 6.6473;//Here is our variable "X"
    document.getElementById("Fixed").innerHTML = X.toFixed();//Using .toFixed Method this will return our number rounded 
}

function value_Method() {//Here is our function
    var a = 18;//Here we have our variable "a"
    document.getElementById("Value").innerHTML = a.valueOf();//Using .valueOf Method this returns the primitive value of our number
}

