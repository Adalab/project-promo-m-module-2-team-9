'use strict';

const menudesing = document.querySelector (".js-formcontainer-desing");
const menufield = document.querySelector (".js-formcontainer-field");
const menushare = document.querySelector (".js-formcontainer-share")
const field = document.querySelector (".js-field");
const design = document.querySelector (".js-desing");
const share = document.querySelector ("js-share");
const iconmenudesing = document.querySelector (".fa-chevron-up");


function expanddesing (){
menudesing.classList.toggle('hidden')
iconmenu.classList.toggle('jsmenu')
}
function expandfield (){
    menufield.classList.toggle('hidden')
}
function expandshare (){
menushare.classList.toggle('hidden')
}
    

design.addEventListener ('click', expanddesing)
field.addEventListener ('click', expandfield)
share.addEventListener ('click', expandshare)

