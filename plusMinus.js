//Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.

//example
arr = [-4, 3, -9, 0, 4, 1];
//ratios are 2:5, 2:5, and 1:5 (negative, positive, zero)
//print the decimal value of each fraction on a new line with 6 places after the decimal 
//0. 400000
//0.400000
//0.200000
ratio(arr); //function called here to see what's printed

function ratio(arr){
  //store the length of the array in a variable (var length = arr.length
  var length = arr.length;
  //declare counter variables
  var neg = 0;
  var pos =0;
  var zero=0;
  //loop through statement one index at a time
  for (var i = 0; i < length; i++){
    
    //if the number is negative, counter += 1, if number is positive, counter +=1 , also with zero
    if (arr[i] < 0){
      neg += 1;
    }
    else if (arr[i] > 0){
      pos += 1;
    }
    else if (arr[i] == 0){
      zero += 1;
    }
    
  }
  //after the negatives and positives and zeros are counted, divide the counters by the length of the array to a fixed   number of decimal places (.toFixed(6))
   //print the results
  console.log((neg / length).toFixed(6));
  console.log((pos / length).toFixed(6));
  console.log((zero / length).toFixed(6));
}