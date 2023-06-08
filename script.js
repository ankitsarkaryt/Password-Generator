// Function to generate a random password
function generatePassword() {
    var lowercase = 'abcdefghijklmnopqrstuvwxyz';
    var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var numbers = '0123456789';
    var specialChars = '!@#$%^&*()_+~`|}{[]\\:;?><,./-=';
    var allChars = lowercase + uppercase + numbers + specialChars;

    var passwordLength = getRandomInt(12, 32);

    var password = lowercase.charAt(getRandomInt(0, lowercase.length - 1));
    password += generateRandomChars(1, lowercase);
    password += generateRandomChars(1, uppercase);
    password += generateRandomChars(1, numbers);
    password += generateRandomChars(1, specialChars);

    while (password.length < passwordLength) {
        password += generateRandomChars(1, allChars);
    }

    password += uppercase.charAt(getRandomInt(0, uppercase.length - 1));

    document.getElementById("password").textContent = password;
}

// Function to generate random characters from a given set of characters
function generateRandomChars(count, chars) {
    var randomChars = '';
    for (var i = 0; i < count; i++) {
        var randomIndex = getRandomInt(0, chars.length - 1);
        randomChars += chars.charAt(randomIndex);
    }
    return randomChars;
}

// Function to generate a random integer between min and max (inclusive)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Copy generated password to clipboard
function copyToClipboard() {
    var password = document.getElementById("password").textContent;
    
    var textarea = document.createElement("textarea");
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    
    alert("Password copied to clipboard!");
}

// Event listeners for generate and copy buttons
document.getElementById("generateButton").addEventListener("click", generatePassword);
document.getElementById("copyButton").addEventListener("click", copyToClipboard);
