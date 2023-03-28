// insertBefore
// let novoElemento = document.createElement('p');
// let texto = document.createTextNode('Algum texto de teste');
// novoElemento.appendChild(texto);

// let elementoAlvo = document.querySelector('#titulo-principal');
// let elementoPai = document.querySelector('#container-principal');

// elementoPai.insertBefore(novoElemento, elementoAlvo);

// --------------------------------------------------------------------------
// appendChild
// let newElement = document.createElement('p');
// let text = document.createTextNode("Texto de teste.");
// newElement.appendChild(text);

// let p = document.querySelector("#paragrafo-principal");
// let pai = p.parentNode;

// pai.appendChild(newElement)
// ----------------------------------------------------------------------------
let newElement = document.createElement('p');
let text = document.createTextNode("TEXTO DE TESTE.");
newElement.appendChild(text);

let heading = document.querySelector("#titulo-principal");
let paiHeading = heading.parentNode;

paiHeading.replaceChild(newElement,heading);