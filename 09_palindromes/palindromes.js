const palindromes = function (string) {
    let reverseString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
    return reverseString.split("").reverse().join("") == reverseString;
};

// Do not edit below this line
module.exports = palindromes;
