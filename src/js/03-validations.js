//ValidationDesing//
let validationDesign = false;
function validateDesignSection() {
  let inputsDesign = document.querySelectorAll('input[name="palette"]');
  inputsDesign.forEach((e) => {
    if (e.checked) {
      validationDesign = true;
    }
  });
}
validateDesignSection();

//ValidationFill
// let validationFill = false;
// function validateFillSection() {
//   // if(validateName && validateRole && validateEmail && ValidatePhoto) {
//   //   validationFill = true;
//   // } else {
//   //   !validationFill;
//   // }
//   //  }
// }
// validateFillSection();

//ValidationName
let inputName = document.querySelector(".fill__contact-name");
let validateName = false;
function validationName() {
  let valueName = data.name;
  let paragraphName = document.querySelector(".js-validationName");
  if (valueName === "") {
    paragraphName.classList.remove("none");
  } else {
    validateName = true;
    paragraphName.classList.add("none");
  }
}
inputName.addEventListener("blur", validationName);

//ValidationJob
let inputJob = document.querySelector(".fill__contact-role");
let validateJob = false;
function validationJob() {
  let valueJob = data.job;
  let paragraphJob = document.querySelector(".js-validationJob");
  if (valueJob === "") {
    paragraphJob.classList.remove("none");
  } else {
    validateJob = true;
    paragraphJob.classList.add("none");
  }
}
inputJob.addEventListener("blur", validationJob);

//ValidationEmail
let inputEmail = document.querySelector(".fill__contact-email");
let validateEmail = false;
function validationEmail() {
  let valueEmail = data.email;
  let validateEmail = valueEmail.match(
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  );
  let paragraphEmail = document.querySelector(".js-validationEmail");
  if (!validateEmail) {
    paragraphEmail.classList.remove("none");
  } else {
    validateEmail = true;
    paragraphEmail.classList.add("none");
  }
}
inputEmail.addEventListener("blur", validationEmail);

//ValidationImage
let inputPhoto = document.querySelector(".fill__contact-image");
let fileTypes = [
  "image / jpg",
  // "image / png",
  "image / jpeg",
  "image / gif",
  "image / svg",
];
let validationFileType = (file) => fileTypes.includes(file.type);
let validatePhoto = false;
function validationPhoto(event) {
  let paragraphPhoto = document.querySelector(".js-validationPhoto");
  let paragraphPhotoTwo = document.querySelector(".js-validationPhotoTwo");
  let paragraphPhotoThree = document.querySelector(".js-validationPhotoThree");
  if (inputPhoto.files.length === 0) {
    paragraphPhoto.classList.remove("none");
  } else {
    if (!validationFileType) {
      paragraphPhotoTwo.classList.remove("none");
    } else {
      if (inputPhoto.files.item(0).size >= 4096) {
        paragraphPhotoThree.classList.remove("none");
      } else {
        validatePhoto = true;
        paragraphPhoto.classList.add("none");
        paragraphPhotoTwo.classList.add("none");
        paragraphPhotoThree.classList.add("none");
      }
    }
  }
}
inputPhoto.addEventListener("change", validationPhoto);
