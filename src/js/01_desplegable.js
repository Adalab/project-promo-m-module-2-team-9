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
  // console.log("Click");
  // scrollUp.classList.add("fas_js");
  scrollUp.Target.classList.toggle("fas_js");
}
scrollUp.addEventListener("click", upsidedownIcon);

// const fillform = document.querySelector(".fill");

// const fillformHide = fillform.classList.add("fill_js");

// function formhideevent() {
//    if (fillform.classList.has('fill')) {
//     fillform.classList.add('fill_js');
//    }

// scrollUp.addEventListener("click", formhideevent);

const nameProfile = document.querySelector(".name_js");
const nameContact = document.querySelector(".fill__contact-name");
const nameValue = nameContact.value;

nameProfile.innerHTML = nameContact.addEventListener(
  "change",
  nameProfileaction
);

function nameProfileaction() {
  // nameContact.classList.toggle("fill__contact-name");
  if (nameProfile.classList.contains("fill__contact")) {
    nameProfile.classList.remove("fill__contact-name");
  } else {
    nameProfile === nameValue;
  }
}
