// write a JavaScript program to print difference between biggest and smallest number of an array

let arr=[11,9,3,1,5,6];

let max=arr.reduce((a,b)=>(a>b?a:b))

let min=arr.reduce((a,b)=>(a<b?a:b))

console.log(max-min);