const password = document.getElementById("passwordModal");
const mail = document.getElementById("mailModal");
const check = document.getElementById("checkModal");
const submit = document.getElementById("submitModal");
submit.addEventListener("click", validacion);

function validacion() {
  if (password.value.length < 6) {
    alert("la contraseña debe tener mínimo 6 carácteres");
  }

  if (!password.value.match(/[A-Z]/)) {
    alert("la contraseña debe tener al menos un carácter en mayúscula");
  }
  if (!password.value.match(/[a-z]/)) {
    alert("la contraseña debe tener al menos un carácter en minúscula");
  }
  if (!password.value.match(/[0-9]/)) {
    alert("la contraseña debe tener al menos un número");
  }
}
