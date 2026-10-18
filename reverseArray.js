const arr = [1,2,3,4,5];

function printArray (arr) {
    let res = "| ";

    for (let idx = 0; idx < arr.length; idx++) {
        res += `${arr[idx]} `;
    }

    res += "|";
    console.log(res);
}

function reverseOf(arr) {
    //1st approach - efficient
    // let start = 0, end = arr.length - 1;

    // while (start < end) {
    //     const temp = arr[start];
    //     arr[start] = arr[end];
    //     arr[end] = temp;
    //     start++; end--;
    // }

    //2nd approach - make a new array(don't change orginal array)
    const revArr = [];

    for (let idx = arr.length - 1; idx >= 0; idx--) {
        revArr.push(arr[idx]);
    }
    
    return revArr;
}

// const rest = reverseOf(arr);
// printArray(rest);


printArray(reverseOf(arr));
