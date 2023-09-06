// Assignment Code
var generateBtn = document.querySelector("#generate");

//create lowercase letters array
var lowerCase = ["a", "b", "c","d","e","f","g","h","i","j","k","l", "m",
"n","o","p","q","r","s","t","u","v", "w","x","y","z"];

//create uppercase letters array
var upperCase = ["A", "B", "C", "D","E","F","G","H","I","J","K","L",
"M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

//create symbols array
var symbols = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",
":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];

//create numbers array
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

//create empty string to put pw characters in
var pw = "";

//prompt user to enter desired number of characters
var passwordLength = window.prompt("How many characters?");

//validate that user entered a number - need to fix bug here
if(typeof passwordLength != "number"){
  window.alert("Password length must be a number between 8 and 128.")
  passwordLength = window.prompt("How many characters?");
};

//validate password length is between 8 and 128
if(passwordLength<8 || passwordLength>128){
  window.alert("Password must be between 8 and 128 characters in length")
  passwordLength = window.prompt("How many characters?");
};

//ask if user wants lowercase letters
var wantLowerCase = window.confirm("Do you want to use lowercase letters?");

//ask if user wants uppercase letters
var wantUpperCase = window.confirm("Do you want to use uppercase letters?")

//ask if user wants symbols
var wantSymbols = window.confirm("Do you want to use special characters?")

//ask if user wants numbers
var wantNumbers = window.confirm("Do you want to use numbers?")

//if they hit cancel on all character types, ask questions again
if(!wantLowerCase && !wantUpperCase && !wantSymbols && !wantNumbers){
  window.confirm("You must select at least one character type");
  passwordLength = window.prompt("How many characters?");
  wantLowerCase = window.confirm("Do you want to use lowercase letters?");
  wantSymbols = window.confirm("Do you want to use special characters?");
  wantNumbers = window.confirm("Do you want to use numbers?");
};

//set up function that generates password, runs when button is clicked
var generatePassword = function(){

  //loop until pw string length = passwordLength entered in prompt
  while(pw.length < passwordLength){

    //if user wants lowercase letters, add lowercase letters to pw string
    if(wantLowerCase){
      var lowerCaseIndex = Math.floor(Math.random() * lowerCase.length);
      var randomLowerCase = lowerCase[lowerCaseIndex];
      pw += randomLowerCase
    };

    //if user wants uppercase letters, add uppercase letters to pw string
    if(wantUpperCase){
      var upperCaseIndex = Math.floor(Math.random() * upperCase.length);
      var randomUpperCase = upperCase[upperCaseIndex];
      pw += randomUpperCase
    };
  
    //if user wants symbols, add symbols to pw string
    if(wantSymbols){
      var symbolsIndex = Math.floor(Math.random() * symbols.length);
      var randomSymbol = symbols[symbolsIndex];
      pw += randomSymbol
    };
  
    //if user wants numbers, add numbers to pw string
    if(wantNumbers){
      var numbersIndex = Math.floor(Math.random() * numbers.length);
      var randomNumber = numbers[numbersIndex];
      pw += randomNumber
    };

    //adds to pw variable
    pw.length++;
  };
  
  //function returns pw of desired length with selected characters added
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
