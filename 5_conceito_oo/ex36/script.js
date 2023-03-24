// Crie uma classe que simula uma conta no banco (utilize a forma que preferir);
// Deve conter a propriedade saldo;
// E os métodos deposito e saque;
// Teste os métodos;

class Conta{
  constructor(saldo){
    this.saldo = saldo
  }
  depositar(valor){
    this.saldo += valor;
  }
  sacar(valor){
    return this.saldo -= valor;
  }
}
let contaCorrente = new Conta(0)
console.log(Conta)
contaCorrente.depositar(550)
console.log(contaCorrente)

contaCorrente.sacar(500)
console.log(contaCorrente)