// const scrollUp = document.querySelector(".arrow_js");

// const formFill = document.querySelector(".fill");

// const formHidden = document.querySelector(".fill_js");

// function eventHidden() {
//   return formHidden;
// }
// scrollUp.addEventListener("change", eventHidden);

const scrollUp = document.querySelector(".fas");
console.log("hola");

const scrollDown = scrollUp.classList.add("fas_js");

function upsidedownIcon() {
  return scrollUp.classList.add("fas_js");
}
scrollUp.addEventListener("click", upsidedownIcon);

//

const fillform = document.querySelector(".fill");

const fillformHide = fillform.classList.add("fill_js");

function formhideevent() {
   if (fillform.classList.has('fill')) {
    fillform.classList.add('fill_js');
   }

scrollUp.addEventListener("click", formhideevent);
