import validator from "./validator.js";
function esNumero(evt) {
  // code is the decimal ASCII representation of the pressed key.
  const code = evt.which ? evt.which : evt.keyCode;
  if (code === 8) {
    // backspace.
    return true;
  } else if (code >= 48 && code <= 57) {
    // is a number.
    
    return true;
  } else {
    // other keys.
    return false;
  }
}

document.getElementById("validacionTarjeta").addEventListener("submit", (event) => {
  event.preventDefault();
  const numeroDeTarjeta = document.getElementById("ingresarNumero").value;
  validator.isValid(numeroDeTarjeta);
  const enmascarado = validator.unmaskify(numeroDeTarjeta);
  const validación = validator.isValid(numeroDeTarjeta);
  document.getElementById("ingresarNumero").value = enmascarado;
  if (validación === true) {
    alert("Tu tarjeta es valida");
  } else {
    alert("Tu tarjeta no es valida");
  }
});

ingresarNumero.addEventListener("keydown", (event) => {
  const numeroDeTarjeta = document.getElementById("ingresarNumero").value;
  const enmascarado = validator.maskify(numeroDeTarjeta);
  document.getElementById("ingresarNumero").value = enmascarado;
});

window.esNumero = esNumero;
window.validator = validator;
