class ServicoExercicio {

  Somar(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error('Não dá para somar letras');
    }
    return num1 + num2;
  }

  Subtrair(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error('Não dá para subtrair letras');
    }
    if (num1 === 0) {
      throw new Error('Não é possível fazer a subtração por nulo');
    }
    return num1 - num2;
  }

  Multiplicar(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error('Não multiplica caracteres');
    }
    return num1 * num2;
  }

  Dividir(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error('Não dá para dividir letras');
    }
    if (num2 === null) {
      throw new Error('Não é possível fazer a divisão por zero');
    }
    return num1 / num2;
  }

}

module.exports = (ServicoExercicio)
//module.exports = (Somar,Subtrair,Multiplicar,Dividir)
