// What is closure in js
// closur in javascrip is an in one fuction have anther function and inner function can acces 
// the properties of outer function 

// for ex

// function outerfunc (){
//     let number = 0;
//     return  function innerFunc (){
//         number++;
//         console.log(number);
//     }
// }
// const increment1 = outerfunc();
// increment1();
// increment1();
// increment1();
 

// function createCounter() {
//     let count = 0;
//     return () => count++;
// }
// const counter = createCounter();
// console.log(counter());
// console.log(counter());



// function outer(x) {
//     return function inner(y) {
//         console.log(x - y);
//     };
// }
// const add5 = outer(5);
// add5(3);
// add5(3);

// function outer() {
//     const name = "John";
//     return function() {
//         console.log(name);
//     };
// }
// const printName = outer();
// printName();

 
// function counter() {
//     let count = 0;
//     return function () {
//         return ++count;
//     };
// }
// const first = counter();
// console.log(first());
// console.log(first());
// const second = counter();
// console.log(second());
// console.log(first());

// function createCounter() {
//     return {
//         count: 0,
//         increment: function() { this.count++; }
//     };
// }
// const counter = createCounter();
// counter.increment();
//  console.log(counter.count = 10);

// function createFunctions() {
//     let functions = [];
//     for (let i = 0; i < 4; i++) {
//         functions.push(() => console.log(i));
//     }
//     return functions;
// }
// const funcs = createFunctions();
// funcs[0]();
// funcs[2]();
// funcs[2]();
// funcs[2]();
// funcs[3]();

// function outerFunction() {
//     let count = 0;
//     return function innerFunction() {
//         count++;
//         console.log(count);
//     };
// }
// let fn1 = outerFunction();
// let fn2 = outerFunction();
// fn1();
// fn1();
// fn2();

// function mystery() {
//     var a = 5;
//     return function() {
//         console.log(a);
//         a++;
//     };
// }
// var hidden = mystery();
// hidden();
// hidden();

function closureTest() {
    let x = 5;
    return function() {
        x++;
        console.log(x);
    };
}
let test = closureTest();
test();
test();