// Assignment code here
var length = 0;
var lowercase = true;
var uppercase = true;
var number = true;
var specialcharacters = true;


var prompMsg1= prompt('Choose the length between 8 and 128.');
length = parseInt(prompMsg1);
var prompMsg2 = prompt('Would you like to include lowercase? (T/F)');
if (prompMsg2!="T") {
  lowercase = false; 
}
var prompMsg3 = prompt('Would you like to include uppercase? (T/F)');
if (prompMsg3!="T") {
  uppercase = false; 
}
var prompMsg4= prompt('Would you like to include number? (T/F)');
if (prompMsg4!="T") {
  number = false; 
}
var prompMsg5= prompt('Would you like to include special characters? (T/F)');
if (prompMsg5!="T") {
  specialcharacters = false; 
}

function generatePassword() {
  var characters = '';
  if (lowercase) {
    characters += 'abcdefghijklmnopqrstuvwxyz';
  }
  if (uppercase) {
    characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  if (number) {
    characters += '0123456789';
  }
  if (specialcharacters) {
    characters += '!@#$%^&*()_+-={}[]|:;"<>,.?/~`'
  }

  if (characters.length ==0) {
    console.log(alert('You have to include at least one character to create a password.'));
  }

  var password = '';

  for (var i=0; i<length; i++) {
    password += characters.charAt(Math.floor(Math.random()*length));
  }

  return password;
}

console.log(alert(generatePassword()));




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
