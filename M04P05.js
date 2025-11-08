// Problem Statement

// A palindrome is a word , phrase, ar sequence of characters that read the same backward as it does forward.

// Your task is to write a JavaScript function , isPalindrome(str), that takes a string str
// and returns true if the sting is a palindrome , and false otherwise.

// the function must work for complex phrases, not just single words . To do this, your function must:
// Be case-insensitive(i.e., 'R' is treated as the same as 'r').
// Ignore all non-alphanumeric  characters (i.e., spaces, punctuation like commas, colons, periods, etc.).

//? Input and output
//"A man, a plan, a canal: Panama"-> true
//"Level"=> true
//"car"=> false

const isPalindrome = (str) => {
  const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversed = normalized.split("").reverse().join("");
  if (reversed === normalized) {
    return true;
  }
  return false;
};
console.log(isPalindrome("car"));
