// Find largest No and second larges No from the array
const numbers = [34, 5, 46, 4, 36, 78, 875, 89, 6, 3, 35, 7];

async function largestNo(arr) {
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] < largest !== 0) {
            secondLargest = arr[i];

        }
    }
    console.log(largest);
    console.log(secondLargest);
}
// largestNo(numbers);

// Sort the array in accending order
async function sortArray(mydata) {
    for (let i = 0; i < mydata.length - 1; i++) {
        for (let j = i + 1; j < mydata.length; j++) {
            if (mydata[i] > mydata[j]) {
                // let temp = mydata[i];
                // mydata[i] = mydata[j];
                // mydata[j] = temp;
                [mydata[i], mydata[j]] = [mydata[j], mydata[i]];
            }
        }
    }
    console.log(mydata);
}
// sortArray(numbers);

// Remove the duplicate element form array
const number = [34, 34, 5, 46, 5, 7, 78, 875, 89, 3, 3, 35, 7];
let newNumber = [];
async function removeDuplicate(data) {
    for (let i = 0; i < data.length - 1; i++) {
        for (let j = i + 1; j < data.length; j++) {
            if (data[i] === data[j]) {
                newNumber.push(data[i]);
            }
        }
    }
}
removeDuplicate(number)
console.log(newNumber); 

// Find the vowels in string 

async function findVowels(str) {
    const vowels = "aeiouAEIOU";
    str = str.split('');
    console.log(str);
    let count = 0;
    for(let i=0; i<str.length; i++){
        // for(let j = i +1; j<str.length; i++){
            if(str[i] == vowels){
                count++;       
            }
        // }
        
    }
    console.log(count);
    
}
findVowels("Hello")



const cVowels = (s) => {
    const vowels = "aeiouAEIOU";
    let count = 0;

    for (let i = 0; i<s.length; i++) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
};

const s = "";
console.log(cVowels(s));





