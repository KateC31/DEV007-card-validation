import validator from "./validator.js";
let creditCardNumber = ''

function esNumero(event) {
  const keyCode = event.which ? event.which : event.keyCode;
  const inputChar = String.fromCharCode(keyCode);

  if (!/^[0-9#]+$/.test(inputChar)) {
    event.preventDefault();
    return false;
  }

  return true;
}

document.getElementById("validacionTarjeta").addEventListener("submit", (event) => {
  event.preventDefault();

  const validación = validator.isValid(creditCardNumber);

  if (validación) {
    alert("Tu tarjeta es valida");
    creditCardNumber = ''
  } else {
    alert("Tu tarjeta no es valida");
    creditCardNumber = ''
  }
});

ingresarNumero.addEventListener("keydown", e => {
  if(creditCardNumber.length < 16){
    if(/\d/.test(e.key)){
      creditCardNumber += e.key
      e.target.value = validator.maskify(e.target.value)
    }else{
      alert("Solo se permite el uso de numeros")
    }
  }else{
    alert("porfavor introducir un numero valido de tarjeta de credito no superior a 16 digitos", location.reload())
  }
});
