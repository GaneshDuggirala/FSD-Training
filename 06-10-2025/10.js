// write a JavaScript program to check given string is palindrome or not

var str='Maddam'
str=str.toLowerCase();
var p1=0
var p2=str.length - 1
var b = false;
if(str.length%2!=0){
    while(p1!=p2){
        if(str[p1]==str[p2]){
            p1+=1
            p2-=1
            b=true
        }
        else{
            b=false
            break
        }
    }
}
else{
    while(p1<p2){
        if(str[p1]==str[p2]){
            p1+=1
            p2-=1
            b=true
        }
        else{
            b=false
            break
        }
    }
}

if(b){
    console.log('String is palindrome')
}
else{
    console.log('String is not palindrome')
}