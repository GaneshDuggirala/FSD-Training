// Write a function greet(name, callback) where:

// greet("Ganesh", sayHello) calls the callback and prints "Hello, Ganesh".


function greet(name,hello){
    return "Hello "+hello(name);
}



function sayHello(name){
    return name
}



console.log(greet("Ganesh", sayHello));
