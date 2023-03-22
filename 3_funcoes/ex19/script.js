// Escreva uma função que retorne um número aleatório;
// O número máximo retornado deve ser passado via parâmetro;
// Dica: utilize Math.random();

function numeroAleatorio(num){
  return  Math.floor(Math.random() * num ) + 1
}

console.log(numeroAleatorio(5))
console.log(numeroAleatorio(10))
console.log(numeroAleatorio(3))