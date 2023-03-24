// Crie uma classe que simule  um carro;
// Propriedades: marca, cor, gasolina restante;
// Crie um método de dirigir o carro, que vá diminuindo a gasolina gradativamente;
// E um de abastecer para aumentar a gasolina quando necessário;

class Carro {
  constructor(marca, cor, gasolinaRes,consumo) {
    this.marca = marca;
    this.cor = cor;
    this.gasolinaRes = gasolinaRes;
    this.consumo = consumo;
  }
  abastecer(litros){
    this.gasolinaRes += litros
  }
  dirigir(km){
    let litrosConsumidos =  km / this.consumo
    this.gasolinaRes -= litrosConsumidos
  }
}
let gol = new Carro('Gol','Azul',100, 14 )

gol.abastecer(50)
console.log(gol)

gol.dirigir(50)
console.log(gol)