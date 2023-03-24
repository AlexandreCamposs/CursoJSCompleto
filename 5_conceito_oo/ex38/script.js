// Crie um objeto que simula um endereço de um cliente;
// Propriedades: Rua, Bairro, Cidade e Estado;
// No construtor o endereço já deve ser definido por completo;
// Crie métodos para atualizar todas as propriedades;

class Endereco {
  constructor(rua,bairro,cidade,estado){
    this.rua = rua
    this.bairro = bairro 
    this.cidade = cidade
    this.estado = estado
  }
  set novaRua(novaRua){
    this.rua = novaRua
  }
  set novaBairro(novaBairro){
    this.bairro = novaBairro
  }

}

let endereco = new Endereco('Av epitacio','Boqueirão','Santos','São Paulo')
console.log(endereco)

endereco.novaRua = 'Rua Alameida'
endereco.novaBairro = 'Alameida'
console.log(endereco)