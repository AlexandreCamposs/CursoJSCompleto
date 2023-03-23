let pessoa = {
  "nome": "Alexandre",
  "idade": 30,
  "profissao":"Programador",
  "hobbies":["Video game", "Leitura", "Academia"]
}
let pessoaTexto = JSON.stringify(pessoa);
console.log(pessoaTexto);

let pessoaJSON= JSON.parse(pessoaTexto)
console.log(pessoaJSON)
console.log(pessoaJSON.hobbies[0])
