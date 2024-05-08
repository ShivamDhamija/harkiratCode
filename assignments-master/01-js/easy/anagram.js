/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1=str1.split("");
  str2=str2.split("");
 
  let a1={};
 let a2={};
 str1.forEach(element => {
  element=element.toLowerCase();
  if(element in a1)
    a1[element]+=1;
  else
    a1[element]=1;
 });
 str2.forEach(element => {
  element=element.toLowerCase();
  if(element in a2)
    a2[element]+=1;
  else
    a2[element]=1;
 });
 console.log(a1)
 console.log(a2)
 returnval=true;
 Object.keys(a1).forEach(function(key)
 {
  value =a1[key];
  if(key in a2)
    {
      if(a2[key]!==value)
      returnval= false
    }
  else
  returnval= false;
 });
 Object.keys(a2).forEach(function(key)
 {
  value =a2[key];
  if(key in a1)
    {
      if(a1[key]!==value)
      returnval= false
    }
  else
  returnval= false;
 });
 
 return returnval;
}

module.exports = isAnagram;
