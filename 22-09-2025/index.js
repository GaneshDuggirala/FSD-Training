// var arr = [1,2,3,4,5,6,7];



// console.log(arr);
// var k=3;
// var newarr=arr.slice(-3);
// var l=arr.length-k
// var firstarr=arr.slice(0,l)
// for(let i=0;i<firstarr.length;i++){
//     newarr.push(firstarr[i])
// }
// console.log(newarr);



// Find longest consecutive sequence


// var arr = [100,4,200,1,3,2];

// arr.sort((a,b)=>(a-b));

// var newarr=[];

// var i=0;
// var c=0;
// while(i<arr.length){
//     if ((arr[i]+1) == arr[i+1]){
//         c+=1
//     }
//     else{
//         newarr.push(c);
//         c=0
//     }
//     i++;
// }
// newarr.sort((a,b)=>a-b)
// console.log(newarr[newarr.length - 1]+1);







// function longest(arr) {
// arr.sort((a,b)=>(a-b));

// var newarr=[];

// var i=0;
// var c=0;
// while(i<arr.length){
//     if ((arr[i]+1) == arr[i+1]){
//         c+=1
//     }
//     else{
//         newarr.push(c);
//         c=0
//     }
//     i++;
// }
// newarr.sort((a,b)=>a-b)
// console.log(newarr[newarr.length - 1]+1);

// }

// longest([100,4,200,1,3,2])
// longest([1,9,3,10,4,20,2])
// longest([5,6,7,1,2,8,100])
// longest([10,11,12,13,14,15])
// longest([1,3,5,7,9])


// var arr = [1, 2, 3, 4];
// var farr = [];

// var p2 = 0;

// while (p2 < arr.length) {
//     var p1 = p2;
//     var newarr = [];

//     while (p1 < arr.length) {
//         newarr.push(arr[p1]);
//         console.log(newarr)
//         farr.push(newarr.slice()); 
//         p1++;
//     }

//     p2++;
// }

// console.log(farr);