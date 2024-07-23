const arr = [1,2,3,4,5];
console.log(arr[1]);


arr.push(6);
console.log(arr);

arr.pop();
console.log(arr);

arr.unshift(0);
console.log(arr);

arr.shift();
console.log(arr);

console.log(arr.includes(4));
console.log(arr.indexOf(3));
const newarr = arr.join()

console.log(arr);
console.log( newarr);

console.log("A",arr);

const my1 = arr.slice(1,3);
console.log(my1);
console.log("A",arr);


console.log("b",arr);

const my2 = arr.splice(1,3);
console.log(my2);
console.log("b",arr);