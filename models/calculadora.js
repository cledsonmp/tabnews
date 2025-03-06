function somar(numero1,numero2 ){
    if(typeof numero1 !== "number"){
        return "Erro";
    }
    return numero1  + numero2;
}

// models/calculadora.js

function dividir(numero1, numero2) {
    if (typeof numero1 !== "number" || numero1 === 0 || numero2 === 0) {
      return "Erro";
    }
    return numero1 / numero2;
  }
  
  module.exports = { dividir };

  
  
exports.somar = somar;
exports.dividir = dividir; 