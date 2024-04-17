// Event loop, callback queue and mircrotask queue & how everything works on the browser
// notes in notebook (green) 

// event loop has one job constantly monitor call stack and callback queue 
// why use callback queue 
// if user clicks button 7 8 times continuosly 
// slowly one after other these callback function are pushed onto call stack and then executed 

// fetch() works in different manner 

console.log("Start")

setTimeout(function cb(){
    console.log("CB setTimeout")
}, 5000);

fetch("https://api.github.com/users/mralexgray/repos")
.then(function cbF(){
    console.log("CB Netflix")
});

console.log("end")

//fetch function returns an api call 
// fetch function returns promise we need to pass call back function that executes when promise is resolved 


// microtask queue given priorty what can come inside it?
// ANSWER: all callback function taht comes through promises goes inside it 

// there is something called mutatuion observer that checks if dom has changed 
// if mutation in dom tree it can execute some callback function

// callback queue aka task queue 

// event loop give chance to microtask -> creates new microstask 
// this is called starvation of callback queue 

