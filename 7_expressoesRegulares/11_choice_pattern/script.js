const reg = /\w+:(Alexandre|João|Mario)/; //Nome: ddsadas
console.log(reg.test("Nome:Alexandre"))
console.log(reg.test("Nome:João"))
console.log(reg.test("Nome:joão"))
console.log(reg.test("Nome:Mario"))