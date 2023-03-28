// Crie uma regex que aceite a seguinte expressão “Marca: nomeDaMarca”;
// Onde nomeDaMarca pode variar para Nike, Adidas, Puma, Asics;
// Depois teste;

const validaMarca = /Marca: (Nike|Adidas|Puma|Asics)/;
console.log(validaMarca.test("Marca: Nike"))
console.log(validaMarca.test("Marca: ads"))
console.log(validaMarca.test("Marca: "))
console.log(validaMarca.test(" Nike"))
console.log(validaMarca.test("152"))
console.log(validaMarca.test("Marca: Asics"))
