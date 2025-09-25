// Print numbers 1 to 5, each after 1 second gap (1 → wait → 2 → wait → …) using setTimeout.
// Print "Done!" after all numbers are printed (use nested setTimeout).


console.log(1)
console.log('Done')
setTimeout(()=>{
    console.log(2)
    console.log('Done')
    setTimeout(()=>{
        console.log(3)
        console.log('Done')
        setTimeout(()=>{
            console.log(4)
            console.log('Done')
            setTimeout(()=>{
                console.log(5)
                console.log('Done')
            },1000)
        },1000)
    },1000)
},1000)
