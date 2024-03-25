// function calculator(str, a, b){
//     if(str=='add'){
//         return function add(){
//             console.log(a+b);
//         }
//     }
// }
// let anss=calculator('add', 3, 8);
// console.log(anss);
// anss();

//------------------------------fuction  expression

let sayHi=function abcd(){
    console.log("this is a function expression");
}
// sayHi();//it will run
console.log(""+sayHi()); 
// abcd();//--> error= "fuction abcd is not defined"
