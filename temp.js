var obj={
    add: function(a, b){
        return a+b;
    },
    subtract:function(a, b){
        return a-b;
    },
    hello:1234
}

console.log(obj);

module.exports = obj;//by this whole object obj is exported to fs.js file of variable "abc"

//now by this 2 times print same thing 
//1st-since require method execute the file (for line 11)
//2nd time- since exports methods used so exported to variable "abc"(fo line 13)