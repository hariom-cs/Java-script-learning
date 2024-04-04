console.log(a);//undefined
greet();
hello();//will error

var a=10;
function greet(){
    console.log("JavaScript is fun");
}

//function expressiion
var hello= function(){
    console.log("throw error");
}
// Hoisting in JavaScript refers to the process where the interpreter seemingly moves the declaration of functions, variables, classes, or imports to the top of their scope before executing the code.

