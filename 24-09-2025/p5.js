// Print numbers 1 → 10 using setInterval, then stop.
var c=1;
var timer;
function prints(){
    if (c<=10){
        console.log(c);
        c++;
    }
    else{
        clearInterval(timer);
    }

}

timer = setInterval(prints,1000);