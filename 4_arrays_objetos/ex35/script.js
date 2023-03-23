// Crie um objeto calculadora;
// Que tem os seguintes métodos: somar, subtrair, multiplicar e dividir;
// Os métodos só devem aceitar dois parâmetros;
// Utilize cada um dos métodos e imprima os valores no console;

let calculadora = {
  soma:function(a,b){
    return a + b
  },
  subtrair:function(a,b){
    return a - b
  },
  multiplicar:function(a,b){
    return a * b
  },
  dividir:function(a,b){
    return a / b
  }
}
console.log(calculadora.soma(2,3))
console.log(calculadora.subtrair(5,3))
console.log(calculadora.multiplicar(3,3))
console.log(calculadora.dividir(10,2))