/*
Primitivos (imutaveis) - string, number, boolean, undefined, null (bigint, symbol)
 */
let a = [1,2,3,];
let b = a;
let c = b;

console.log(a,b);

a.push(4);

console.log(a,b)

b = [...a];

b.pop();

console.log(a,b);
