// Write a JavaScript program to print running time

let startTime = performance.now();

for(let i=0;i<100000;i++){
    Math.sqrt(i)
}

let endTime = performance.now();


console.log((endTime-startTime))
