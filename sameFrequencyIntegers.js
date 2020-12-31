//Write a function called sameFrequency. given Two positive integers, find out if the two numbers have the same frequnecy of digits. 

//example:
// sameFrequency(182, 281) //true
// sameFrequency(34, 14) //false
// sameFrequency(3589578, 5879385) // true
sameFrequency(22, 222) //false

function sameFrequency(int1, int2) {
  //convert integer to string
  var num1 = int1.toString();
  var num2 = int2.toString();

  //if the lengths are not the same, they are already not the same
  if (num1.length !== num2.length){return false;}
  
  //create a frequency counter map
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}

  for (let num of num1){
    frequencyCounter1[num] = (frequencyCounter1[num] || 0) + 1;
    console.log(frequencyCounter1)
  }
  for (let num of num2){
    frequencyCounter2[num] = (frequencyCounter2[num] || 0) + 1;
    console.log(frequencyCounter2)
  }

  for (let key in frequencyCounter1){
    if (frequencyCounter1[key] !== frequencyCounter2[key]){
      return false;
    }else {
      return true;
    }
  }

}