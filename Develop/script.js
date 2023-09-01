// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = ["a", "b", "c","d","e","f","g","h",
//set up function that generates password
var generatePassword = function(){

  //prompts user to enter desired number of characters
  var passwordLength = window.prompt("How many characters?")
  
  //if the user cancels, end function
  if(!passwordLength){
    return;
  }


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  //sets value of text area to the newly generated pw

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




//prompt for length - must be between 8 and 128 characters
//confirm for special characters, numbers, lowercase, uppercase
//need arrays for letters, numbers, special characters, associate with prompts and alerts, randomize all of them together by looping

//create generate pw function so that it randomizes arrays and shows prompts, alerts, etc

//don't include any characters, conditional that says we need to select at least one character type