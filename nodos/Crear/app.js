let lista  = document.querySelector("#list");
let html = document.createElement("li");
let css = document.createElement("li");
let javascript = document.createElement("li");  

html.classList.add("item");
css.classList.add("item");
javascript.classList.add("item");

html.textContent = "Html";
css.textContent = "css";    
javascript.textContent = "JavaScript";

lista.appendChild(html);
lista.appendChild(css);
lista.appendChild(javascript);


lista.append(html,css,javascript);


// -----------------------------------------

let card = document.querySelector(".card");
let lista_card = document.querySelector("#list"); 
let titulo = document.createElement("h2");
titulo.textContent= "Titulo de la card";

console.log(card);
console.log(lista_card);


//vamos agregar titulo a la card
// card.insertBefore()


card.insertBefore(titulo,lista_card );

console.log(card);
console.log(lista_card);
// card.appendChild(titulo);

// ;

// ------------------------------------------

let beforeengin = document.createElement("li");
beforeengin.classList.add("item","before");
beforeengin.textContent = " lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.";

let afterbigin = document.createElement("li");
afterbigin.classList.add("item");
afterbigin.textContent = "Nuevo contenido ubicado al inicio de la lista ordenada";


let beforeend = document.createElement("li");
beforeend.classList.add("item","before");
beforeend.textContent = "Nuevo contenido ubicado al final de la lista desordenada";

let afterend = document.createElement("li");
afterend.classList.add("item");
afterend.textContent = "Nuevo contenido ubicado al inicio de la lista ordenada";

lista_card.insertAdjacentElement("beforebegin",beforeengin);
lista_card.insertAdjacentElement("beforeend",beforeend);
lista_card.insertAdjacentElement("afterbegin",afterbigin);
lista_card.insertAdjacentElement("afterend",afterend);

console.clear();


// ----------------------------------------- los dias de la semana son 

let card_dias = document.querySelector("#dias");
const dias = [
    {
        id: 1,
        nombre : "lunes",
        img : "https://picsum.photos/640/360",
        paragraf : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."
    },
    {
        id: 2,
        nombre : "martes",
        img : "https://picsum.photos/640/360",
        paragraf : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."
    },
    {
        id: 3,
        nombre : "miercoles",
        img : "https://picsum.photos/640/360",
        paragraf : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."
    },
    {
        id: 4,
        nombre : "jueves",
        img : "https://picsum.photos/640/360",
        paragraf : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."
    },
    {
        id: 5,
        nombre : "viernes",
        img : "https://picsum.photos/640/360",
        paragraf : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."
    },
    {
        id: 6,
        nombre : "sabado",
        img : "https://picsum.photos/640/360",
        paragraf : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."
    },
    {
        id: 7,
        nombre : "domingo",
        img : "https://picsum.photos/640/360",
        paragraf : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."
    },
];

//para recoree el objeto  se necita el map 

dias.map((dias) => {
    // console.log(dias);
    // vamos a crear elementos 
    let card = document.createElement("div");
    let card_header = document.createElement("div");
    let card_titulo = document.createElement("h2");
    let card_body = document.createElement("div");
    let img = document.createElement("img");
    // 
    card.classList.add("card");
    card_header.classList.add("card__header");
    card_titulo.classList.add("card__title");
    card_body.classList.add("card__body");
    img.classList.add("card__img");
    img.setAttribute("src", dias.img);

    //
    card_titulo.textContent = dias.nombre;

    card_header.appendChild(card_titulo);
    
    card.appendChild(card_header);
    card_body.appendChild(img);
    // vamos a crear la imagen
    card_dias.appendChild(card);
    card.appendChild(card_body);
    // card_body.append(img);
});
// console.log(dias);

