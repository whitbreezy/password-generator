// Assignment Code
var generateBtn = document.querySelector("#generate");

//lowercase letter array
var lowerCase = ["a", "b", "c","d","e","f","g","h","i","j","k","l", "m",
"n","o","p","q","r","s","t","u","v", "w","x","y","z"];

//uppercase letter array
var upperCase = lowerCase.toUpperCase();

//symbols array
var symbols = [
"!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",
">","?","@","[", '\,', "]","^","_","`","{","|","}","~"
];
//number array
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

//create empty array to put pw characters in
var passwordArray = [""]


//set up function that generates password
var generatePassword = function(){

  //prompts user to enter desired number of characters
  var passwordLength = window.prompt("How many characters?")
  
  //if the user cancels, end function
  if(!passwordLength){
    return;
  }
  //validate password length is between 8 and 128
  if(passwordLength<8 || passwordLength>128){
    window.alert("password must be between 8 and 128 characters in length ")
  }

  //if user enters a number between 8 and 128, set password array length to number entered
  // if(passwordLength>8 && passwordLength<128){
  //   passwordArray.length = passwordLength
  // } NOT SURE IF NEEDED SINCE USING WHILE LOOP^^^

  //ask user if they want to use lowercase letters
  var wantLowerCase = window.confirm("Do you want to use lowercase letters?")
  if(wantLowerCase){
    var lowerCaseIndex = Math.floor(Math.random() * lowerCase.length);
    var randomLowerCase = lowerCase[lowerCaseIndex];
    passwordArray.unshift(randomLowerCase)
  }

  //ask user if they want uppercase letters
  var wantUpperCase = window.confirm("do you want to use uppercase letters?")
  if(wantUpperCase){
    var upperCaseIndex = Math.floor(Math.random() * upperCase.length);
    var randomUpperCase = upperCase[upperCaseIndex];
    passwordArray.push(randomUpperCase)
  };
  
  //ask user if they want symbols
  var wantSymbols = window.confirm("do you want to use special characters?")
  if(wantSymbols){
    var symbolsIndex = Math.floor(Math.random() * symbols.length);
    var randomSymbol = symbols[symbolsIndex];
    passwordArray.push(randomSymbol)
  };
  
  //ask user if they want numbers
  var wantNumbers = window.confirm("do you want to use Numbers?")
  if(wantNumbers){
    var numbersIndex = Math.floor(Math.random() * numbers.length);
    var randomNumber = numbers[numbersIndex];
    passwordArray.push(randomNumber)
  };

  //add characters selected to end of password array
  while(passwordArray.length<passwordLength){
    passwordArray.push(randomLowerCase);
    passwordArray.push(randomUpperCase);
    passwordArray.push(randomSymbol);
    passwordArray.push(randomNumber)
  }
}


// while (passwordArray.length<password){
//   generatePassword;
// }
//how to get it to loop without prompting again





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