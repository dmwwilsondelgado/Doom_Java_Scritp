//variables
const btn = document.querySelector('#btn_validar');



const formulario = document.querySelector('form');
const nombre = document.querySelector('[name = "Nombre"]');
const password = document.querySelector('[name = "Contraseña"]');
const apellido = document.querySelector('[name = "Apellido"]');
const telefono = document.querySelector('[name = "Telefono"]');
const documento = document.querySelector('[name = "Documento"]');
const usuario = document.querySelector('[name = "Usuario"]');



//funciones
const validar = () => {

    event.preventDefault(); // previene el comportamiento por defecto del formulario
    alert('Hola, bienvenido a la validacion de formularios');
    if (nombre.value === '') {
        alert('El campo nombre es obligatorio');
        nombre.focus();
        return false;
    }
    if (apellido.value === '') {
        alert('El campo apellido es obligatorio');
        apellido.focus();
        return false;
    }
    if (telefono.value === '') {
        alert('El campo telefono es obligatorio');
        telefono.focus();
        return false;
    }
}


// evenentos


formulario.addEventListener('submit', validar);

//escucha el evento click del boton
// btn.addEventListener('submit', () => {
//     event.preventDefault(); // previene el comportamiento por defecto del formulario
//     alert('Hola, bienvenido a la validacion de formularios');
// });
