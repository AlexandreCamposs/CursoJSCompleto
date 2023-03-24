function Cachorro(raca,pata,cor){
  this.raca = raca;
  this.pata = pata;
  this.cor = cor
  // this.uivar = function(){
  //   console.log("au au")
  // }
}

Cachorro.prototype.uivar = function(){
  console.log("auuuuuuuu")
}

Cachorro.prototype.latir = function(){
  console.log("auauuu")
}

let pastorAlemao = new Cachorro('pastor alemao', 4, 'branco')
console.log(pastorAlemao)

pastorAlemao.uivar()
pastorAlemao.latir()