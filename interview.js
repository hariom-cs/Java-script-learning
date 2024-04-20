// const person={
//     firstName:"Hariom",
//     lastName:"Kumar",
//     pet:{
//         name:"Mara",
//         breed:"Dutch TUlip Hound",
//     },
//     getFullName: function getFullName(){
//         return `${this.firstName} ${this.lastName}`
//     },
// };

// console.log(person.getFullName());

//----------------------------

 
// function sumValus(x, y, z){
//     return x+y+z;
// }
// console.log(sumValus([...1,2,3]));//type error

// console.log(sumValus(...[1,2,3]));//output->6

// console.log(sumValus([...[1,2,3]]));//1,2,3undefinedundefined

// console.log(sumValus([1,2,3]));//1,2,3undefinedundefined

//----------------------
// function nums(a,b){
//     if(a>b)console.log("a is big")
//     else console.log("b is big");
//     return 
//     a+b;
// }

// console.log(nums(2,3));//if return and a+b in same line then op= b is big 5
// console.log(nums(5,4));//if return and a+b not in same line=>op= a is big undefined
//----------------------------------------------
// let randomValue = { 
//     name: "Lydia" 
// };
// randomValue = 23;
// if(!typeof randomValue === "string") {
//   //false -> boolean === string
//   console.log("It's not a string!");
// } 
// else{
//   console.log("Yay it's a string!");
// }


// const colorconfig={
//   red:true,
//   green:true,
//   blue:false,
//   white:true,
//   pink:true,
// };
// const colors=['red', 'voilet', 'pink', 'white'];

// console.log(colorconfig.green);
// console.log(colorconfig[1]);//error


//==============================================
let count=0
const nums=[10,11,12,13];
//nums store  like this
// "0":10
// "1":11
// "2":12
// "3":13
//note:loop apply on the string
for(var i in nums){
  if(i) count+=1;
}
console.log(count);