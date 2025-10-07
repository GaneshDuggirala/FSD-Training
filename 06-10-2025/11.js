//  Write a JavaScript program to remove duplicate elements from an array without printing atleast one time. 

var arr=[1,2,2,3,4,5,6,6]

var obj = {}

for(let i of arr){
    if(!obj[i]){
        obj[i]=1
    }
    else{
        obj[i]+=1
    }
}

for(let j in obj){
    if(obj[j]==1){
        console.log(j)
    }
}