const padrao = /Abacax?i/;
console.log(padrao.test('Abacaxi'));
console.log(padrao.test('Abacai'));

const padra2 = /\d\w?/;
console.log(padra2.test("123"))
console.log(padra2.test("123a"))
console.log(padra2.test("123"))
console.log(padra2.test("a"))