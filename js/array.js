// array data type
var arr1 = []; // empty array
var arr2 = [1, 2]; // has 2 elements
console.log(arr2);
console.log(arr2[0]); // index = 0
console.log(arr2[1]); // index = 1

var arr3 = ['hi', 'hello', 'there'];
// display/output arr3
console.log(arr3);
// display/output 'there'
console.log(arr3[2]);
console.log(arr3.length);
console.log(arr3[arr3.length - 1]);

// to add an element
arr3.push('welcome'); // inserts 'welcome' to the very end of the arr3
console.log(arr3);
console.log(arr3[arr3.length - 1]);

arr3.unshift('greeting'); // inserts 'greeting' to the beginning of arr3
console.log(arr3);

// arr3.splice(2, 1, 'Vaneda'); // remove 1 item st index 2 & add 'Vaneda' in that spot
// arr3.splice(2, 2); // remove 2 items starting at index 2
arr3.splice(2, 2, 'Vaneda', 'Phimmachack'); // remove 2 items starting at index 2, insert 'Vaneda' & 'Phimmachack' at index 2, 3
console.log(arr3);

arr3.splice(2, 0, 'hola');
console.log(arr3);

var arr4 = [10, 40, 'abc', 'xyz', true]; // not recommended to do this
console.log(arr4);

arr4.pop(); // removes last item of arr4
console.log(arr4);

arr4.shift(); // removes first item of arr4
console.log(arr4);

var arr5 = arr4.slice(); // makes a copy of arr4 into arr5
console.log(arr5);

var arr6 = arr4; // this is not a copy, it is exact value

arr4.push(false);
console.log(arr4);
console.log(arr5);
console.log(arr6);

var arr7 = arr4.slice(1, 3); // starts at index 1, captures everything before index 3
console.log(arr7);