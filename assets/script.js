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
// Generating Password Function

function generatePassword(){

  var pass = "";
  var passwordLength = window.prompt("How many characters would you like your password to contain. \n Please choose a number between 8 and 128.");
  var lc = window.confirm("Do you want lowercase letters?");
  var uc = window.confirm("Do you want uppercase letters?");
  var num = window.confirm("Do you want numbers?");
  var special = window.confirm("Do you want special Characters?");

  if(passwordLength>=8 && passwordLength<=128 ){
    counter = passwordLength;
    console.log("counter value is: " + counter);
    for(var i = 0; i < counter || counter > 0; i++) 
    {
      if(lc){
        pass += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        counter --;
        if (counter == 0) { break; }
        console.log("lower + Counter =" + counter);
      }
      
      if(uc){
        pass += upperCase[Math.floor(Math.random() * upperCase.length)];
        counter --;
        if (counter == 0) { break; }
        console.log("upper + Counter =" + counter);
      }
      if(num){
        pass += number[Math.floor(Math.random() * number.length)];
        counter --;
        if (counter == 0) { break; }
        console.log("number + Counter =" + counter);
      }
      if(special){
        pass += specialChar[Math.floor(Math.random() * specialChar.length)];
        counter --;
        if (counter == 0) { break; }
        console.log("Special + Counter =" + counter);
      }
      else if(!num && !lc && !uc && !special){
        return "You must select at least one type of character.";
      }
    }
  }
  else{
    return "The Password must contain atleast 8 or at most 128 character";
  }
  
  return pass;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
