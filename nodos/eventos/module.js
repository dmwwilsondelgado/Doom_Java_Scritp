export const validar = (e) => {
    e.prevenytDefault();
    console.log(e.target.children);
    const campos = [...e.target].filter((elemento)=>{
        if (elemento.hasAttribute('required')) {
            return elemento;
            
        }
    })
    campos.forEach((campo)=>{
        if (campo.value === '') {
            campo.classList.add('error');
            alert(`El campo ${campo.name} es obligatorio`);
            campo.focus();
            return false;
        }
        if (campo.nextElementSibling) {
            campo.nextElementSibling.remove();
        }
        let span = document.createElement('span');
        span.textContent = 'Campo Validado  Correctamente ';
        campo.insertAdjacentElement('afterend', span);
    })
    switch (elemento.tagName) {
        case 'INPUT':
            if (elemento.tagName === '') {
                elemento.classList.add('error');
                alert(`El campo ${elemento.name} es obligatorio`);
                elemento.focus();
                return false;
            }
            
            break;
    
        default:
            break;
        case 'SELECT':
            if (elemento.value === '') {
                elemento.classList.add('error');
                alert(`El campo ${elemento.name} es obligatorio`);
                elemento.focus();
                return false;
            }
            if (elemento.nextElementSibling) {
                elemento.nextElementSibling.remove();
            }
            let span = document.createElement('span');
            span.classList.add('ok');
            span.textContent = 'Campo Validado  Correctamente  ';
            elemento.insertAdjacentElement('afterend', span);
            break;
    }
}