// Write a JavaScript program to find the second largest element in an array. 

var arr =[1,2,3,4,5,6,7,78,99,8,8]

arr.sort((a,b)=>a-b)
console.log(`Second largest Element is ${arr[arr.length-2]}`)