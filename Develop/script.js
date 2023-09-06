// Assignment Code
var generateBtn = document.querySelector("#generate");

//lowercase letter array
var lowerCase = ["a", "b", "c","d","e","f","g","h","i","j","k","l", "m",
"n","o","p","q","r","s","t","u","v", "w","x","y","z"];

//uppercase letter array
var upperCase = ["A", "B", "C", "D","E","F","G","H","I","J","K","L",
"M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

//symbols array
var symbols = [
"!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",
">","?","@","[", '\,', "]","^","_","`","{","|","}","~"];

//number array
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

//create empty array to put pw characters in
var pw = "";

//prompts user to enter desired number of characters
var passwordLength = window.prompt("How many characters?");

//validate password length is between 8 and 128
  if(passwordLength<8 || passwordLength>128){
    window.alert("password must be between 8 and 128 characters in length ")
    window.prompt("How many characters?");
    //how do I get it to replace the initial pw length?
  };

//ask if user wants lowercase
var wantLowerCase = window.confirm("Do you want to use lowercase letters?");

//ask user if they want uppercase letters
var wantUpperCase = window.confirm("do you want to use uppercase letters?")

//ask user if they want symbols
var wantSymbols = window.confirm("do you want to use special characters?")

//ask user if they want numbers
var wantNumbers = window.confirm("do you want to use Numbers?")

//set up function that generates password
var generatePassword = function(){
  // var length = pw.length;
  
  while(pw.length < passwordLength){

    //if user wants lowercase letters, add lowercase letters to array
    if(wantLowerCase){
      var lowerCaseIndex = Math.floor(Math.random() * lowerCase.length);
      var randomLowerCase = lowerCase[lowerCaseIndex];
      pw += randomLowerCase
    };

    //if user wants uppercase letters, add uppercase letters to passwordArray
    if(wantUpperCase){
      var upperCaseIndex = Math.floor(Math.random() * upperCase.length);
      var randomUpperCase = upperCase[upperCaseIndex];
      pw += randomUpperCase
    };
  
    //if user wants symbols, add symbols to array
    if(wantSymbols){
      var symbolsIndex = Math.floor(Math.random() * symbols.length);
      var randomSymbol = symbols[symbolsIndex];
      pw += randomSymbol
    };
  
  //if user wants numbers
    if(wantNumbers){
      var numbersIndex = Math.floor(Math.random() * numbers.length);
      var randomNumber = numbers[numbersIndex];
      pw += randomNumber
    };

  //if user declines all character types, tell them they must use at least one type
  if(!wantLowerCase && !wantUpperCase && !wantSymbols && !wantNumbers){
    window.confirm("You must select at least one character type");
    return;
  };

  pw.length++
  };
  
  return pw;

};




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  //sets value of text area to the newly generated pw

};



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




//prompt for length - must be between 8 and 128 characters
//confirm for special characters, numbers, lowercase, uppercase
//need arrays for letters, numbers, special characters, associate with prompts and alerts, randomize all of them together by looping

//create generate pw function so that it randomizes arrays and shows prompts, alerts, etc

//don't include any characters, conditional that says we need to select at least one character type