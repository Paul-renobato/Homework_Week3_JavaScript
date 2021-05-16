
var generateBtn = document.querySelector("#generate");

var enterNumeric;
Numeric = [1,2,3,4,5,6,7,8,9];

var enterLetters;
Letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

var enterUppercase;
Uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

var enterSpecial; 
Special =  ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// use for the prompt when asking how long the password should be
var inputLength;
// choices the user makes
var input;

function writePassword() {
  inputLength = parseInt(prompt("How longs would you like your password? Between 8 and 128 Please."));
// 8-128
  if (inputLength <= 8 || inputLength >= 129);
// prompts for the 4 var
else {
enterNumeric = confirm("Will this contain numerics?");
enterLetters = confirm("Will this contain lower case letters");
enterUppercase = confirm("Will this contain upper case letters");
enterSpecial = confirm("Will this contain special letters");
};
// use all the combinations a user can make
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
}; 
// array var here don't forget
var inputPassword = [];
// loop for the random selector
for (var i = 0; i < inputLength; i++)
{var Inputs = input[Math.floor(Math.random() * input.length)];
inputPassword.push(Inputs);
}
// important for the input to show on text box
var asset = inputPassword.join("");

UserInput(asset);

return asset;

}
function UserInput(asset) {
  document.getElementById("password").textContent = asset;
}
// add event already here don't mess with
generateBtn.addEventListener("click", writePassword);