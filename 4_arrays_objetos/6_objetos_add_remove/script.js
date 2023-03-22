let carro = {
  marca:"Ferrari",
  cor:"Amarelo",
  motor: 2.0
}
console.log(carro);
console.log(carro.cor);

carro.tetoSolar = true;
carro.combustivel = 'Gasolina';

console.log(carro.combustivel)

delete carro.motor
console.log(carro.motor)

//Para deletar propriedade do objeto usar delete + nome do objeto + propriedade
// Para adicionar propriedade : nome do objeto + ponto + nome da propriedade e o valor dela