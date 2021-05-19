//Eventos para desplegar secciones con requisitos

function collapseValidationDesign() {
  selectionDesign.classList.toggle("none");
  selectionDesignButton.classList.toggle("arrowPointer");
}
selectionDesignButton.addEventListener("click", collapseValidationDesign);

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
