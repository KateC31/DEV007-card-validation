import validator from "./validator.js";
let creditCardNumber = "";

document
  .getElementById("validacionTarjeta")
  .addEventListener("submit", (event) => {
    event.preventDefault();

    const validación = validator.isValid(creditCardNumber);

    if (validación) {
      alert("Tu tarjeta es valida");
      creditCardNumber = "";
    } else {
      alert("Tu tarjeta no es valida");
      creditCardNumber = "";
    }
  });

document.getElementById("ingresarNumero").addEventListener("keydown", (e) => {
  if (creditCardNumber.length < 16) {
    if (/\d/.test(e.key)) {
      creditCardNumber += e.key;
    } else if (e.key === "Backspace") {
           creditCardNumber = creditCardNumber.slice(0, -1);
    } else {
      alert("Solo se permite el uso de numeros");
    }
    e.preventDefault();
    const numeroEnmascarado = validator.maskify(creditCardNumber);
    document.getElementById("ingresarNumero").value = numeroEnmascarado;
  } else {
    alert(
      "porfavor introducir un numero valido de tarjeta de credito no superior a 16 digitos",
      location.reload()
    );
  }
});
