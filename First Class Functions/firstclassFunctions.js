//Anonymous function -> a function without a name is anonymous function 


//Function Statement / Function Declaration 

function a(){
    console.log("a called ");
}
a();

//Function expression 

var b = function () {
    console.log("b called")
}
// will give TypeError: b is not a function if a and b are called above both functions 
// major difference is hosting (b is treated as anyother variable until the code hits line 13)
b();

//Anonymous function

// Anonymous function are used when functions are used as values 
// function () {
// }
// gives SyntaxError: Function statements require a function name


//Named Function Expression 

// var b = function xyz(){
//     console.log(xyz);
//     //console.log(" xyz called ")
// }
// b(); // can access here 
// xyz();
// ReferenceError: xyz is not defined

// Difference between Parameters and Arguments 

// these are parameter 
// label or identifier that gets the value are parameters 
var c = function (param1, param2){
    console.log("c called ")
}

c(a,b);
// value passed inside functions are arguments 


// FIRST CLASS FUNCTIONS : The ability of  functions to be used as values to be or passed as arguments or can be returned from a function is called first class function 

// in js we can pass function inside functions as arguments 

var d = function(param1){
    console.log(param1);
}

d(function(){

});

//this is valid 

var d1 = function(param1){
    console.log(param1);
}

function xyz(){

}

d1(xyz)



var d2 = function(param1){
    return function(){

    }
}

console.log(d2());

var d3 = function(

){
    return function xwz(){

    }
}

console.log(d3());

// function are first class citizen same 

// if let and const used then also rules of let and const videos applied 

// Arrow function part of ES6 