const calculadora = require("../../models/calculadoraNova.js");

test("nome do teste", function () {
  console.log("e assim, funciona com funcao anonima?");
});

test("segundo teste", () => {
  console.log("e assim, com aero functions?");
});

test("espero que 1 seja 1", () => {
  expect(1).toBe(1);
});

test("somar 2+2", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("somar banana +2", () => {
  const resultado = calculadora.somar("banana", 2);
  expect(resultado).toBe("Erro");
});
