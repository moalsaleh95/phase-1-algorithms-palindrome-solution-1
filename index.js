function isPalindrome(word) {
  // Write your algorithm here
  let splitArray = word.split('');
  let reverseArray = splitArray.reverse();
  let joinString = reverseArray.join('');
  return joinString === word
}

/* 
  Add your pseudocode here
  1- split the string into letters
  2- reverse the order of the letters
  3- join the letters back into one string
  4- check if this string is now the same as the initial string and return the result
*/

/*
  Add written explanation of your solution here
    1- split the string into letters
  2- reverse the order of the letters
  3- join the letters back into one string
  4- check if this string is now the same as the initial string and return the result
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("race car"));
}

module.exports = isPalindrome;
