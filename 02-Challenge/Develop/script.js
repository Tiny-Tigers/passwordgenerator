// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCaseLetters = ["a", "b", "c", "d"]
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



function generatePassword(){
  var passwordLength = window.prompt("Password Lenth")
  var lowerCase = window.confirm("Lower case?")
  
console.log(passwordLength)
console.log(lowerCase)
var password =""
for (var i = 0; i < passwordLength; i++ ){
password = password+lowerCaseLetters[i]
}

return password
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
