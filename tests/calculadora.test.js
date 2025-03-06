const calculadora = require("../models/calculadora.js");

// tests/calculadora.test.js

const { dividir } = require('../models/calculadora');

test('deve retornar "Erro" quando o divisor é zero', () => {
  expect(dividir(5, 0)).toBe("Erro");
});

test('deve retornar "Erro" quando o dividendo é zero', () => {
  expect(dividir(0, 5)).toBe("Erro");
});

test('deve retornar "Erro" quando o dividendo não é um número', () => {
  expect(dividir("5", 2)).toBe("Erro");
});

test('deve retornar a divisão correta quando ambos os números são válidos', () => {
  expect(dividir(10, 2)).toBe(5);
});


