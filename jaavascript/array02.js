const marval_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marval_heros.push(dc_heros)
// console.log(marval_heros[3][0]);

// const allheros = marval_heros.concat(dc_heros)
// console.log(allheros);


console.log([...marval_heros,...dc_heros]);

const another_arr = [1,2,3,[4,5,6] ,7,[6,7,[4,5]]]
const real_another_arr = another_arr.flat(Infinity)
console.log(real_another_arr);

console.log(real_another_arr );

console.log(Array.from("Nirav"));
console.log(Array.from({name :"nirav"}));
 
//
let scroe1 =100;
let scroe2 =200;
let scroe3 =300;
console.log(Array.of(scroe1,scroe2,scroe3));