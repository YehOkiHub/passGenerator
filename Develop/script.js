// Assignment Code
var generateBtn = document.querySelector("#generate");


const lowerArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
const upperArray = lowerArray.map(x => x.toUpperCase())
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specCharArray = [
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~"
];
// console.log(specCharArray)

function writePassword() {
  
  password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  function generatePassword() {
    
    let passArray = [];
    let password = ""

    // Password conditions prompt
    let passLength = prompt("Choose the length of password between 8 and 128");
    if (passLength < 8 || passLength > 128){      

      alert("You must choose an integer and it must be between 8 and 128!")
      generatePassword()
      
    }

    let lowercase = confirm("Do you want lowercase letters?");
    if (lowercase == true) {
      passArray = passArray.concat(lowerArray);
    } 

    let uppercase = confirm("Do you want uppercase letters");
    if (uppercase == true) {
      passArray = passArray.concat(upperArray);
    }

    let numbers = confirm("Do you want numbers?");
    if (numbers == true) {
      passArray = passArray.concat(numbersArray);
    }

    let specialChar = confirm("Do you want special characters");
    if (specialChar == true) {
      passArray = passArray.concat(specCharArray);
    } 

    if(lowercase == false && uppercase == false && specialChar == false && numbers == false){
      console.log("You must choose either a character or number or symbol!")
    }

    for(i=0; i < passLength; i++){
      randChar =  passArray[Math.floor(Math.random() * passArray.length)]
            
      password += randChar
           
     }
     return password
     
    
   
  }
  
  
}



// Write password to the #password input

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
