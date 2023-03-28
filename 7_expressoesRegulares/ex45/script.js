// Crie uma regex que valide nome de usuários no sistema;
// Aceita letras de a-z, _ e - , números de 0-9, mínimo de 3 caracteres e máximo de 16;
// Depois teste;

const validaUsuario = /^(?=.{3,16}$)[a-z0-9-_]/;
console.log(validaUsuario.test("alexandre123"))
console.log(validaUsuario.test("as"))
console.log(validaUsuario.test("111111111111111111111"))