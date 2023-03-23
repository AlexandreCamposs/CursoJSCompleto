let cachorro = {
  patas: 4,
  raca: 'SRD',
  latir: function () {
    console.log('auau');
  },
};

let labrador = Object.create(cachorro);
console.log(labrador.patas);
console.log(labrador);

labrador.raca = 'labrador';
console.log(labrador);

let pastor = Object.create(cachorro)
console.log(pastor)

pastor.raca = "Pastor Alemçao"
console.log(pastor)
