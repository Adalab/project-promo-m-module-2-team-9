//'use strict';

//Eventos para desplegar secciones con requisitos
let selectionDesign = document.querySelector(".js-design");
let selectionDesignButton = document.querySelector(".js-designButton");
function collapseValidationDesign() {
  selectionDesign.classList.toggle("none");
  selectionDesignButton.classList.toggle("arrowPointer");
}
selectionDesignButton.addEventListener("click", collapseValidationDesign);

let selectionFill = document.querySelector(".js-fill");
let selectionFillButton = document.querySelector(".js-fillButton");
let messageFill = document.querySelector(".js-tooltipFill");
function collapseValidationFill(e) {
  if (validationDesign === false) {
    messageFill.classList.toggle("none");
    messageFill.style.top = e.clientY + "px";
    messageFill.style.left = e.clientX + "px";
    setTimeout(function () {
      messageFill.classList.toggle("none");
    }, 3000);
  } else {
    selectionFill.classList.toggle("none");
    selectionFillButton.classList.toggle("arrowPointer");
  }
}
selectionFillButton.addEventListener("click", validateDesignSection);
selectionFillButton.addEventListener("click", collapseValidationFill);

let selectionShare = document.querySelector(".js-share");
let selectionShareButton = document.querySelector(".js-shareButton");
//let messageShare = document.querySelector(".js-tooltipShare");
function collapseValidationShare() {
  selectionShare.classList.toggle("none");
  selectionShareButton.classList.toggle("arrowPointer");
}
//if (validationDesign === false || validationFill === false) {
//messageShare.classList.toggle("none");
//} else {
//selectionShare.classList.toggle("none");
//selectionShareButton.classList.toggle("arrowPointer");
//}
//}
selectionShareButton.addEventListener("click", collapseValidationShare);

//Validation
let validationDesign = false;
function validateDesignSection() {
  let inputsDesign = document.querySelectorAll('input[name="colors"]');
  inputsDesign.forEach((e) => {
    if (e.checked) {
      validationDesign = true;
    }
  });
}
validateDesignSection();
