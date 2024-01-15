// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
let characterLength;
let characterTypeLower;
let characterTypeUpper;
let characterTypeNumeric;
let characterTypeSpecial;

// Function to prompt user for password options
function getPasswordOptions() {
  characterLength = prompt("Password length must be atleast 8 characters, How many characters do you require?");

  if (isNaN(characterLength)) {
    alert('Input must be a number');
    return false;
  }

  if (characterLength < 8 || characterLength > 128) {
    alert('Please enter a value between 8 and 128');
    return false;
  }

  characterTypeLower = confirm('Do you want to include Lowercase characters')
  characterTypeUpper = confirm('Do you want to include Uppercase characters')
  characterTypeNumeric = confirm('Do you want to include Numeric characters')
  characterTypeSpecial = confirm('Do you want to include Special characters')
  if (characterTypeLower == false && characterTypeUpper == false && characterTypeNumeric == false && characterTypeSpecial == false) {

    alert('You have to pick an option')
    return false;
  }
  return true
}

// Function for getting a random element from an array
function getRandomElement(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];

}


// Function to generate password with user input
function generatePassword() {
  var run = getPasswordOptions();
  if (run == false) {
    return "Please try again"
  }
  console.log(run);
  console.log(characterLength);
  console.log(characterTypeLower);
  console.log(characterTypeUpper);
  console.log(characterTypeNumeric);
  console.log(characterTypeSpecial);

  var plusibleCharacters = []
  var password = ''
  if (characterTypeLower === true) {
    plusibleCharacters = plusibleCharacters.concat(lowerCasedCharacters)
  }
  if (characterTypeUpper === true) {
    plusibleCharacters = plusibleCharacters.concat(upperCasedCharacters)
  }
  if (characterTypeNumeric === true) {
    plusibleCharacters = plusibleCharacters.concat(numericCharacters)
  }
  if (characterTypeSpecial === true) {
    plusibleCharacters = plusibleCharacters.concat(specialCharacters)
  }
  console.log("This is plusible characters ", plusibleCharacters);

  for (let index = 0; index < characterLength; index++) {
    password += getRandomElement(plusibleCharacters);
  }
  return password;

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);