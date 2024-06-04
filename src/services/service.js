class ServicoExercicio {
 
  Somar(num1, num2){
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error('Não dá para somar letras');
    }
    return num1 + num2;
  }

  Subtrair(num1, num2){
    return num1 - num2;
  }

  Multiplicar(num1, num2){
    return num1 * num2;
  }

  Dividir(num1, num2){
    return num1 / num2;
  }

}

module.exports = ServicoExercicio;