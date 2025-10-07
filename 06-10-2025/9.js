// write a JavaScript program to check given number is palindrome number or not

var num=1234554321
var copyNum=num
var str='';
while(num>0){
    str+=num%10;
    num=Math.floor(num/10)
}
if(copyNum === parseInt(str)){
    console.log('Number is palindrome')
}
else{
    console.log('Number is not palindrome')
}
