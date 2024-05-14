
const dummy = "https://dummyjson.com/products/1"
//fetch returns a promise 

const user = fetch(dummy);

//promise state and promise result 
//result stores data that is return 
// state initially pending -> fulfilled 

console.log(user)

user.then(function(data){
    console.log(data)
})

//3 states of promise pending, fulfilled, rejected 
// promise objects are immutable 

// what is promise: placeholder for certain period of time until we recieve a value from async function
// container for future value
// object representing the eventual completion or failure of a async operation 

// we solved inversion control 

// other callback hell problem 

// code grows horizontal -> pyramid of dome 

// PROMISE CHAINING 

const cart = ["shoes", "sandals"]

createOrder(cart,function (){
    proceedtoPay(orderId, function (paymentInfo){
        showOrdersummary(paymentInfo, function(){
            Updatewallet();
        })
    });
    });

const promise = createOrder(cart);

promise.then(function(orderId){
    proceedtoPay(orderId);
})


createOrder(cart)
.then(function(orderId){
    return proceedtoPay(orderId);
})
.then(function(paymentInfo){
    return showOrdersummary(paymentInfo);
})
.then(function(paymentInfo){
    return Updatewallet(paymentInfo);
})

// important to return 

createOrder(cart)
.then(function(orderId){
    return proceedtoPay(orderId);
})
.then(function(paymentInfo){
    return showOrdersummary(paymentInfo);
})
.then(function(paymentInfo){
    return Updatewallet(paymentInfo);
})

createOrder(cart)
.then ((orderId) => proceedtoPay(orderId))
.then((paymentInfo) => showOrdersummary(paymentInfo))
.then((paymentInfo) => Updatewallet(paymentInfo))

//promise is an object that represents eventual completion or failure of an async operation 

// 1. Before promise we used to depend on callback functions which would result in 1.) Callback Hell (Pyramid of doom) | 2.) Inversion of control
// 2. Inversion of control is overcome by using promise.
//   2.1) A promise is an object that represents eventual completion/failure of an asynchronous operation.
//   2.2) A promise has 3 states: pending | fulfilled | rejected.
//   2.3)  As soon as promise is fulfilled/rejected => It updates the empty object which is assigned undefined in pending state.
//   2.4) A promise resolves only once and it is immutable. 
//   2.5) Using .then() we can control when we call the cb(callback) function.

// 3. To avoid callback hell (Pyramid of doom) => We use promise chaining. This way our code expands vertically instead of horizontally. Chaining is done using '.then()'
// 4. A very common mistake that developers do is not returning a value during chaining of promises. Always remember to return a value. This returned value will be used by the next .then()


