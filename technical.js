// sort the array in reverce order 
let number = [1,3,4,5,3,2,4,3,4,5,6,7,8,6];
// Sort array in reverce order
function sortArrayA(data) {
    for(let i = 0; i<data.length; i++){
        for(let j = i +1; j< data.length; j++){
            if(data[i]> data[j]){
                [[data[i], data[j]] = [data[j], data[i]]]
            }
        }
    }
    console.log(data);
}
// sortArrayA(number);

// Sort array in decending order
function sortArrayD(data) {
    for(let i = 0; i<data.length; i++){
        for(let j = i +1; j< data.length; j++){
            if(data[i]< data[j]){
                [[data[i], data[j]] = [data[j], data[i]]]
            }
        }
    }
    console.log(data);
}
// sortArrayD(number);

// Remove the duplicate element from the array 
function removeDuplicateE(data) {
   let newArry = [];
//    for(let i=0; i<data.length; i++){
//     // for (let j = 1; j < data.length; j++) {
//         if( data.includes(data[i])){
//             newArry.push(data[i])
//         }
//         // const element = array[j];       
//     // }
//    } 
}
removeDuplicateE(number);

function RDFArray(data) {
    let newArray = [];
    data.forEach(item => {
        if (!newArray.includes(item)) {
            newArray.push(item);
        }
    });
    console.log(newArray);
}
RDFArray(number);
 
function RDEFA(data){
    return [...new Set(data)]
   
}
console.log("Remove D",RDEFA(number));

 

