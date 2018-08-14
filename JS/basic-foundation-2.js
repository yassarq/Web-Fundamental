// 1st
/* 
*Biggie Size* - Given an array, write a function that changes 
all positive numbers in the array to "big".  
Example: makeItBig([-1,3,5,-5]) returns that same array, 
changed to [-1, "big", "big", -5].
*/
// function makeItBig(arr) {
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i] > 0){
//             arr[i] = 'big';
//         }
//     }
//     return arr;
// }
// console.log(makeItBig([-1,3,5,-5]));


// 2nd
/* 
*Print Low, Return High* - Create a function that takes array 
of numbers. The function should print the lowest value in the 
array, and return the highest value in the array.
*/
// function printAndReturn(arr) {
//     var max = arr[0];
//     var min = arr[0];
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i] < min){
//             min = arr[i];
//         }
//         if(arr[i] > max){
//             max = arr[i];
//         }
//     }
//     console.log(min);
//     return max;
// }
// console.log(printAndReturn([1,3,4,5]));


//3rd
/* 
*Print One, Return Another* - Build a function that takes 
array of numbers. The function should print second-to-last 
value in the array, and return *first odd* value in the array.
*/
// function returnFirstOdd(arr) {
//     console.log(arr[arr.length -2]);
//     for (var i = 0; i < arr.length; i++){
//         if(arr[i]%2 !== 0){
//             return arr[i];
//         }
//     }

// }
// console.log(returnFirstOdd([1,2,3,4]));


//4th
/* 
*Double Vision* - Given array, create a function to return a 
new array where each value in the original has been doubled.  
Calling double([1,2,3]) should return [2,4,6] without 
changing original.
*/
// function doubled(arr) {
//     var newArr = [];
//     for (var i = 0; i < arr.length; i++){
//         newArr.push(arr[i] * 2);
//     }
//     return newArr;
// }
// console.log(doubled([1,2,3]));


//5th
/*
*Count Positives* - Given array of numbers, create function 
to replace last value with number of positive values.  
Example, countPositives([-1,1,1,1]) changes array to 
[-1,1,1,3] and returns it. 
*/
// function countPositives(arr) {
//     var count = 0;
//     for (var i = 0; i < arr.length; i++){
//         if(arr[i] > 0){
//             count++;
//         }         
//     }
//     arr[arr.length-1] = count;
//     return arr;
// }
// console.log(countPositives([-1,1,1,1]));

//6th
/* 
*Evens and Odds* - Create a function that accepts an array.  
Every time that array has three odd values in a row, 
print "That's odd!".  Every time the array has three evens 
in a row, print "Even more so!" 
*/
// function evensOdds(arr) {
//     var odd_count = 0;
//     var even_count = 0;
//     for (var i = 0; i < arr.length; i++){
//         if(arr[i]%2 == 0) {
//             even_count ++;
//         }
//         if(arr[i]%2!=0){
//             odd_count ++;
//         }
//     }

//     if(even_count >= 3){
//         console.log("Even more so!");
//     }

//     if(odd_count >= 3){
//         console.log("That's odd!");
//     }

// }
// (evensOdds([1,2,2,2]));

// 7th ERROR, CHECK 
/* 
*Increment the Seconds* - Given an array of numbers arr, 
add 1 to every second element, specifically those whose 
index is odd (arr[1], [3], [5], etc). Afterward. 
console.log each array value and return arr.
*/
// function numArr(arr) {
//     //your code here
//     var odd_sum = [];
//     for (var i = 0; i < arr.length; i++) {
//         //check if index is odd
//         if (i % 2 !== 0) {
//             //add 1 to the value that the arr[index] provide
//             var value = arr[i] + 1;
//             odd_sum.push(value);
//             console.log(value);
//         }
//         else { odd_sum.push(arr[i]); console.log(arr[i]); }

//     }

//     return odd_sum;
// }
// numArr([66,22,33,44])


// 8th
/*
*Previous Lengths* - You are passed an array containing 
strings. Working within that same array, replace each string 
with a number - the length of the string at previous array 
index - and return the array.  For example, 
previousLengths(["hello", "dojo", "awesome"]) 
should return ["hello", 5, 4].
*/
// function previousLengths(arr) {
//     var newArr = [];
//     for(var i = 0; i < arr.length; i++){
//         if(i === 0){
//             newArr.push(arr[i]);
//         }
//         else{
//             var stringLength = arr[i-1].length;
//             newArr.push(stringLength);
//         }
//     }
//     return newArr;
// }
// console.log(previousLengths(["hello", "dojo", "awesome"]))


// 9th
/* 
*Add Seven to Most* - Build function that accepts array. 
Return a new array with all values except first, 
adding 7 to each. Do not alter the original array. 
*/
//    function addSeven (arr) {
//        var newArr = [];
//        for(var i = 0; i < arr.length; i++){
//         if(i === 0){
//             continue;
//         } 
//         else{
//             newArr.push(arr[i] + 7);
//         }
//        }
//        return newArr;
//    }
//    console.log(addSeven([66,22,33,44]))


// 10th
/* 
*Reverse Array* - Given an array, write a function that 
reverses values, in-place.  Example: reverse([3,1,6,4,2]) 
return same array, containing [2,4,6,1,3].  Do this without 
creating an empty temporary array.  (Hint: you'll need to 
swap values).
*/
// function reverseArray (arr) {
//   return arr.reverse();
// }
// console.log(reverseArray([66,22,33,44]))


// 11th REVIEW
/*
Outlook: Negative - Given an array, create and return a new 
one containing all the values of the provided array, made 
negative (not simply multiplied by -1). Given [1,-3,5], 
return [-1,-3,-5].
*/
// function outlookNegative(arr) {
//     var newArr = [];
//     for (var index = 0; index < arr.length; index++) {
//         if (arr[index] <= 0) {
//             newArr.push(arr[index]);
//         }
//         else {
//             newArr.push(arr[index] * -1);
//         }
//     }
//     return newArr;
// }
// console.log(outlookNegative([1, -3, 5]))


// 12th REVIEW
    /*
    *Always Hungry* - Create a function that accepts an array, 
    and prints "yummy" each time one of the values is equal to 
    "food".  If no array elements are "food", then print "I'm 
    hungry" once. 
    */
    // function alwaysHungry(arr) {
    //     for(var i = 0; i < arr.length; i++){
    //         if(arr[i] === "food"){
    //             console.log("yummy");
    //         }
    //     }

    //     if(!arr.includes("food")) {
    //     console.log("I\'m hungry");
    //     }
    // }
    // alwaysHungry([1,"food","food"]);


// 13TH
    /* 
    *Swap Toward the Center* - Given array, swap first and last, 
    third and third-to-last, etc.  Input[true,42,"Ada",2,"pizza"] 
    becomes ["pizza", 42, "Ada", 2, true].  Change [1,2,3,4,5,6] 
    to [6,2,4,3,5,1].
    */
//    function swapToCenter(arr) {
//        var temp1 = arr[0];
//        arr[0] = arr[arr.length-1]
//        arr[arr.lenght-1] = temp1
//        var temp2 = arr[arr.length-4];
//        arr[arr.length-4] = arr[arr.lenght-3]
//        arr[arr.lenght-3] = temp2
//        return arr;

//    }
//    console.log(swapToCenter([1,2,3,4,5,6]));


// 14th
    /* 
    *Scale the Array* - Given an array arr and a number num, 
    multiply all values in arr by num, and return the changed 
    array arr. For example, scaleArray([1,2,3],3) should return 
    [3,6,9].
    */
   function scaleArray(arr, num) {
       for(var i = 0; i < arr.length; i++){
           arr[i] = arr[i] * num
       }
       return arr;
   }
   console.log(scaleArray([1,2,3],3));



