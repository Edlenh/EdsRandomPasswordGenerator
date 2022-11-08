// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// set const variables. lower case, upper case, numbers, special characters
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbol = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~","#","'","(",")",":",";","=","@","[", "_","{","}"];
var lowerLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


//set up for loop to confirm character type 
//user must pass password length check first
//set password length. 

function generatePassword(){
let userInput = parseInt(prompt("Please set password length"))

let passwordLength = userInput

  //if user input does not satisfy length requirements prompt them to try again and provide window alert 
  if (passwordLength < 8 || passwordLength >128){
    window.alert("Password length must be at least 8 characters and no more than 128 characters");
    return "Try again"
    
  } 

  //if user input is not a number prompt them to try again and provide window alert
  if(isNaN(passwordLength)){
    window.alert("Please enter a number")
    return "Try again"
    
  }

  var includeLower = window.confirm("Include lowercase characters?")
  var includeUpper = window.confirm("Include uppcase characters?")
  var includeSymbol = window.confirm("Include special characters?")
  var includeNumber = window.confirm("Include numbers?")

 //set empty array for user password 
  
  var array =[]
 // prompts must pass if at least one character is being chosen
  if(includeLower === false && includeNumber === false && includeSymbol === false && includeUpper === false){
    window.alert("You must include at least one type of character")
    return 
  }

  if (includeLower === true) {
    array = array.concat(lowerLetter)
  } 
  
  if (includeUpper === true) {
    array = array.concat(upperLetter)
  } 
  
  
  if (includeNumber === true) {
    array = array.concat(number)
  } 
  
  if (includeSymbol === true) {
    array = array.concat(symbol)
  } 
  

  // Empty string to be filled based on for loop selecting random characters from the array
  var randomPassword = ""
  
  for (var i = 0; i < passwordLength; i++) {
    randomPassword = randomPassword + array[Math.floor(Math.random() * array.length)];
    console.log(randomPassword)
  }
  return randomPassword;
}
  
  


// Write password to the #password input



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
