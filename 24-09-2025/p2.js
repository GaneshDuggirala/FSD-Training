// Print numbers 1 to 5, each after 1 second gap (1 → wait → 2 → wait → …) using setTimeout.


// Method - 1

console.log(1)
setTimeout(()=>{
    console.log(2)
    setTimeout(()=>{
        console.log(3)
        setTimeout(()=>{
            console.log(4)
            setTimeout(()=>{
                console.log(5)
            },1000)
        },1000)
    },1000)
},1000)


// Method - 2


setTimeout(()=>{
    console.log(1)
},1000);
setTimeout(()=>{
    console.log(2)
},2000);
setTimeout(()=>{
    console.log(3)
},3000);
setTimeout(()=>{
    console.log(4)
},4000);
setTimeout(()=>{
    console.log(5)
},5000);


// Method - 3


for(let i=1; i<100 ; i++){
    setTimeout(()=>{
        console.log(i)
    },i*1000)
}


// Method - 4


// var num=parseInt(prompt("Enter number where to start printing"));
// var time=parseInt(prompt("Enter number where to end"));

// function times(i, n) {

//   setTimeout(() => {
//     if (n == i) {
//       console.log(n);
//       return;
//     }
//     console.log(n)
//     return times(i,n+1);
//   },1000);
// }

// times(time,num)
