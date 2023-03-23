const cachorro = {
  raca:'SRD',
  uivar:function(){
    console.log("Auuuuuuu")
  },
  rosnar:function(){
    console.log("grrrr")
  },
  setRaca: function(raca){
    this.raca = raca
  },
  getRaca:function(){
    return "A raca é " + this.raca
  }
}
console.log(cachorro.raca)
cachorro.setRaca('Pastor Alemão')
console.log(cachorro.raca)
console.log(cachorro.getRaca())