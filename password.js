var lowerArr = 'abcdefghijklmnopqrstuvwxyz';
var upperArr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numArr = "0123456789";
var specArr = "#$%&()*+-/:;<=>?@[^_{|}~";
var password = "";
var passwordBank = "";

var passwordBox = document.getElementById("password");
var genButton = document.querySelector('#generate');



function generatePassword() {
    var upperChar = false;
    var lowerChar = false;
    var specialChar = false;
    var numChar = false;
    // passwordBox.value = "";
    var passLength = prompt("Enter your password length");
    console.log("test");
    while (upperChar === false && lowerChar === false && numChar === false && specialChar === false) {

        var upperChar = confirm("Would you like uppercase letters?");
        var lowerChar = confirm("Would you like lowercase letters?");
        var specialChar = confirm("Would you like special characters?");
        var numChar = confirm("Would you like numbers?");
    }
    while (parseInt(passLength) < 8 || parseInt(passLength) > 128) {
        var passLength = prompt("Please select a password length between 8 - 128 characters");
    }
    if (upperChar === true) {
        passwordBank += upperArr;
    }
    if (lowerChar === true) {
        passwordBank += lowerArr;
    }
    if (numChar === true) {
        passwordBank += numArr;
    }
    if (specialChar === true) {
        passwordBank += specArr;
    }

    for (i = 0; i < passLength; i++) {
        password = password + passwordBank.charAt(Math.floor((Math.random() * passwordBank.length) + 1));
    }


    passwordBox.value = password;
}
genButton.onclick = function() {
    passwordBox.value = "";
    generatePassword();
};


// genButton.addEventListener('click', generatePassword);