// Try to access variable in object
let number = 34;

 let peroson={
    name: "vaish",
    yearOfBith: 2025,
    role: "Software Engineer",
    passout: 2023
}
// console.log(peroson[number]);
for(key in peroson){
    console.log(key, peroson[key]);
}
console.log(peroson["yearOfBith"]);


let firstName= "First Name"
let name = "Ganesh"

let data = {
    [firstName] : name
    ["Ganesh bhai"]= "hello"
}
console.log(data[firstName]);
console.log(data["Ganesh bhai"]);


// Stringify and parse

console.log(data);

let mydata={
    name: "Rupesh",
    age: 36,
    role: "Software Develper"
}


// let myDatas = JSON.stringify(mydata);
// console.log(myDatas);
// let nms = {data:"MyData"};
// let myobj = JSON.parse(nms)
// const dats = JSON.parse(myDatas)
// console.log(dats.name);
// console.log(nms);

// priority process.next 
// microtask 
// event loop 
// Rest API constraints
const numbe = { num:45} 
const getData = (x = {...numbe})=>{
     console.log( x.num );
}
 getData()

 let employee= {
    fname: "Ganesh pund",
    age: 25,
    role: "Software Developer",
    salery: 15000,
    boand : 3 


 }

 const {fname, age, role, salery, boand} = employee;

 console.log(age);
 
