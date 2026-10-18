const arr = [
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15], 
    [16,17,18,19,20]
    ];

//This function prints array...
function printArray (arr) {

    for(let row = 0; row < arr.length; row++) {
        let res = "|"
        const brr = arr[row];

        for(let col = 0; col < brr.length; col++) {
            res += (arr[row][col] + " ");
        }

        res += "|"
        console.log(res);
    }

}

printArray(arr);

