
class Cachorro {
  constructor(raca, cor) {
    this.raca = raca;
    this.cor = cor;
  }
  latir() {
    console.log('auauuu');
  }
  get getCor(){
    return this.cor
  }
  set setCor(cor){
    this.cor = cor
  }
}
console.log(Cachorro)

let pastor = new Cachorro('Pastor Alemão', 'Sem cor')
console.log(pastor)

pastor.setCor = "Preto"
console.log(pastor.getCor)
console.log(pastor)