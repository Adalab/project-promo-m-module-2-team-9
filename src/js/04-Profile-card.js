const previewemailElemento = document.querySelector(".email_js");
const previewphoneElemento = document.querySelector(".mobile_js");
const previewLinkedinElemento = document.querySelector(".linkedin_js");
const previewgithubElemento = document.querySelector(".github_js");

function handelChangeform(ev) {
  const inputChanged = ev.target;
  const changedValue = inputChanged.value;
  if (inputChanged.name === "fullname") {
    previewNameElemento.innerHTML = changedValue;
  }
  if (inputChanged.name === "role") {
    previewRoleElemento.innerHTML = changedValue;
  }
  if (inputChanged.name === "email") {
    previewemailElemento.href = changedValue;
  }
  if (inputChanged.name === "phone") {
    previewphoneElemento.href = changedValue;
  }
}
form.addEventListener("keyup", handelChangeform);
