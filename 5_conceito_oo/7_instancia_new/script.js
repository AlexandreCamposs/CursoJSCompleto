function Cachorro(raca,pata,cor){
  this.raca = raca;
  this.pata = pata;
  this.cor = cor
  this.uivar = function(){
    console.log("au au")
  }
}
let pastorAlemao = new Cachorro('pastor alemao', 4, 'branco')
console.log(pastorAlemao)
pastorAlemao.uivar()