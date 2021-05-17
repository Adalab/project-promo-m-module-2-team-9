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
