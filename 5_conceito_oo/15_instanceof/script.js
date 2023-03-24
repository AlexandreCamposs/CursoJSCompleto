class Mamifero{
  constructor(patas){
    this.patas = patas
  }
}

let coitote = new Mamifero(4);
console.log(coitote)

class Cachorro extends Mamifero{
  constructor(patas,raca){
    super(patas);
    this.raca = raca
  }
  latir(){
    console.log("au auuu")
  }
}
console.log(Cachorro)

let pug = new Cachorro(4,'Pug')
console.log(pug)

console.log(new Cachorro instanceof Mamifero)
console.log(coitote instanceof Cachorro)
console.log(coitote instanceof Mamifero)