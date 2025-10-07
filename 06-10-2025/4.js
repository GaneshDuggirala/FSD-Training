// Write a JavaScript program to count number of duplicates elements of an array 

let arr=[1,2,2,3,4,5,6,7,5];
let obj={}
let c=0;
for(let i of arr){
    if(!obj[i]){
        obj[i]=true
    }
    else{
        c+=1
    }
}

console.log(c)