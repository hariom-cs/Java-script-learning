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

// let sayHi=function abcd(){
//     console.log("this is a function expression");
// }
// sayHi();//it will run
// console.log(""+sayHi); //return fun. definition
// sayHi();//OP->this is a function expression
// abcd();//--> error= "fuction abcd is not defined"



//-----------Immediately Invoked function Expression------

//eg-01
let ans1= additionIIFE=function add(a,b){
    return a+b;
}(122,34);
console.log(ans1);// op= 156

// eg-02
let ans2= additionIIFE=function add(a,b){
    console.log(a+b);
}(122,340);//op=462