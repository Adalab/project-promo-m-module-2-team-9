'use strict';
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
