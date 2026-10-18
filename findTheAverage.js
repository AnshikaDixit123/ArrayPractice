const arr = [1,2,3,4,5,6,7,8,9,10];

function findTheAverageOf (arr) {
    let sum = 0;

    for (let idx = 0; idx < arr.length; idx++) {
        sum += arr[idx];
    }

    return sum / arr.length;
}

console.log(findTheAverageOf(arr));