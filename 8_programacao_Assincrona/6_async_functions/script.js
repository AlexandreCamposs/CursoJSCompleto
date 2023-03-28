// Podemos criar funções assíncronas com a palavra reservada async;
// Elas retornam uma Promise;
// Se retornar algo, a promessa é resolvida, se der alguma exception a promessa é rejeitada;

async function somar(a,b){
  return a + b;
}
console.log(somar(2,2));

somar(2,4).then(value => console.log(value));