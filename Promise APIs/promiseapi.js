// there are 4 promise apis parallel api calls promise api comes in 
// promise.all() used to handle multiple promises together 
//takes array of promises in input (has multiple) promise.all([p1,p2,p3]) make 3 parallel api calls and get the result 
// p1 -> 3 s p2-> 1 s p3-> 2s all success then what will happen
// output prmoise.all() -> result [val1,val2,val3] //waits all of them to finsih 
// what if one of them fails 
// as soon as any api call fails promise.all() throws an error output -> error thrown by p2 if p2 fails 
// p2 takes 1 s -> so after 1 s you will see error 
// what happens to p1 and p3 ? prmose cant be cancelled so p1 and p3 accept or reject depends on their fate 
// it is kind of all or none " it will not wait for other promises "
// promise.all is fail fast 

// promise.allsettled() ([p1,p2,p3])
// this is same in success case 
// different in failure case what is p2 rejected 
// it waits for all promises mean to be settled all things happening in parallel 
// output [val1,err2,val3] 

// promise.race([p1,p2,p3]) time same for all resolved promises ITT WILL RETURN RESULT AFTER FIRST SETTLED PROMISE 
// after 1 s -> gives result (val2 ) gives value of first settled promise 
// its a race whatever promise settles first you will get the result 
// what happens when one promise fails 3 s 5 s and 2 s what if p3 fails 
// error will be thrown error from p3 (ERROR)
// return result of first settled promise 

// promise.any([p1,p2,p3]) SUCCESS SEEKING API SEEKING FOR FIRST SUCCESS 
// similar to race waits for first promise to success (fulfilled)
// p2 (takes 1s) succeeds then return val2 
// if p2 rejected then p3 that takes 2 s return val3
// wait for first success
// what if everything fails -> all apis calls fails returns AGGREGATED ERROR ARRAY OF ALL 3 ERROR [err1,err2,err3]

const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=> reject("P1 FAIL"),3000);
})


const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=> reject("P2 Fail"),2000);
})


const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=> reject("P3 FAIL"),2000);
})

//promise.allSettled -> safest of all 
// race the first settled promise is return in this case irrespective of fullfilled or reject 
// promise.any returns the first (resolved success) fulfilled promise it waits for any promise to be fulfilled in case all fail then it return aggregated array of error 
// promise .any() waits for first settled success 
Promise.any([p1,p2,p3])
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.error(err)
    console.log(err.errors)
})
// lingo
// settled -> got the result (can be failure or success)
// resolve, success, fulffiled  or reject, failure, rejected 

//Aggregate error is when all promise were rejected 
// who to get array of errors 
