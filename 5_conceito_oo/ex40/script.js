// Crie uma classe conta bancaria;
// Com as propriedades de saldo na conta corrente, saldo na conta poupança e juros da poupança;
// Crie os métodos de depósito e saque, também um método para transferir dinheiro da poupança para a corrente;
// Além disso crie uma conta especial que herda da conta normal;
// Na conta especial os juros são dobrados da conta normal;

class Conta {
  constructor(saldoCC, saldoCP,juros){
    this.saldoCC = saldoCC;
    this.saldoCP = saldoCP;
    this.juros = juros;
  }
  depositar(valor){
    this.saldoCC += valor
  }
  saque(valor){
    this.saldoCC -= valor
  }
  transferenciaCP(valor){
    this.saldoCC -= valor;
    this.saldoCP += valor
  }
  transferenciaCC(valor){
    this.saldoCP -= valor
    this.saldoCC += valor
  }
  jurosAniversario(){
    let juros = (this.saldoCP * this.juros) / 100
    this.saldoCP += juros
  }
}

let conta = new Conta(1000,5000,1)
console.log(conta)

conta.depositar(10000)
conta.saque(8000)
console.log(conta)
conta.transferenciaCP(2000)
console.log(conta)

conta.jurosAniversario()
console.log(conta)

