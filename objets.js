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

//nested objects in javascript
let capAmerica={
    firstName:"steve",
    lastName:"rogers",
    friends:["bucky", "tony stark", "burce"],
    age:190,
    isAvenger:true,

    address:{//another object in objects
        state:"manhattan",
        city:"Newyork",
        country:"USA"
    },
    sayHi:function(){
        console.log(`Hello my name is ${this.firstName}`);
    }
};

console.log(capAmerica);
console.log(capAmerica.friends);
console.log(capAmerica.friends[0]);
console.log("printed using bracket notation "+  capAmerica["friends"][0]);
capAmerica.sayHi();//methods accessing

console.log(capAmerica.address.city);//nested objects