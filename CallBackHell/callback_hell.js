//Callback Hell

// good parts -> how callback is helpful writing async function 
// bad parts -> callback hell and inversion of control 


// console.log("Namaste")

// setTimeout(function wait(){
//     console.log("WAIT!")
// },5000)

// console.log("Js")

// how callback works in website 

const cart = ["shoes","sandals"]
api.createOrder(cart, function (){
    api.proccedToPay(function (){
        api.showOrderSummay( function(){
            api.showOrderSummay()
        })
    })
})


// we have give the function procced to pay to createorder api its now reponsibility of createorder api to create order and call function back 

// now we have to show order summary page 

// there is a problem callback hell -> code unmaintable, pyramid of dom 

// INVERSION OF CONTROL : you lose control of code when using callback kyle simpson 



const cart1 = ["shoes","sandals"]
api.createOrder(cart, function (){
    api.proccedToPay()
})

// we gave control to createorder api what if our callback function never called we have not written that createorder api code 

// conclusion: async in js exists because callback exists 
// issues with callback 
//callback hell: a callback nest 
// IOC: we pass callback into another function and we have given control of this function to another function 

// 1 - Callback hell
// When a function is passed as an argument to another function, it becomes a callback function. This process continues and there are many callbacks inside another's Callback function.
// This grows the code horizontally instead of vertically. That mechanism is known as callback hell. 

// 2 - Inversion of control
// The callback function is passed to another callback, this way we lose the control of our code. We don't know what is happening behind the scene and the program becomes very difficult to maintain. 
// That process is called inversion of control.