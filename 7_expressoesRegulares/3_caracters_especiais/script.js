const pontoRegex = /./

console.log(pontoRegex.test("ads"))
console.log(pontoRegex.test(" "))
console.log(pontoRegex.test("123"))
console.log(pontoRegex.test("123wed"))
console.log('.')

const dRegex = /\d/; // [0 - 9]

console.log(dRegex.test("ads"))
console.log(dRegex.test(" "))
console.log(dRegex.test("123"))
console.log(dRegex.test("123wed"))
console.log('d')

const dRegex2 = /\D/; // [^0-9] 

console.log(dRegex2.test("ads"))
console.log(dRegex2.test(" "))
console.log(dRegex2.test("123"))
console.log(dRegex2.test("123wed"))
console.log('D')

const sRegex = /\s/;
console.log(sRegex.test("ads"))
console.log(sRegex.test(" "))
console.log(sRegex.test("123"))
console.log(sRegex.test("123wed"))
console.log('s')

const wRegex = /\w/;
console.log(wRegex.test("ads"))
console.log(wRegex.test(" "))
console.log(wRegex.test("123"))
console.log(wRegex.test("123wed"))
console.log('w')