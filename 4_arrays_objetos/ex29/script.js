// Adicione a propriedade janelas no ônibus, com o valor de 20;
// Delete a propriedade rodas;
// Imprima a propriedade janelas no console;
let onibus = {
  rodas: 8,
  limitePassageiros: 40,
  portas: 2,
};

onibus.janelas = 20
console.log(onibus.janelas)
console.log(onibus)


console.log(onibus.rodas)
delete onibus.rodas
console.log(onibus.rodas)

