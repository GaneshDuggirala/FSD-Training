//  Write a JavaScript program to create array of even numbers from give array  

let arr=[1,2,3,4,5,6,7,8,9,10,11,12];

let newArr=arr.filter(i => {
    if(i%2==0){
        return i
    }
});

console.log(newArr)