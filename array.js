let  car=["bmw", "audi", "rossroyal", 4, 5, 6, true];
console.log(car);//[ 'bmw', 'audi', 'rossroyal', 4, 5, 6, true ]

//->we can store different value of different types in js array
//->accessing the element the array
console.log(car[0]);//op=>bmw

//->replacing element in array
car[0]="fortuner";
console.log(car[0]);//op=> fortuner

//->adding  element in array
car[7]="mahindra"
console.log(car)


//--------2d array------------

let array2d=[
    [1,2,3],
    [11,22,33],
    [10,92,23]
]
console.log(array2d);//access all elements
console.table(array2d)//access in table form
console.log(array2d[1][2]);//particular element accessing

let res=array2d[1];
console.log(res);
console.log(res[2]);