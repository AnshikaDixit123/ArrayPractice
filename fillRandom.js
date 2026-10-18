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

const arr = createArray(len);
printArray(arr);

