// [].map() [].filter() [].reduce()

// map used to transform array 

const arr = [1,2,3,4,5,10]

//double 

//triple 

//binary 

// function binary(x){
//     return x.toString(2);
// }

// const output = arr.map(binary)

// console.log(output)

// FILTER used to filter 

//filter odd values

// function isOdd(x){
//     return x%2;
// }

// const output = arr.filter(isOdd)

// console.log(output)

//REDUCE -> used take all elements come up woith single value 

// sum or max

// function findSum(arr){
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++){
//         sum += arr[i]
//     }
//     return sum
// }

// console.log(findSum(arr));

// const op = arr.reduce(function(acc,curr){
//     acc = acc + curr
//     return acc;
// },0); 

// console.log(op)



// const maxi = arr.reduce(function(acc,curr){
//     if (curr > acc){
//         acc = curr;
//     }
//     return acc;
// },6); 

// console.log(maxi)

const apidata = [
    {fn: "ss", ln:"s", age:23},
    {fn: "aa", ln:"a", age:24},
    {fn: "bb", ln:"b", age:25},
]

//list of fullname

// function fullname(x){
//     return x.fn + " " + x.ln

// }


// const fn = apidata.map(fullname)

// console.log(fn)

// { 23: 1, 24: 2, 25: 1}

// const uage = apidata.reduce(function(acc,curr){
//     if (acc[curr.age]){
//         acc[curr.age] = ++acc[curr.age]
//     }
//     else{
//         acc[curr.age] = 1 
//     }
//     return acc;
// }, {});

// console.log(uage)


//fn of people age less than 30 


// const agelessthan30 = apidata.filter((x) => (x.age < 30)).map((x)=> x.fn)

// console.log(agelessthan30)


const agelessthan30r = apidata.reduce(function(acc,curr){
    if (curr.age <= 24) {
        acc.push(curr.fn)
    }
    return acc;
},[])

console.log(agelessthan30r)