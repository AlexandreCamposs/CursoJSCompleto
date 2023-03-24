class Cachorro {
  constructor(raca,cor){
    this.raca = raca;
    this.cor = cor;
  }
  latir(){
    console.log("auauu")
  }
}
console.log(Cachorro)

Cachorro.prototype.patas = 4

console.log(Cachorro.patas)


let pastorAlemao = new Cachorro('Pastor Alemão','preto')
console.log(pastorAlemao.patas)
console.log(pastorAlemao)
pastorAlemao.latir()