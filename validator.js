const validator = {
  isValid: function (creditCardNumber) {
    if(creditCardNumber === 0 || creditCardNumber.length === 0 || !creditCardNumber) return false
    const tarjeta = creditCardNumber.split("");
    const reversarTarjeta = tarjeta.reverse();
    const resultado = [];
    for (let i = 0; i < reversarTarjeta.length; i++) {
      const posicionNumero = i + 1;
      if (posicionNumero % 2 === 0) {
        resultado.push(reversarTarjeta[i] * 2);
        //Todos los numeros mayores a 10 se sumaran entre ellos
        if (resultado[i] >= 10) {
          const cadenareverse = resultado[i].toString();
          resultado[i] =
            parseInt(cadenareverse[0]) + parseInt(cadenareverse[1]);
        } 
      } else {
        const stringANumero = parseInt(reversarTarjeta[i]);
        resultado.push(stringANumero);
      }
    }
    // SUMATORIA DE DIGITOS Y DIVIDIR /10 EL RESIDUO
    let sumatoria = 0;
    for (let i = 0; i < resultado.length; i++) {
      sumatoria = resultado[i] + sumatoria;
    }
    if (sumatoria % 10 === 0) {
      //alert("Tu tarjeta es valida");
      return true;
    } 
    //alert("Tu tarjeta no es valida");
    return false;
  },
  maskify: function (creditCardNumber) {
    return creditCardNumber.slice(0,-4).replace(/[0-9 a-z A-Z]/g, "#")+ creditCardNumber.slice(-4)

  }
};

export default validator;
