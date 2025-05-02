// export const validar = (recibir)=>
// {
//     e.preventDefault()
//     console.log(e.target.children);
    
//     const campos = [...e.target].filter ((elemento) => {
//         return elemento.hasAttribute('required')
//     });

//     campos.forEach(campo => 
//         {
//             console.log(campo);
//             if (campo.value === "") {
//                 campo.classList.add("error")
//             }

//             console.log(campo.selectedIndex);
            
//         });
// }

// export const validarr = (e) => {
//     const obj = new object();
//     e.prevenytDefault();
//     console.log(e.target.children);
//     const Objet = [
//         'input' = 'esta retornando un input '
//     ];
    
//     const campos = [...e.target].filter((elemento)=>{
//         if (elemento.hasAttribute('required')) {
//             return elemento;
            
//         }
//     })
//     campos.forEach((campo)=>{
//         if (campo.value === '') {
//             campo.classList.add('error');
//             alert(`El campo ${campo.name} es obligatorio`);
//             campo.focus();
//             return false;
//         }
//         if (campo.nextElementSibling) {
//             campo.nextElementSibling.remove();
//         }
//         let span = document.createElement('span');
//         span.textContent = 'Campo Validado  Correctamente ';
//         campo.insertAdjacentElement('afterend', span);
//     })
//     switch (elemento.tagName) {
//         case 'INPUT':
//             if (elemento.tagName === '') {
//                 elemento.classList.add('error');
//                 alert(`El campo ${elemento.name} es obligatorio`);
//                 elemento.focus();
//                 return false;
//             }
            
//             break;
    
//         default:
//             break;
//         case 'SELECT':
//             if (elemento.value === '') {
//                 elemento.classList.add('error');
//                 alert(`El campo ${elemento.name} es obligatorio`);
//                 elemento.focus();
//                 return false;
//             }
//             if (elemento.nextElementSibling) {
//                 elemento.nextElementSibling.remove();
//             }
//             let span = document.createElement('span');
//             span.classList.add('ok');
//             span.textContent = 'Campo Validado  Correctamente  ';
//             elemento.insertAdjacentElement('afterend', span);
//             break;

//     }
//     const validar_radio = (e) => {
//         const radio = document.querySelectorAll('[name="sexo"]');
//         let checked = false;
//         radio.forEach((elemento) => {
//             if (elemento.checked) {
//                 checked = true;
//             }
//         })
//         if (!checked) {
//             alert('El campo sexo es obligatorio');
//             return false;
//         }
//     }
//     console.log(validar_radio);
// }

export const validamos = (recibir) => {
    recibir.prevenytDefault();
    console.log(recibir.target.children);
    const campos = [
        ...recibir.target.children
    ].filter((elemento)=>{
        if (elemento.hasAttribute('required')) {
            return elemento;
            
        }
    })
    const radios = [...campos].filter((elemento)=>{
        if(elemento.hasAttribute('required')){
            return elemento.hasAttribute === 'radio';
        }
    })

    // validamos que tengmos almenos un campo selecionado 
    const checkbox = [...campos].filter((elemento)=> elemento.type === 'checkbox');
    
    const campo_radio  =  radios.find((radio)=> radio.checked) || [];

    console.log(campo_radio);

    const campos_checkbox = checkbox.filter((elemento)=>elemento.checked);
    if (campos_checkbox.length > 3){
        obj[checkbox[0].name] = "";
    }else{
        // se le asigna el valor de los checkbox seleccionados
    }

    // de no tener un campo de tipo radio selecionado se le agrega la clase error y se le muestra un mensaje de alerta
    if (campo_radio.length === 0) {
        radios.classList.add('error');
        alert('El campo sexo es obligatorio');
        return false;
    }
}