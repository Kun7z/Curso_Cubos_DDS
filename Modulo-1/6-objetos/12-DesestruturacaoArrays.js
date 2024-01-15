const array = [1, 2, 3, 4, 5, 6];

const a = array[0];
const b = array[1];

console.log(a, b)

const [a1, b1] = array  //INDICES 0 E 1

console.log(a1, b1)

const [a2, b2, ...resto] = array

console.log(resto)