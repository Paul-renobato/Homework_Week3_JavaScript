// Assignment Code
var generateBtn = document.querySelector("#generate");
var enterLength;

var enterNumeric;
Numeric = [1,2,3,4,5,6,7,8,9];

var enterLetters;
Letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

var enterUppercase;
Uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

var enterSpecial; 
Special =  ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

var input;
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
if (enterNumeric && enterLetters && enterUppercase && enterSpecial){
  input = Numeric.concat(Letters, Uppercase, Special);
}
else if (enterNumeric && enterLetters && enterUppercase) {
  input = Numeric.concat(Letters, Uppercase);
}
else if (enterNumeric && enterLetters && enterSpecial) {
  input = Numeric.concat(Letters, Special);
}
else if (enterNumeric && enterUppercase && enterSpecial) {
  input = Numeric.concat(Uppercase, Special);
}
else if (enterLetters && enterUppercase && enterSpecial) {
  input = Letters.concat(Uppercase, Special);
}
else if (enterNumeric && enterLetters) {
  input = Numeric.concat(Letters);

} else if (enterNumeric && enterUppercase) {
  input = Numeric.concat(Uppercase);

} else if (enterNumeric && enterSpecial) {
  input = Numeric.concat(Special);
}
else if (enterLetters && enterUppercase) {
  input = Letters.concat(Uppercase);

} else if (enterSpecial && enterLetters) {
  input = Special.concat(Letters);

} else if (enterUppercase && enterSpecial) {
  input = Uppercase.concat(Special);
}   
else if (enterNumeric) {
  input = Numeric;
}
else if (enterLetters) {
  input = Letters;
}
else if (enterUppercase) {
  input = Uppercase;
}
else if (enterSpecial) {
  input = Special;
}





var password = writePassword();
var passwordText = document.querySelector("#password");
passwordText.value = password;


}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);