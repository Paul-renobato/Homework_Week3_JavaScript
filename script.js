// Assignment Code
var generateBtn = document.querySelector("#generate");
var enterLength;

var enterNumeric;
Numeric = [1,2,3,4,5,6,7,8,9];

var enterLetters;
Letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

var enterUppercase;
uppercaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

var enterSpecial; 
Special =  ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Write password to the #password input
function writePassword() {
  enterLength = parseInt(prompt("How longs would you like your password? Between 8 and 128 Please."));


  
  if (enterLength <= 8 || enterLength >= 128);

else {
enterNumeric = confirm("Will this contain numerics?");
enterLetters = confirm("Will this contain lower case letters");
enterUppercase = confirm("Will this contain upper case letters");
enterSpecial = confirm("Will this contain special letters");
};


var password = writePassword();
var passwordText = document.querySelector("#password");
passwordText.value = password;


}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);