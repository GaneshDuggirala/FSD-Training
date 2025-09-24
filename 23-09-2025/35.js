// 35. Write a function that takes an object and a list of keys, and returns a new object that only 
// contains the properties from the list of keys. 


const obj = { a: 1, b: 2, c: 3, d: 4 }; 

const keys = ['b', 'c'];

var newobj={}

for(let k of keys){
    // let ex= obj[k]
    newobj[k]=obj[k];
}

console.log(newobj);