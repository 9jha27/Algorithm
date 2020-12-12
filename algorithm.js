//Write a function which takes in a string and returns counts of each character in the string. 

//Step 1: Restate the problem
//Write a function that tells you how many letters are in the string. 

//Step 2: Examples of this problem

//charCount("aaaa"); // should return {a:4}
//charCount("hello"); // {h:1, e:1, l:2, o:1}

//"my phone number is 18282893" //do spaces count? dollar signs? 
//"Hello hi" //do we store an upper case AND lower case? should our object have just {h:2}? 
//charCount(''); // Do we return null? an empty object? an error? (invalid inputs)

//Step 3: Psuedocode / Break it Down
//charCount("Your PIN is 1234");
/*{
should return
1: 1,
2: 1,
3; 1,
4: 1,
y: 1,
o: 1,
u; 1,
r; 1,
p: 1, etc. 
}
*/
  
charCount("hello");
function charCount(str) {
  //make object to return at end
  var result = {};
  //loop over string, for each character...
  for(var i = 0; i < str.length; i++){
    var char = str[i].toLowerCase();
    //if the char is a number/letter AND in a key in object, add one to count
    if (/[a-z0-9]/.test(char)){
      if (result[char] > 0) {
        result[char]++;
      } 
      //if the char is a number/letter AND not in object, add it and set value to 1
      else {
        result[char] = 1;
      };
    }
    
  }    
  //return object at end
    return result;
} 

    