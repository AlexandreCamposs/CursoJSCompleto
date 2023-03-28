// let novoElemento = document.createElement('p');
// let texto = document.createTextNode('Algum texto de teste');
// novoElemento.appendChild(texto);

// let elementoAlvo = document.querySelector('#titulo-principal');
// let elementoPai = document.querySelector('#container-principal');

// elementoPai.insertBefore(novoElemento, elementoAlvo);


let newElement = document.createElement('p');
let text = document.createTextNode("Texto de teste.");
newElement.appendChild(text);

let p = document.querySelector("#paragrafo-principal");
let pai = p.parentNode;

pai.appendChild(newElement)