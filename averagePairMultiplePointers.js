//Write a function called averagePair. Given a sorted array of integers and a target average, determine if tehre is a pair of values in the array where the average of the pari equals the target average. Tehre may be more than one pair that matches the average target. 
function averagePair(arr, avg){
  // add whatever parameters you deem necessary - good luck!
  //have one pointer for arr[0], one for arr[1]
  let left = 0;
  let right = arr.length-1;
  //while the left pointer is less than the right pointer
  while(left < right){
    //if the average array value of the left and right pointer indexes is the avg, return true;
    if((arr[left] + arr[right])/2 == avg){
      return true;
    }//else if the average of the pair is greater than the average, increment one less for the right pointer (since this must mean that the largest number is too large)
    else if ((arr[left] + arr[right])/2 > avg){
      right--;
    }
    //else, increment the left pointer
    else {left++};
  }
  return false;
}

averagePair([1,2,3],2.5) //true
averagePair([1,3,3,5,6,7,10,12,19], 8) //true
averagePair([-1,0,3,4,5,6],4.1) //false
averagePair([],4) //false

