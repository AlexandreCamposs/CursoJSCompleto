const dominio = /[?www.]\w+\.com.br|.com/;
console.log(dominio.test("www.google.com"))
console.log(dominio.test("www.google.com.br"))
console.log(dominio.test("www.google"))
console.log(dominio.test("google.com.br"))