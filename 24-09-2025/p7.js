// Create a countdown timer (e.g., from 10 → 0).
var c=10
var timer;
function counter(){
    console.log(c)
    if (c<=0){
        clearInterval(timer)
    }
    c--
}

timer = setInterval(counter,1000)


