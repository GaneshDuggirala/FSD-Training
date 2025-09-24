// 31. Given an array of objects representing students, use the map method to create a new array 
// of objects where each object has an additional property isAdult that is true if the student's age 
// is 18 or above, and false otherwise. 
// students = [ 
// { name: 'John', age: 17 }, 
// { name: 'Jane', age: 19 }, 
// { name: 'Jack', age: 18 }, 
// ]; 
// output :  
// [ 
// { name: 'John', age: 17, isAdult: false }, 
// { name: 'Jane', age: 18, isAdult: true }, 
// { name: 'Jack', age: 19, isAdult: true } 
// ]


students = [ 
{ name: 'John', age: 17 }, 
{ name: 'Jane', age: 19 }, 
{ name: 'Jack', age: 18 }, 
];

students.map((i)=>{
    if (i.age >= 18) {
        i['isAdult']=true;
    }
    else{
        i['isAdult']=false;
    }
});

console.log(students)