// Write a JavaScript program to print student details who got highest marks, create objects using class  

var highest=0;
var details;
class Student{
    constructor(name,marks){
        this.name=name
        this.marks=marks
        if(highest<marks){
            highest=marks;
            details=name
        }
    }
}


var s1= new Student('Sriram',67);
var s2= new Student('Sanjay',97);
var s3= new Student('Ganesh',99);

console.log(`${details} got ${highest}`)



