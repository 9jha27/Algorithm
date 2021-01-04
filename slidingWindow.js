//SLIDING WINDOW
//maxSubarraySum (max sum of two digits next to one another)
//longestUniqueCharacters

//create a window which can be an array or number from one position to another.
//move window from the left towards the end and increases/decreases depending on circumstance.

//Write a function called maxSubArraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array. 

//maxSubArraySum([1,2,5,2,8,1,5],2) //10
//maxSubArraySum([1,2,5,2,8,1,5],4) //17
//maxSubArraySum([],4) //null

//naive solution
//CONS: Bad for long array lengths
function maxSubArraySum(arr,num) {
  if ( num > arr.length){
    return null;
  }
  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++){
    temp = 0;
    for (let j = 0; j < num; j ++){
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

maxSubArraySum([2,6,9,2,1,8,5,6,3],3)

//O(n) solution - loops over only once! 
function maxSubArraySum(arr,num){
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i ++){ //create first sum and sum first three, then store in maxSum
    maxSum += arr[i];
  }
  tempSum = maxSum; //set maxSum and tempsum equal to each other
  for (let i = num; i < arr.length; i++){ 
    tempSum = tempSum - arr[i - num] + arr[i]; //tempSum is replaced by adding the next number in the array and subtracting the first number in the array. 
    maxSum = Math.max(maxSum, tempSum); //pick the max between the two variables. 
  }
  return maxSum;
}