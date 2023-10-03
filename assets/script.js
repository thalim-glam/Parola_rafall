// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength = "12";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var specialChar = "!@#$%^&*()~+-|_=";
var counter = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Generating Password
function generatePassword(){
  console.log("Checking Console working");

  var pass = "";
  var passwordLength = window.prompt("How many characters would you like your password to contain. \n Please choose a number between 8 and 128 that is divisable by 4");
  var lc = window.confirm("Do you want lowercase letters?");
  var uc = window.confirm("Do you want uppercase letters?");
  var num = window.confirm("Do you want numbers?");
  var special = window.confirm("Do you want special Characters?");

  for(var i = 0; i <= passwordLength; i++) 
  {
    if(lc){
      pass += lowerCase[Math.floor(Math.random() * lowerCase.length)];
      passwordLength --;
      console.log(passwordLength);
    }
    if(uc){
      pass += upperCase[Math.floor(Math.random() * upperCase.length)];
      passwordLength --;
      console.log(passwordLength);
    }
    if(num){
      pass += number[Math.floor(Math.random() * number.length)];
      passwordLength --;
      console.log(passwordLength);
    }
    if(special){
      pass += specialChar[Math.floor(Math.random() * specialChar.length)];
      passwordLength --;
      console.log(passwordLength);
    }
  }
  
  return pass;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
