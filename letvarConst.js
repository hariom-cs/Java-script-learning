var a=1000;
{
    var a=10;//var is not block scoped mem is created in global scope
    let b=100;//let and const is block scope
    const c=101;
    console.log(a);//10
    console.log(b);//100
    console.log(c);//101
}
    console.log(a);//output=10
    console.log(b);//reference error:b/q memeory is cleaned since block scope is executed
    console.log(c);//reference error
