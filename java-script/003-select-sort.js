// Select Sort

var arr = [9, 3, 6, 2, 4, 1, 8, 5, 7];
console.log(arr);

for (var j = 0; j < arr.length - 1; j++) {
  var minIndex = j;

  for (var i = j + 1; i < arr.length; i++) {
    if (arr[i] < arr[minIndex]) {
      minIndex = i;
    }
}
    // Swap the index position - arr[0] and arr[minIndex]
    var temp = arr[j];
    arr[j] = arr[minIndex];
    arr[minIndex] = temp;
}

console.log(arr);

// Add a new element to Array
arr.push("new element");
console.log(arr); 

var res = arr.pop();
console.log(arr);
console.log(res);

// add a new element to the beginning 
var res_1 = arr.unshift("new front element");
console.log(arr);
console.log(res_1);

// delete arr[0]
arr.shift();
console.log(arr);

// reverse array
res_2 = arr.reverse();
console.log(arr);
console.log(res_2);

// splice() - where to start, how many, data. 
// By default - 0 0 none
arr.splice();

var new_arr = [100, 200, 300, 400];

console.log(new_arr);

var new_res = new_arr.splice(1, 2, "new element");

console.log(new_arr);
console.log(new_res);

// sort array
arr_sort = [ 11, 1, 22, 13, 45, 32];
console.log(arr_sort);
arr_sort.sort();
console.log(arr_sort);
// Ascending 
arr_sort.sort( function(a, b) { return a - b} );
console.log("a - b : " + arr_sort);
// Descending
arr_sort.sort( function(a, b) { return b - a} );
console.log("b - a : " + arr_sort); 

// join()
var arr_join = [100, 200, 300, 400];

console.log(arr_join);

var res_join = arr_join.join( '-' );
console.log(res_join);

// concat() - 拼接
var arr_test = [100, 200, 300, 400];
console.log(arr_test);

var res = arr_test.concat( [ 500, 600 ] );
console.log(arr_test);
console.log(res);

// slice( begin, end ) - 0, length
var res = arr_test.slice(1);
console.log(res)

var res = arr_test.slice(1, 3); // [ 1, 3 )

// indexOf(data) return index or -1
var arr_index = [100, 200 ,300];
var res_index = arr_index.indexOf(200);
console.log(res_index);
var res_index = arr_index.indexOf(800);
console.log("Not exist: " + res_index);

// Traverse array
var arr_3 = [100, 200 ,300, 400];
console.log(arr_3);

arr_3.forEach( function (item, index, arr_3){
    console.log("Item is: " + item);
    console.log("Index is: " + index);
    console.log("Array is: " + arr_3);
    console.log("------------------------")
});

// map()
var arr_4 = [100, 200 ,300, 400];
console.log("Array to be mapped is: " + arr_4);

var res_4 = arr_4.map( function(item, index, arr_4) {
    return item * 10;
})

console.log(res_4);

// filter()
var arr_5 = [100, 200 ,300, 400];
console.log("Array to be filtered is: " + arr_5);

var res_5 = arr_5.filter( function (item, index, arr_5) {
    return item > 150;
});

console.log(res_5); 

// every() - will return a boolean
var res_6 = arr_5.every( function (item, index, arr_5) {
    return item > 50;
})

console.log(res_6); 

// some() - will return a boolean
var res_7 = arr_5.some(function (item, index, arr_5 ){
    return item >1000;
});

console.log(res_7)



