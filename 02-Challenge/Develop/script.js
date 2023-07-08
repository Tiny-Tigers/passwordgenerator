// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCaseLetters = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ]
var upperCaseLetters = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ]
var specialCharacters = [ " ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "`", "{", "|", "}", "~" ]

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function getRandomNumber(min, max){
  var random = Math.floor(Math.random() * (max - min + 1) + min)
  return random
}

function generatePassword(){
  var passwordLength = window.prompt("Password Lenth")
  if (passwordLength < 8 || passwordLength > 128){
    return alert("Password Must be at least 8 characters and no more than 128 characters.")
  }
  var lowerCase = window.confirm("Lower case?")
  var upperCase = window.confirm("Upper case?")
  var specialChar = window.confirm("Special characters?")  
  var number = window.confirm("Numbers?")
  if (!lowerCase && !upperCase && !specialChar && !number){
    password = "Please try again."
    return alert("Password must contain at least 1 type of character.")
  }
  console.log(passwordLength)
  console.log(lowerCase)
  var password =""

  for (var i = 0; i < passwordLength; i++ ){
    var num = getRandomNumber(0, 25)
  password = password+lowerCaseLetters[num]
}

return password
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
