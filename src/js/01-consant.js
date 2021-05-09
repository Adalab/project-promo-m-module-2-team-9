'use strict';

const menu = document.querySelector (".js-formcontainer-desing");
const design = document.querySelector (".js-desing");

function expand (){
menu.classList.toggle('hidden')
}

design.addEventListener ('click', expand)

console.log ('Hola');