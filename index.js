// var a=10;
// console.log(typeof a);
// console.log(a);

// var a= "Hello";
// console.log(typeof a);
// console.log(a);

// var a= null;
// console.log(typeof a);
// console.log(a);

// var a= null;
// console.log(typeof a);
// console.log(a);

// var num= 1000
// console.log(`the half of ${num} is ${num/2}`)
// let num=300  //SyntaxError: Identifier 'num' has already been declared

let l=100
l=200  //reinitlization
// console.log(l)


// "var" is function scoped if var is defined under function o/w it will be globle scoped.
// "let" is block scoped.
num=10;
// here var 'i' is global scoped
let j=1000;
for(var i=0;i<num;i++){//by interchanging "var" to "let" it will not be accessible outside the block.
    let j=200
    if(i%2 == 0){
       
        console.log(i);
    }
console.log("inner"+j);
}

console.log("outer"+j);
console.log(`the final value of i is =${i}`);
