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
// //    if (fillform.classList.has('fill')) {
// //     fillform.classList.add('fill_js');
// //    }

// // scrollUp.addEventListener("click", formhideevent);

const form = document.querySelector(".form");
const nameProfile = document.querySelector(".profile_name");
const nameContact = document.querySelector(".fill__contact-name");
const nameValue = nameContact.value;

function handleProfileChange(ev) {
  const inputChanged = ev.target;
  const changedValue = inputChanged.value;

  if (inputChanged.name === "name") {
    nameProfile.innerHTML = nameValue;
  }

  console.log("Target", ev.target);
  console.log("Current Target", ev.currentTarget);
}

form.addEventListener("change", handleProfileChange);

// /* Form */
// /*
// const inputName = document.querySelector('.js-name');
// const handleChangeName = (ev) => {
//     console.log( 'Target', ev.target );
//     console.log( 'Current Target', ev.currentTarget );
// };
// inputName.addEventListener('change', handleChangeName);
// */

// const form = document.querySelector('.js-form');
// const previewNameElement = document.querySelector('.js-preview-name');

// function handleChangeForm(ev) {
//     const inputChanged = ev.target;
//     const changedValue = inputChanged.value;

//     if( inputChanged.name === 'name' ) {
//         previewNameElement.innerHTML = changedValue;
//     }
//     else if( inputChanged.name === 'linkedin' ) {
//         previewLinkedinElement.href = changedValue;
//     }

//     console.log( 'Target', ev.target );
//     console.log( 'Current Target', ev.currentTarget );
// }

// form.addEventListener('change', handleChangeForm);

// console.log('>> Form Ready :)');
