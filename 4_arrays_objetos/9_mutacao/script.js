let pessoa = {
  nome: "Alexandre"
}
let pessoa2 = pessoa;

let pessoa3 = {
  nome:"Alex"
}
console.log(pessoa == pessoa2)
console.log(pessoa2)

console.log(pessoa == pessoa3)
console.log(pessoa2 == pessoa3)

pessoa2.nome = "Pedro";
console.log(pessoa2.nome)
pessoa.nome = "Maria"
console.log(pessoa2.nome)