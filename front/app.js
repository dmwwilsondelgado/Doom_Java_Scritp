let win  = window;
let dom = document;
console.log(window);

console.log(dom.header);

// APRENDIENDO nodes
// let header = document.querySelectorAll('header h1'); // buscar 
let header = document.querySelector('header h1'); // buscar 
console.log(header); // <header>...</header>


let body = document.querySelectorAll('main p'); // buscar
console.log(body); // <p>...</p>

let container = document.querySelector('.container'); // buscar por clase
console.log(container); // <div class="container">...</div>


let api = document.querySelector('#api'); // buscar
console.log(api); // <p id="api">...</p>

let api2 = document.querySelector('.api'); // buscar por clase



// buscar por fromularios

let form = document.forms; // buscar por fromularios
console.log(form); // <form>...</form>

let image = document.images; // buscar por imagenes
console.log(image); // <img src="..." alt="...">


let script  = document.scripts;
console.log(script); // <script src="..." type="text/javascript"></script>




let lista = document.querySelectorAll('ul.list > li.item'); // buscar por lista
console.log(lista); // <li class="item">...</li>

let cards = document.querySelectorAll('div.cards > div.card'); // buscar por cards
console.log(cards); // <div class="cards">...</div>



let buscarcard = document.querySelector('div.cards'); // buscar por card
console.log(buscarcard.childNodes); // <div class="cards">...</div>
console.log(buscarcard.children); // <div class="cards">...</div>


console.log("padre",buscarcard.parentNode); // <div class="cards">...</div>
console.log("hermanos",buscarcard.previousElementSibling); // <div class="cards">...</div>


// console.clear();
// let elemento = document.querySelector('#elemento2'); // buscar por id 
// elemento.textContent = "Nuevo Texto "; // cambiar el texto
// elemento.innerHTML = " <p>texto</p>  <p>texto</p>"; // cambiar el texto


let bod = document.querySelector("body");
setTimeout(() => {
    body.classList.add('bg-red')
}, 1600);

console.log(body.classList); // <body class="bg-red">...</body>
