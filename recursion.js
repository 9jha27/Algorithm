//HOW RECURSIVE FUNCTIONS WORK

//invoke the same function with a different inputuntil you reach your base case! 
  //base case: where the recursion stops; condition when the recursion ends. 
//TWO ESSENTIAL PARTS OF RECURSIVE FUNCTIONS:
  //1. base case (where recursion stops)
  //2. different input when checking 

//OUR FIRST REECURSIVE FUNCTION
function countDown(num) {
  if(num <= 0){
    console.log("All done!");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}
//print 3
//countDown(2)
//print 2
//countDown(1)
//print 1
//countdown(0)
//base case is countDown(0)
countDown(3)

//OUR SECOND RECURSIVE FUNCTION
function sumRange(num) {
  if(num===1) return 1; //this is the base case
  return num + sumRange(num-1);
}
sumRange(3)
  //return 3 + sumRange(3-1);
                //return 2 + sumRange(2-1);
                              //return 1; === base case.
  //3 + 2 + 1 = 6; 

//can you spot the base case?
  //when the number equals 1
//do you notice the different input(recursive call)? 
  //sumRange(num-1)
//what would happen if we didn't return? 
  //nothing...? 

//OUR THIRD RECURSIVE FUNCTION 
  //-- Writing Factorial Iteratively (non-recursive)
//function factorial(num){
//  let total = 1;
//  for (let i = num; i > 0; i--){
//    total*= i;
//  }
//  return total;
//}
//factorial(4)
  //-- Writing Factorial Recursively
    //what is the base case? 
function factorial(num){
  if (num === 1) return 1;
  return num * factorial(num-1);
}
//factorial(4)
  //return 4 * factorial(3);
            //return 3 * factorial(2);
                        //return 2 * factorial(1);
                                    //return 1; 
factorial(4)

//common recursion pitfalls:
  //no base case or incorrect base case

//HELPER METHOD REECURSION
  //two functions - outer and inner(recursive) function

//function collectOddValues(arr){
//  let result = [];
  
//  function helper(helperInput){
//    if(helperInput.length === 0){
 //     return;
 //   }
    
 //   if(helperInput[0] % 2 !== 0){
 //     result.push(helperInput[0])
 //   }
    
//    helper(helperInput.slice(1))
//  }
  
//  helper(arr)
  
//  return result; 
// }

//PURE RECURSION METHOD
collectOddValues([1,2,3,4,5,6,7,8,9])

function collectOddValues(arr){
  let newArr = [];
  
  if(arr.length === 0){
    return newArr;
  }
  
  if(arr[0] % 2 !== 0){
    newArr.push(arr[0]);
  }
  
  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}  
//[1].concat(collectOddValues([2,3,4,5]))
            //return [].concat(collectOddValues([3,4,5]))
                        //return [3].concat(collectOddValues([4,5]))
                                      //return [].concat(collectOddValues([5]))
                                                  //return [5].concat(collectOddValues([]))
                                      //[5]
                        //[3,5]
            //[3,5]
//[1,3,5]