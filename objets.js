// javascript objects are always in key value pair .
let obj = {};//empty objects
console.log(obj);

//person object
let person={
    //key(properties,methods()):Value
    name:"Hariomm",
    age:23,
    gender:"Male",
    phone:999999999999,
    height:"170",
};
console.log(`Hey ${person.name}, thank you for singing in!`);
console.log(person.gender);
console.log(person["gender"]);


let str="Hariom";
console.log(str.length);//dot  notation
console.log(str["length"]);//square bracket notation

