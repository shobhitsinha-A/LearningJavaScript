// to run any js code we need js engine 

// Js runtime Enviornment is container that has all things js needs to run code 

// callback queue
// microstask queue 
// js engine 
// web apis - to connect to outer env

// Js engine is heart of Js runtime enviornment 
// every browser has js runtime env

//node js (open source js runtime) - can run js code outside browser 

// Js engine whhat happens inside it 

// every browser has diff js engine

//microsoft edge has chakra 
// firefox has spidermonkey 
// google chrome, node.js and v8.net has v8 

// we can create own js engine but must follow standard 
// ECMAScript lang

// first js engine brendon ick -> spider monkey 

// ARCHITECTURE OF JS Engine
// js engine is not a machine 

//what happens to code inside js engine
// code -> parsing -> compilation -> execution 

//code in parsing broken down in token 
let a = 7;
// let one token a one token and so on 
// syntax parser generates ast (abstract syntax tree) for code 

//compilation state and execution goes hand in hand 
// js has JIT compilation -> both inter + compiler 
// JS interpreted or compiled language ?
// what is an interpretor ? adv: fast 
// take code and execute line by line
// compiler? adv: efficiency
// whole code compiled -> new code formed optimized code runs fast

// for js it depends on js engine
// first js was interpreted lang 
// modern browsers use both 

// JUST IN TIME COMPILATION 
// Ast -> interpreter-> compiler optimize code on runtime 
// in some js engine ahead of time compilation (AOT) is done and then byte code goes to execution state 

// execution not possible without memory heap and call stack 
//garbage collector tries to free memory whenever possible 
// uses algo called mark and sweep algo 
// inlining copy elision inline caching -> optimizing done by compiler 




