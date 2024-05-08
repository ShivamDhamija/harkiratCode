/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let array = ['a', 'e', 'i', 'o', 'u'];
    str =str.split("");
    //console.log(str);
    let ans = 0;
    str.forEach(element => {
      element =element.toLowerCase();
      if(array.includes(element))
      {ans+=1;}
    });
    return ans;
} 

module.exports = countVowels;