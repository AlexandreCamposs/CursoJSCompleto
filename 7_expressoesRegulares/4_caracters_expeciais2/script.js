const dia = /\d\d/;

console.log(dia.test('2019') && '2019'.length == 2);
console.log(dia.test('ads'));
console.log(dia.test('5') && '5'.length == 2);
console.log(dia.test('das2'));

const palavraTresLetras = /\w\w\w/;

console.log(palavraTresLetras.test('ads'));
console.log(palavraTresLetras.test('addd'));
console.log(palavraTresLetras.test('as'));
