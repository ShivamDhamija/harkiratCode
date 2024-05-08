/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/
function change(str){
  str2="";
  str=str.split('');
  str.forEach(element => {
    if(element>='a'&&element<='z')str2+=element;
    if(element>='A'&&element<='Z')str2+=element;
  });
  return str2;
}

function isPalindrome(str) {
  returnval =true;
  str=change(str);
  for(let i=0;i<str.length/2;i++){
    let a=str[i].toLowerCase();
    let b=str[str.length-i-1].toLowerCase();
    if(a!==b) returnval = false;
  }  
  return returnval;
}

module.exports = isPalindrome;
