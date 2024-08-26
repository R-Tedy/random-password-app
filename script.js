const passwordBox = document.getElementById('password');
const len = 13;

const upperCase = "QWERTYUIOPLKJHGFDSAZXCVBNM";
const lowerCase = "qwertyuioplkjhgfdsazxcvbnm";
const numbers = "1234567890";
const symbols = "!@#$%^&*()_-+={};/.,?|<>";

const allOptions = upperCase + lowerCase + numbers + symbols;

function passwordGenerator(){
  let password = "";
  while (password.length< len) {
    password += allOptions[Math.floor(Math.random() * allOptions.length)];
  }
  passwordBox.value = password;
  // console.log(passwordBox.value);
}

function copyPassword(){
  passwordBox.select();
  document.execCommand('copy');
}

