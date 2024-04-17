// a function that takes a function as argument or return a function from it is called a higher order function 


function c(){
    console.log("namaste")
}

function y(c){
    c();
}

// c is the call back function 

//BEAUTY of functional prgramming

const radius = [3,1,4,2]

const area = function (radius){
    return  Math.PI * radius * radius
}

const circumference = function (radius){
    return 2 * Math.PI * radius
}

const diameter = function (radius){
    return 2 * radius
}

const calculateArea = function(radius, logic){
    const output = []
    for (let i =0; i < radius.length; i++){
        output.push(logic(radius[i]))
    }
    return output;
}

console.log(calculateArea(radius,area))
// console.log(calculateArea(radius,circumference))
// console.log(calculateArea(radius,diameter))

// dry -> dont repeat yourself 

// MAP -> higher order function

console.log(radius.map(area))

// to make our calculateArea like map we do follwoing 


Array.prototype.calculateArea = function(logic){
    const output = []
    for (let i =0; i < this.length; i++){
        output.push(logic(this[i]))
    }
    return output;
}

console.log(radius.calculateArea(area))


