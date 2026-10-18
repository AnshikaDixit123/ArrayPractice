const len = 20;

function createArray (len) {
    const arr = [];
    
    for (let idx = 0; idx < len; idx++) {
        arr.push(Math.floor(Math.random() * 100));
    }

    return arr;
}

function printArray (arr) {
    let res = "| ";

    for (let idx = 0; idx < arr.length; idx++) {
        res += `${arr[idx]} `;
    }

    res += "|";
    console.log(res);
}

function getPeakElementOf(arr) {
    const peakArr = [];

    for (let idx = 1; idx < arr.length - 1; idx++) {
        if (arr[idx] > arr[idx + 1] && arr[idx] > arr[idx - 1]) {
            peakArr.push(arr[idx]);
        }
    }

    return peakArr;
}

const originalArr = createArray(len);
const peakElements = getPeakElementOf(originalArr);

// console.log(arr);
// console.log(peakElements);

printArray(originalArr);

console.log();

printArray(peakElements);
