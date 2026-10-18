const arr = [1,2,3,4,5];

function printArray (arr) {
    let res = "| ";

    for (let i = 0; i <= arr.length - 1; i++) {
        res += `${arr[i]} `;
    }
    res += "|";
    console.log(res);
}

printArray(arr);