//ANAGRAM
//Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
isAnagram("slytherin", "thylernis");

function isAnagram(str1, str2){
  //check if the lengths are the same, if not, return false
  if (str1.length !== str2.length){
    return false;
  }
  //if the same length, loop through each string, counting the frequency of letters in each object. 
  //create two objects to collect frequency of letters
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for (let val of str1){
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1; //the value of the letter key is the value of that letter key (or 0 if that letter hasn't appeared yet) plus 1.
     
  }
  for (let val of str2){
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  //then, check if the same letters are in each object
  for (let key in frequencyCounter1){
    if (!(key in frequencyCounter2)){
      return false;
    }
     //then, check if the same frequency of each letter is in both objects
    if (frequencyCounter1[key] !== frequencyCounter2[key]){
      return false;
    }
  }
 
  
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  return true;
  
  //if so, it is an anagram, if not, it is not. 
}
