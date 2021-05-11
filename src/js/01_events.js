// // const scrollUp = document.querySelector(".arrow_js");

// // const formFill = document.querySelector(".fill");

// // const formHidden = document.querySelector(".fill_js");

// // function eventHidden() {
// //   return formHidden;
// // }
// // scrollUp.addEventListener("change", eventHidden);

// const scrollUp = document.querySelector(".fas");
// console.log("hola");
// const scrollDown = scrollUp.classList.add("fas_js");

// function upsidedownIcon() {
//   // console.log("Click");
//   // scrollUp.classList.add("fas_js");
//   scrollUp.Target.classList.toggle("fas_js");
// }
// scrollUp.addEventListener("click", upsidedownIcon);

// // const fillform = document.querySelector(".fill");

// // const fillformHide = fillform.classList.add("fill_js");

// // function formhideevent() {
// // //    if (fillform.classList.has('fill')) {
// // //     fillform.classList.add('fill_js');
// // //    }

// // // scrollUp.addEventListener("click", formhideevent);
//////////////////////////////
const form = document.querySelector(".form");
const nameProfile = document.querySelector(".profile__name");
const nameContact = document.querySelector(".fill__contact-name");
const nameValue = nameContact.value;

function handleProfileChange(ev) {
  const nameChanged = ev.target;
  const changedValue = nameChanged.value;
  if (nameChanged.name === "name") {
    nameProfile.innerHTML = changedValue;
  }
}
form.addEventListener("change", handleProfileChange);
