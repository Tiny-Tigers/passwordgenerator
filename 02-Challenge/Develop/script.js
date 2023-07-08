// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCaseLetters = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ]
var upperCaseLetters = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ]
var specialCharacters = [ " ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "`", "{", "|", "}", "~" ]
var numberChar = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "0" ]

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

  // create empty variables
  var selectedCharactersArray = []
  var password = ""

  // prompt for lowercase,  if true add lowercase array to selected characters
  var lowerCase = window.confirm("Lower case?")
  if (lowerCase) {
    selectedCharactersArray.push(lowerCaseLetters)
    console.log(selectedCharactersArray)
  }
  // // prompt for uppercase,  if true add array to selected characters
  var upperCase = window.confirm("Upper case?")
  if (upperCase) {
    selectedCharactersArray.push(upperCaseLetters)
    console.log(selectedCharactersArray)
  }
  // prompt for special characters,  if true add array to selected characters
  var specialChar = window.confirm("Special characters?")  
  if (specialChar) {
    selectedCharactersArray.push(specialCharacters)
    console.log(selectedCharactersArray)
  }
// prompt for numbers,  if true add array to selected characters
  var number = window.confirm("Numbers?")
  if (number) {
    selectedCharactersArray.push(numberChar)
    console.log(selectedCharactersArray)
  }
  // make sure at least 1 was chosen
  if (selectedCharactersArray.length == 0){
    return alert("Password must contain at least 1 type of character.")
  }

  // randomize selected arrays, and randomize selcted array values
  for (var i = 0; i < passwordLength; i++ ){

    var randomNumber = getRandomNumber(0, selectedCharactersArray.length - 1);
    var randomArray = selectedCharactersArray[randomNumber]
    console.log("loop number " + i + ", selected array " + randomArray)

  }

  // for (var i = 0; i < passwordLength; i++ ){
  //   var num = getRandomNumber(0, 25)
  //   password = password+lowerCaseLetters[num]
  // }

  return password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
