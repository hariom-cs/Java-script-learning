function calculator(str, a, b){
    if(str=='add'){
        return function add(){
            console.log(a+b);
        }
    }
}
let anss=calculator('add', 3, 8);
console.log(anss);
anss();