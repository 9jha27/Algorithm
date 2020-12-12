//Write a function called "same" which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same. 

//example:
same([1,2,2,3],[4,1,4,9]) // true
same([1,2,3, 2, 5], [4,4,9, 1, 11]) // returns false

function same(arr1, arr2){ //This is O(n^2)
  //if the length of the array is not the same, return false
  //loops through the first array
   //squares the first array elements
  //loops through the second array
    //if a square in the first array matches a square in the second array, remove that element from the second array
}

function same(arr1, arr2){ //This is (O(n)) because, no nested loops. Just one single loops for each.
  if(arr1.length !== arr2.length){
    return false;
  }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for (let val of arr1){ //loop through first array and count how many of each number there is
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1 //prints out the number of times a number occurs in array
  }
  console.log(frequencyCounter1)
  console.log(frequencyCounter2)
  for (let val of arr2){ //loop through second array and insert two frequencyCounter2
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }
  for (let key in frequencyCounter1){
    if(!(key ** 2 in frequencyCounter2)){ //is a squre of the key of the first object in the second object? if not, return false. if so, continue
      return false 
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]){ //is the value of the key in the object (the frequency) the same as the frequency in the other object? if not, return false
      return false
    }
  }
  
  return true
}

