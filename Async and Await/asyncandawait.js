// What is async?
// async is a keyword that is used to make a function async 
// an async function has a proprty that is always returns a promise 
// in case you try to return a value from async function then the function would wrap around the value with a promise
// the data inside a promise can be fetched using then 


// const p = new Promise((resolve,reject) => {
//     resolve("Promise resolved Value!!!")
// })


// async function getData(){
//     return p;
// }

// const promiseData = getData();

// promiseData.then((res)=>console.log(res))

//async await combo used to handle promises 



// before how we used to handle 

// const p1 = new Promise((resolve,reject) => {
//     setTimeout(()=> resolve("Promise resolved Value!!"), 10000)
// })

// function getData(){
//     //here js engine does not wait for promise to be resolved 
//     p1.then(res => console.log(res));
//     console.log("Namaste Js")
// }

// getData();
// first namste js printed then promise resolved then res printed 
// beacuse js waits for no one 

//now using async await 

// const p2 = new Promise((resolve,reject) => {
//     setTimeout(()=> {
//         resolve("PROMISE RESOLVED VALUE!!!")
//     },5000)
// })

// const p3 = new Promise((resolve,reject) => {
//     setTimeout(()=> {
//         resolve("PROMISE RESOLVED VALUE!!!")
//     },10000)
// })
// async function handlePromise(){
//     console.log("Hello World!")
//     const val = await p2;
//     console.log("Namaste Js")
//     console.log(val)

//     const val2 = await p3;
//     console.log("Namaste Js2")
//     console.log(val2)
// }
// here the code was waiting at line 50 
// js engine waits for promise to resolve 

//code waits for 10 seconds and once that is done then everything is printed 
// handlePromise();

// HOW IS JS Engine waiting me?
// ANS: Js Engine does not wait (handlePromise) not in call stack 


// handlepromise -> execution suspend (moves out of call stack) when await is seen and it waits till p1 is resolved 
// asfter 5 second handlepromise() comes in call stack and it start executing from where it left in out case line 57 after the promise 
// call stack

//async p1 and p2 

//you will use keyword await in front of promise that needs to be resolved 
// await can only be used inside async function it resolves the promise


// REAL WORLD EXAMPLE 

// const API_URL = "https://invalidrandomurl"

// async function handlePromise() {
//     try{

//     const data = await fetch(API_URL);
//     // data here is response object 

//     const jsonValue = await data.json(); // this is again a promise 

//     console.log(jsonValue)
//     } catch(err){
//         console.log(err)
//     }
// }

// handlePromise();


const API_URL = "https://invalidrandomurl"

async function handlePromise() {

    const data = await fetch(API_URL);
    // data here is response object 

    const jsonValue = await data.json(); // this is again a promise 

    console.log(jsonValue)
}
   

handlePromise().catch((err) => console.log(err));

// how fetch works ? 
// fetch is a promise 
// fetch return response object 
// fetch function give res object which is a readable stream to json 
// fetch ()=> Response.json()=> jsonvalue

// HANDLE VALUE 


// what is async await ?
// async function you can use awawit inside assync function to to handle promises (thuses promises are asynchronus)
// if multiple promises how it works 
// tell how beind the scene the program works 
//ASYNC WAIT MAINLY USED TO HANDLE PROMISES 

//async await vs promise.then/.catch 

// async await is syntactical sugar new way of writing code 