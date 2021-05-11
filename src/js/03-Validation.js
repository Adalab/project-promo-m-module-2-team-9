//ValidationDesing//
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