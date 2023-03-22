// Escreva uma função que recebe um número, e o decrementa de 1 em 1 com um loop;
// Além disso imprima somente os números pares no console;


function decrementNumber(number){
  for(let i = 0; number >=0; number--)
  // console.log(number)
  if(number % 2 == 0){
    console.log(`O ${number} é par`)
  }
}
decrementNumber(20)