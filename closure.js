// function outer(){
//     var a =10;
//     function inner(){
//         console.log(a);
//     }
//     inner();
// }
// outer();



// function outer(){
//     var a =10;
//     function inner(){
//         console.log(a);
//     }
//     return inner;//it will return inner function with  its lexical socpe(i.e. outer fun. ki local memory)
// }
//  var z= outer();
//  console.log(z+"");
//  console.log(outer()+"");//This one  and above line are same
//  z();



function outer(){
    var a =7;
    function inner(){
        console.log(a);
    }
    a=101;
    return inner;
}
var z = outer();
console.log(z +"");
z();