// this in global space

"use strict";// if not strict mode then in function window else if strict mode undefined 

console.log(this) //this keyword in global space will represent global object 

// what is global object? js in mobile, browser, nodejs everywhere there is runtime enviormnent 
// in case of browser global object is wirndow 

// function x(){
//     console.log(this)
// }
// x(); // if function called without reference it becomes undeined 
// window.x(); // returns window object 

// // this keyword works different in strict mode and non strict mode 
// // if not strict mode then in function window else if strict mode undefined 

// // ((THIS SUBSTITUTION)) -> VALUE OF THIS in a function is undefined but in non strict mode this susbstitution happens 
// // if the value of this keyword is null or undefined this ketword will be replaced by gloablobject only in non strict mode 

// // the value of this keyword depends on how it is called 

// // this inside object method 

// const student = {
//     name:"Akshay",
//     printName: function (){
//         console.log(this);

//     }
// }

// student.printName(); // {a: 10, x: ƒ}

// const student2 = {
//     name:"deepkia",
// }

// student.printName();
// // we want to reuse method of student printName 

// student.printName.call(student2); //val of this = student2 
// //override value of this 

// 3 important functions to know bind, call, apply methods 




// a function inside an object is called a method 


// THIS INSIDE ARROW function 

//arrwo function does not have own this binding the use the value of this keyword of lexical env 

const obj = {
    a:10,
    x: () => {
        console.log(this)
    }
}

obj.x(); // here this keyword behave like it is i global space 

const obj2 = {
    a:10,
    x: function (){
       const fn = () => {
            console.log(this)
        }
        fn(); 
    }
}
    

obj2.x()

// this insside DOM => val is reference to html element 