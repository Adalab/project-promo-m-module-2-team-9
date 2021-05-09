'use strict';
const menudesing = document.querySelector (".js-formcontainer-desing");
const menufield = document.querySelector (".js-formcontainer-field");
const menushare = document.querySelector (".js-formcontainer-share")
const field = document.querySelector (".js-field");
const design = document.querySelector (".js-desing");
const share = document.querySelector (".js-share")
const iconmenu = document.querySelector (".fa-chevron-up");
const iconmenu2 = document.querySelector (".js-2");
const iconmenu3 = document.querySelector (".js-3");

function expanddesing (){
menudesing.classList.toggle('hidden')
iconmenu.classList.toggle('jsmenu')
};

function expandfield () {
menufield.classList.toggle ('hidden')
iconmenu2.classList.toggle('jsmenu')
};

function expandshare () {
    menushare.classList.toggle ('hidden')
    iconmenu3.classList.toggle('jsmenu')
    };

design.addEventListener ('click', expanddesing)
field.addEventListener ('click', expandfield)
share.addEventListener ('click', expandshare)


