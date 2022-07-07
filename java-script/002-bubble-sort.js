// Bubble Sort 

var arr = [ 9, 3, 6, 2, 4, 1, 8, 5, 7 ];
console.log(arr);

// How many round to sort 
for (var j = 0; j < arr.length; j++) {
    // To sort 1 round 
    for (var i = 0; i < arr.length - 1 - j; i++) {
        if (arr[i] > arr[i+1]) {
            // swap arr[i] and arr[i+1]
            var temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        } 
    }
}

console.log(arr);




