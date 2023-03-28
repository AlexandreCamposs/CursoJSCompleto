// Uma das vertentes a prog. Assíncrona é fazer ações que aconteçam depois de um tempo por meio de callbacks;
// Callback é uma função que faz uma ação após algum acontecimento no código;
// Podemos realizar um callback com a função setTimeout, veja:
console.log("1")

setTimeout(function(){
  console.log("Executou") //executado de forma assincrona 
},2000)

console.log("1")
console.log("2")
console.log("3")
console.log("4")
console.log("5")