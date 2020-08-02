// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
/**
 * 1. initialize
 * 2. length?
 * 3. check if length requirement acceptable? (8-28)
 * 4. include upper?
 * 5. include lower?
 * 6. include number?
 * 7. include special?
*** check if at least one character type?...where do i put this?
 */

passwordGen.reset();
passwordGen.userLength();
passwordGen.checkLength();
passwordGen.userLower();
passwordGen.userUpper();
passwordGen.userNumeric();
passwordGen.userSpecial();
passwordText.value = "";

return passwordGen.generatePassword();
};

var passwordGen = {
  //initialize
  passwordArray: [],
  length: 0,
  lowerCase: false,
  upperCase: false,
  numeric: false,
  special: false,

}

//array numbers
//array characters
//array special characters
//array uppcase
//array lowercase


// //userLength - get length of password from user
// getLength: function(){

// };

// //userLower - lower case characters in password
// genLower: function(){

// };

// //userUpper - upper case characters in password
// genUpper: function(){

// };

// //userNumeric - include numbers in password
// genNumeric: function(){

// };

// //userSpecial - include special characters in password
// genSpecial: function(){

// };

// //genPassword - generate the password
// genPassword: function(){

// };