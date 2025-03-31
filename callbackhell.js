// async function getData(getid, getNextData) {
//     setTimeout(() => {
//         console.log(getid);     
//         getNextData()
//     }, 2000);  
// }
// getData(1 ,()=>{
//     console.log("log 1");
//     getData(2, ()=>{
//         console.log("log 2");       
//         getData(3, ( )=>{
//             console.log("log 3");       
//         })
//     })  
// })


// function asyncronous() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("heloo")
//             console.log("data 1");
//         }, 2000);
//     })
// }

// asyncronous().then(() => {
//     console.log("Hello World");
//     asyncronous().then(() => {
//         console.log("Hello India");
//     })

// })


// async function getStart(x, getcallback) {
//     setTimeout(() => {
//         console.log(x)
//         getcallback();
//     }, 1000)

// }
// getStart(1, () => {
//     getStart(2, () => {
//         getStart(3, () => {
//             getStart(4, () => {

//             });
//         });
//     });
// });

// Highest common factor in javascript 
// function HCF(x, y){
//     let hcf = 0;
//     for(let i=0; i<=x && i<=y; i++){
//         if(x % i ==0 && y % i ==0){
//             hcf = i;
//         }
//     } 
//     return hcf;
// }


// //  console.log(HCF(8,15));


// //  Sort array without using any build in method 
// //  let temp = [];
// // for(let i = 0; i< arr.length -1; i++){
//     //     for(let j = i +1; j< i; j++){
//         //         if()
//         //     }
        
//         // }
//         arr = [12, 35, 1, 10, 34, 1];



//         // 2. WAP to reverse an integer without converting it to a string, 
//         // without using any built-in methods.

//  function reverseInteger(num) {
//     let reversed = 0;
    
//     while (num > 0) {
//         let lastDigit = num % 10;
//         reversed = reversed * 10 + lastDigit;
//         num =  Math.floor(num / 10);  
//     }
//     return reversed;
// }
 
// let num = 98765;
// console.log("Reversed number:", reverseInteger(num));


// Reverse the no without converting string 
// let number = 765432;
// let revNo = 0;

// while(number> 0){
//     let last = number % 10;
//      revNo =  revNo * 10 + last;
//      number = Math.floor(number / 10)
// }
// console.log(revNo);


// 2. WAP to reverse an integer with converting it to a string, without using any built-in methods.

// let  numb = 12345;
// let numbarr = []
// let numString = numbarr.push(numb);
// console.log(numString)
// // let name = "Ramesh";
// let revString ='';
// for(let i = numString.length -1; i>=0; i--){
//     revString += numString[i];
// }
// console.log(revString)


// Lowest common mulitiple

// function lcm(x, y){
//     let lcm = x > y ? x : y;
    // console.log(lcm);
    // while(true){
    //     if(lcm % x ==0 && lcm % y ==0)
    //         break;
    //         lcm++;
    // }
    // return lcm;
//     for(let i =lcm; ; i += lcm){    
//         if(lcm % x ==0 && lcm % y ==0){
//              return i
            
//         }  
//     }
// }

// console.log(lcm(10, 15));


// reverse no without creating string 
// let numbe= 654321;

// let reverseNo = 0;
// while(numbe > 0){
//     let lastdigit = numbe % 10;
//     reverseNo = reverseNo * 10 + lastdigit;
//     numbe = Math.floor(numbe / 10);
//     console.log(reverseNo)
// }
// console.log(reverseNo)

// Find LCM Lowest common multiples 
function lowestCM(x, y){
    let largest = x > y ? x: y
    while(true){
        if(largest % x ==0 && largest % y ==0)
            break;
        largest++
    }
    return largest;
}
console.log(lowestCM(2,3));

// Find HCM 

