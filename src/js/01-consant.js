'use strict';

const menu = document.querySelector (".js-formcontainer-desing");
const design = document.querySelector (".js-desing");
const iconmenu = document.querySelector (".fa-chevron-up");

function expand (){
menu.classList.toggle('hidden')
iconmenu.classList.toggle('jsmenu')
}

design.addEventListener ('click', expand)

