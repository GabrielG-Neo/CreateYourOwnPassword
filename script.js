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


function generatePassword(thePassword = thePassword + passwordLetr[index]) {
  alert()
  var passwordLetr = [];
  var thePassword = [];
  

  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numeric = [1,2,3,4,5,6,7,8,9,0];
  var specialChar = ["!","#","$","%","&","*","<","=",">","?","@","[","]","{","}","~"]

  var passwordLength = prompt("Please choose charactors between 8 and 128.");
  var numericPassLength = parseInt(passwordLength);

    if (passwordLength < 8 || passwordLength > 128) {
      alert("Please choose a number between 8 and 128");
      return;
      
    }
    else {alert("Your password will be "+ numericPassLength +" charactors long")}
    
  var lowerCaseAns = confirm("Would you like LOWER CASE charactors?");
  var upperCaseAns = confirm("Would you like UPPER CASE charactors?");
  var numericAns = confirm("Would you like any NUMBERS?");
  var specialCharAns = confirm("Would you like any SPECIAL CHARACTORS?");

    if (!lowerCaseAns && !upperCaseAns && !numericAns && !specialCharAns) {
      alert("You must choose at least one charactor type.");
      return;
    }

    if (lowerCaseAns) {
      for( var i = 0; i < lowerCase.length; ++i) {
        passwordLetr.push(lowerCase[i]);
        console.log()
      }
    }

    if (upperCaseAns) {
      for (var i = 0; i < upperCase.length; i++) {
        passwordLetr.push(upperCase[i]);
        console.log()
      }
    }

    if (numericAns) {
      for (var i = 0; i < numeric.length; i++) {
        passwordLetr.push(numeric[i]);
        console.log()
      }
    }

    if (specialCharAns) {
      for ( i = 0; i < specialChar.length; i++) {
        passwordLetr.push(specialChar[i]);
        console.log()
      }
    }
    for (i = 0; i < numericPassLength; i++) {
      var index = Mathfloor(Math.random() + passwordLetr.length);
      
      }
    }
    
  
  