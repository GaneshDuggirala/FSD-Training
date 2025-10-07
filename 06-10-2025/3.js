//  Write a JavaScript program to print sum of even numbers from given array 

let arr=[1,2,3,4,5,5,5,6,7,9];
let sum=0;
arr.forEach((i)=>{
    if (i%2==0){
        sum+=i
    }
});
console.log(sum)