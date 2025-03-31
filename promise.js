// Write a code to print 2 message with 2 second delay

function sub(){
    setTimeout(() => {
        console.log("hello");
        setTimeout(() => {
            console.log("Good Morning");
        },2000);
    }, 2000); 
}
// sub();

// let prom = new Promise((resolve, reject)=>{
//     resolve("Hello I am Ganesh");
//     // reject("There is some technical issue..!")
// }).then(()=>{
//  setTimeout(() => {
//     console.log("Hii");
    
//  }, 2000);   
// }).catch(()=>{
//     setTimeout(() => {
//         console.log("Hello I am Rajesh");   
//     }, 2000);
// }).then(()=>{
//     // new Promise((res))
//     setTimeout(() => {
//         console.log("Hello This is node js team");    
//     }, 2000);
// })

// callback hell 

