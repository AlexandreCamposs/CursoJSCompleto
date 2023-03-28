const validaDataNasc = /[0-31]{2}[/][0-12]{2}[/][1920-2020]{4}/;
console.log(validaDataNasc.test("05/02/2000"))
console.log(validaDataNasc.test("5/2/2000"))
console.log(validaDataNasc.test("05-02-2000"))
console.log(validaDataNasc.test("05/02/00"))
console.log(validaDataNasc.test("12/12/1999"))
console.log(validaDataNasc.test("99/99/9999"))
console.log(validaDataNasc.test("31/00/2010"))