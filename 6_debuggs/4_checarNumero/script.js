function checarNumero(num){
  let number = Number(num)
  if(Number.isNaN(number)){
    console.log("Não é um número")
  }else{
    return number
  }
}
console.log(checarNumero(36))
checarNumero('texto');