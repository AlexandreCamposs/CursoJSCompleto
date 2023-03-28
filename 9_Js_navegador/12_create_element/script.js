let lista = document.createElement('ul');

for (i = 0; i < 5; i++) {
  let item = document.createElement('li');
  let texto = document.createTextNode('TEXTO DA LISTA' + i);

  lista.appendChild(item);
  item.appendChild(texto);
}
let container = document.getElementById('container-principal');

container.appendChild(lista);
