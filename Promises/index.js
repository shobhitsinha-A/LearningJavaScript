const cart = ["shoes", "sandals"]

createOrder(cart,function (){

    proceedtoPay(orderId);
    }); // will return orderID

//proceedtoPay(orderId);

// how we used to write code using call back 

// issue is inversion of control


const promise = createOrder(cart); 

//promise is an empty object with data value in it 
// promise will hold data that createorder return 
// but createorder api will take some undefined time 
// {data: undefined} this promise object will be filled with data automatically after async time it takes 

//once data comes into {data:orderID} then this callbackfunction automatically called 
promise.then(function (){

    proceedtoPay(orderId);
    });

//improvement in code?

// attaching callback function to promise object
//promise give guarantee 


