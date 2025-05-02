import { esvalido } from "./modulo.js";

// let btn = document.querySelector('#btn_validar');
const formulario = document.querySelector("form");
const nombre = document.querySelector('[name="nombre"]');
const apellido = document.querySelector('[name="apellido"]');
const telefono = document.querySelector('[name="telefono"]');
const documento = document.querySelector('[name="documento"]');
const usuario = document.querySelector('[name="usuario"]');
const contraseña = document.querySelector('[name="contraseña"]');
const politicas = document.querySelector("#politicas");
const boton = document.querySelector("#btn_validar");
const ciudad = document.querySelector("select");

// Validación al enviar formulario
const validar = (event) => {
  event.preventDefault();
  let hayErrores = false;

  // Validar nombre
  if (nombre.value.trim() === "") {
    if (nombre.nextElementSibling) nombre.nextElementSibling.remove();
    nombre.style.border = "3px solid red";
    const mensaje = document.createElement("span");
    mensaje.classList.add("error-message");
    mensaje.textContent = "EL campo es obligatorio";
    nombre.insertAdjacentElement("afterend", mensaje);
    hayErrores = true;
  } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre.value)) {
    alert("El campo nombre solo debe contener letras");
    nombre.style.border = "3px solid red";
    hayErrores = true;
  }

  // Validar apellido
  if (apellido.value.trim() === "") {
    if (apellido.nextElementSibling) apellido.nextElementSibling.remove();
    apellido.style.border = "3px solid red";
    const mensaje = document.createElement("span");
    mensaje.classList.add("error-message");
    mensaje.textContent = "EL campo es obligatorio";
    apellido.insertAdjacentElement("afterend", mensaje);
    hayErrores = true;
  } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(apellido.value)) {
    alert("El campo apellido solo debe contener letras");
    apellido.style.border = "3px solid red";
    hayErrores = true;
  }

  // Validar teléfono
  if (telefono.value.trim() === "") {
    if (telefono.nextElementSibling) telefono.nextElementSibling.remove();
    telefono.style.border = "3px solid red";
    const mensaje = document.createElement("span");
    mensaje.classList.add("error-message");
    mensaje.textContent = "EL campo es obligatorio";
    telefono.insertAdjacentElement("afterend", mensaje);
    hayErrores = true;
  } else if (!/^[0-9]+$/.test(telefono.value)) {
    alert("El campo teléfono solo debe contener números");
    telefono.style.border = "3px solid red";
    hayErrores = true;
  }

  // Validar ciudad
  if (ciudad.value === "Seleccione") {
    if (ciudad.nextElementSibling) ciudad.nextElementSibling.remove();
    ciudad.style.border = "3px solid red";
    const mensaje = document.createElement("span");
    mensaje.classList.add("error-message");
    mensaje.textContent = "Debe seleccionar una ciudad";
    ciudad.insertAdjacentElement("afterend", mensaje);
    hayErrores = true;
  }

  // Validar documento
  if (documento.value.trim() === "") {
    if (documento.nextElementSibling) documento.nextElementSibling.remove();
    documento.style.border = "3px solid red";
    const mensaje = document.createElement("span");
    mensaje.classList.add("error-message");
    mensaje.textContent = "EL campo es obligatorio";
    documento.insertAdjacentElement("afterend", mensaje);
    hayErrores = true;
  } else if (!/^[0-9]+$/.test(documento.value)) {
    alert("El campo documento solo debe contener números");
    documento.style.border = "3px solid red";
    hayErrores = true;
  }

  // Validar usuario
  if (usuario.value.trim() === "") {
    if (usuario.nextElementSibling) usuario.nextElementSibling.remove();
    usuario.style.border = "3px solid red";
    const mensaje = document.createElement("span");
    mensaje.classList.add("error-message");
    mensaje.textContent = "EL campo es obligatorio";
    usuario.insertAdjacentElement("afterend", mensaje);
    hayErrores = true;
  }

  // Validar contraseña
  if (contraseña.value.trim() === "") {
    if (contraseña.nextElementSibling) contraseña.nextElementSibling.remove();
    contraseña.style.border = "3px solid red";
    const mensaje = document.createElement("span");
    mensaje.classList.add("error-message");
    mensaje.textContent = "EL campo es obligatorio";
    contraseña.insertAdjacentElement("afterend", mensaje);
    hayErrores = true;
  }


  if (!hayErrores) {
    alert("Formulario enviado correctamente");
    formulario.reset();
  }
};

// Validaciones en tiempo real
nombre.addEventListener("keydown", (caracter) => {
  const tecla = caracter.key;
  if (
    !/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]$/.test(tecla) &&
    tecla !== "Backspace" &&
    tecla !== "Tab"
  ) {
    caracter.preventDefault();
  }
});

apellido.addEventListener("keydown", (caracter) => {
  const tecla = caracter.key;
  if (
    !/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]$/.test(tecla) &&
    tecla !== "Backspace" &&
    tecla !== "Tab"
  ) {
    caracter.preventDefault();
  }
});

telefono.addEventListener("keydown", (caracter) => {
  const tecla = caracter.key;
  if (!/^[0-9]$/.test(tecla) && tecla !== "Backspace" && tecla !== "Tab") {
    caracter.preventDefault();
  }
});

documento.addEventListener("keydown", (caracter) => {
  const tecla = caracter.key;
  if (!/^[0-9]$/.test(tecla) && tecla !== "Backspace" && tecla !== "Tab") {
    caracter.preventDefault();
  }
});

const limpiar = (event) => {
  if (event.target.value !== "") {
    event.target.style.border = "1px solid var(--heavyMetal)";
    const errorMsg = event.target.nextElementSibling;
    if (errorMsg && errorMsg.classList.contains("error-message")) {
      errorMsg.remove();
    }
  }
};

const acepta = () => {
  if (!politicas.checked) {
    boton.setAttribute("disabled", "");
  } else {
    boton.removeAttribute("disabled");
  }
};


addEventListener("DOMContentLoaded", acepta);

politicas.addEventListener("change", acepta);

formulario.addEventListener("submit", validar);

nombre.addEventListener("blur", limpiar);
apellido.addEventListener("blur", limpiar);
telefono.addEventListener("blur", limpiar);
documento.addEventListener("blur", limpiar);
usuario.addEventListener("blur", limpiar);
contraseña.addEventListener("blur", limpiar);
ciudad.addEventListener("change", limpiar);

