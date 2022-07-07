var res = Math.random();
console.log("Random number between [0 - 1): " + res);

var res_1 = Math.round( 10.4 );
console.log(res_1);
var res_2 = Math.round( 10.5 );
console.log(res_2);

// Time and Date
var time = new Date();
console.log("Current time is: " + time);

var time_1 = new Date( 2002, 1, 23, 11, 22, 18 );
console.log("Created time is: " + time_1);

// getFullYear() getdDate(), getHours(), getMinutes(), getSeconds()
console.log(time.getFullYear());
console.log(time_1.getMonth()); 
console.log(time.getMonth()); 

time.setFullYear(2023)
console.log(time);

console.log("-------------");




















