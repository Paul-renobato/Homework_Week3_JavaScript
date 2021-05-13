// Assignment Code
var generateBtn = document.querySelector("#generate");

var enterNumeric;
Numeric = [1,2,3,4,5,6,7,8,9];

var enterLetters;
Letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]






// Write password to the #password input
var user;
function writePassword() {
  user = parseInt(prompt("how much letters will be in the generated password?"))
}if (user){alert(enter < 8 || enter > 128)
  {
  enterNumeric = confirm("will this password have numbers?");
}
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

