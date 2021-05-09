'use strict';

const menu = document.querySelector (".js-formcontainer-desing");
const design = document.querySelector (".design");

function expand (){
menu.classList.toggle('hidden')
}

design.addEventListener ('click', expand)

console.log ('Hola');