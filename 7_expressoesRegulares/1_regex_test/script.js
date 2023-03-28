// \d - Qualquer dígito de caractere
// \w - Um caractere alfanumérico (“teste”)
// \s - Qualquer caractere de espaço em branco
// \D - Caracteres que não são dígitos
// \W - Caractere não-alfanumérico
// \S - Caractere que não seja espaço em branco
// .    - Qualquer caractere, menos nova linha


const reg1 = new RegExp("bola");
console.log(reg1.test("Tem bola"))
console.log(reg1.test("Não tem"))

const reg2 = /Bola/;

let text = "Tem Bola na cesta"

console.log(reg2.test("Tem Bola"))
console.log(reg2.test("Tem bola"))

console.log(reg2.test(text))


console.log(/quadrado/.test("Onde tem um quadrado"))
console.log(/quadrado/.test("212316516854135135"))