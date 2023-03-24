
class Cachorro {
  constructor(raca, cor) {
    this.raca = raca;
    this.cor = cor;
  }
  latir() {
    console.log('auauuu');
  }
}

Cachorro.prototype.raca = 'SRD';
Cachorro.prototype.patas = 4;


let pastorAlemao = new Cachorro('Pastor Alemão', 'preto');
console.log(Cachorro.prototype.raca);
console.log(pastorAlemao.raca);

