console.log('1-const e let');
var x = 10;
var y = 15;

if (y > 10) {
  var x = 5;
  console.log(x);
}
console.log(x);

let a = 10;
let b = 15;

if (b > 10) {
  let a = 5;
  console.log(a);
}
console.log(a);

let i = 100;

for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.log(i);

//2- Arrow function
console.log('\n\n\n2-Arrow function');
const sum = function sum(a, b) {
  return a + b;
};
const arrowSum = (x, y) => y + x;

console.log(sum(1, 5));
console.log(arrowSum(10, 10));

const greeting = (name) => {
  if (name) {
    return 'Olá ' + name + '!';
  } else {
    return 'Olá !';
  }
};
console.log(greeting('Alexandre'));
console.log(greeting());

const testeArrow = () => console.log('Testou!!');

testeArrow();

const user = {
  name: 'Ale',
  sayUserName() {
    var self = this;
    setTimeout(function () {
      console.log(self);
      console.log('usarname' + self.name);
    }, 500);
  },
  sayUserNameArrow() {
    setTimeout(() => {
      console.log(this);
      console.log('usarname' + this.name);
    }, 500);
  },
};
// user.sayUserName()
// user.sayUserNameArrow()

const user2 = {
  name: 'Ale',
  sayUserName() {
    setTimeout(function () {
      console.log(this);
      console.log('usarname' + this.name);
    }, 500);
  },
};
// user2.sayUserName()

console.log('\n\n\n3-Método filter');

const arr = [1, 2, 3, 4, 5];

const newArr = arr.filter((n) => {
  if (n >= 3) {
    return n;
  }
});
console.log(newArr);

const names = [
  {
    name: 'Alexandre',
    profissão: 'Programador',
    available: true,
  },
  {
    name: 'Samuel',
    profissão: 'Programador',
    available: false,
  },
  {
    name: 'Carlos',
    profissão: 'Programador',
    available: false,
  },
];

const available = names.filter((name) => name.available);
console.log(available);

const notAvailable = names.filter((name) => !name.available);
console.log(notAvailable);

console.log('4-Método map');

const products = [
  {
    name: 'camisa',
    price: 29.99,
    category: 'roupas',
  },
  { name: 'Calça', price: 29.99, category: 'roupas' },
  { name: 'fogão', price: 999.99, category: 'eletro' },
  { name: 'boné', price: 123.99, category: 'roupas' },
];
console.log(products);
products.map((product) => {
  if (product.category === 'roupas') {
    product.onSale = true;
  }
});

console.log('\n\n\n5-Template literals');
let nome = 'Alexandre';
let idade = '30';
let profissao = 'programador';

console.log('O ' + nome + ' tem ' + idade + ' anos e é ' + profissao);
console.log(`O ${nome} tem ${idade} e é ${profissao}`);

console.log('\n\n\n6-Destructuring');

const fruits = ['maça', 'laranja', 'mamão'];
console.log(fruits);
const [f1, f2, f3] = fruits;
console.log(f1);
console.log(f3);

const productDetails = {
  name: 'Mouse',
  price: 29.99,
  category: 'Periféricos',
  color: 'Blue',
};
console.log(productDetails);

const {
  name: productName,
  price,
  category: productCategory,
  color,
} = productDetails;
console.log(productDetails);
console.log(
  `O nome do produto é ${productName}, custa R$${price} pertence a categoria ${productCategory} e tem a cor ${color}`,
);

console.log('\n\n\n 7-Spred operator');
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = [...a1, ...a2];
console.log(a3);

const a4 = [0, ...a1, ...a2];
console.log(a4);

const carName = { name: 'Gol' };
const carBrand = { brand: 'vw' };
const otherInfo = { km: 1000 };

const car = { ...carName, ...carBrand, ...otherInfo };
console.log(car);

console.log('\n\n\n8-classes');

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  productWithDiscount(discount) {
    return this.price * ((100 - discount) / 100);
  }
}

const shirt = new Product('camisa', 100);
console.log(shirt);

console.log(shirt.productWithDiscount(50));

console.log('\n\n\n8-Herança');

class ProductWithAttribute extends Product {
  constructor(name, price, colors) {
    super(name, price);
    this.colors = colors;
  }
  showColors() {
    console.log('as cores são');
    this.colors.forEach((color) => {
      console.log(color);
    });
  }
}

const hat = new ProductWithAttribute('chapeu',29.99,['preto','azul','verde'])

console.log(hat.name);
console.log(hat.productWithDiscount(30));
hat.showColors();
