'use strict';
function handleExpandDesing (){
menudesing.classList.toggle('hidden')
iconmenu.classList.toggle('jsmenu')
};

function handleExpandField () {
menufield.classList.toggle ('hidden')
iconmenu2.classList.toggle('jsmenu')
};

function handelExpandShare () {
    menushare.classList.toggle ('hidden')
    iconmenu3.classList.toggle('jsmenu')
    };

design.addEventListener ('click', handleExpandDesing)
field.addEventListener ('click', handleExpandField)
share.addEventListener ('click', handelExpandShare)
