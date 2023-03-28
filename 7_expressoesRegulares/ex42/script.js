// Crie uma regex que só aceite strings terminadas com ID;
// Depois teste;

const validarID = /\d+ID\b/;
console.log(validarID.test('21215ID'));
console.log(validarID.test('sds'));
console.log(validarID.test('54654dsID'));
