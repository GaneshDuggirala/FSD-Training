// 33.  Given an array of employee objects, each with name and salary properties, print the names 
// of employees in ascending order who earn more than a specified amount given by the user. 


const employees = [ 
{ name: 'lice', salary: 50000 }, 
{ name: 'Bob', salary: 60000 }, 
{ name: 'Charlie', salary: 40000 }, 
];

console.log(employees.sort((a,b)=> a.name.localeCompare(b.name)));
