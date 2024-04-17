// What is Callback function?

// the function that you pass inside a another function (the function that is the argument is called callback function)
// this gives access to asynchronous world in a synchronous single threaded language 

// setTimeout(function (){
//     console.log("timer")
// },5000);

// function x(y){
//     console.log("x");
//     y();

// }

// x(function y(){
//     console.log("y");

// })

//output x -> y -> timer 


//EVENT LISTENER 

function attachEventListener(){
    let count = 0;
    document.getElementById("clickme").addEventListener("click", function xyz(){
    console.log("Button clicked!",++count)
})
}

attachEventListener();

// why remove event listeners ?

// event listeners are heavy 
// are page can go slower 
// when eventlistner removed all the variables will be garbage collected 


