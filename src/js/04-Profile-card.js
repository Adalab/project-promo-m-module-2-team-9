function changedForm(ev) {
  const inputNameChange = ev.target.name;
  const changedValue = ev.target.value;

  data[inputNameChange] = changedValue;
  console.log(data);
}

function refreshData() {
  previewNameElemento.innerHTML =
    data.name === "" ? "Nombre apellidos" : data.name;
  previewRoleElemento.innerHTML =
    data.job === "" ? "Front-end developer" : data.job;
  previewPhoneElement.href = `https://api.whatsapp.com/send?phone=${data.phone}`;
  previewMailElement.href = `mailto:${data.email}`;
  previewLinkedinElement.href = data.linkedin;
  previewGithubElement.href = data.github;
}

function handleChangeForm(ev) {
  // 1. Cojo el nuevo valor y lo guardo en una variable

  changedForm(ev);

  // 2. Re-pinto la tarjeta de preview

  refreshData();
}

/* else if( inputChanged.name === 'mailto:saly@hotmail.com' ) {
        previewMailElemento.href = changedValue;
    }
    else if( inputChanged.name === 'mailto:saly@hotmail.com' ) {
        previewLinkedinElemento.href = changedValue;
    } */

function handlerChangecolor(ev) {
  const checked = ev.target.value;

  if (checked === "1") {
    previewNameElemento.style.color = "#114e4e";
    circleSocialnetwork.style.border = "#a2deaf solid 2px";
  }
  if (checked === "2") {
    previewNameElemento.style.color = "#420101";
    circleSocialnetwork.style.border = "#E95626 solid 2px";
  }
  if (checked === "3") {
    previewNameElemento.style.color = "yellow";
  }
}

generalColors.addEventListener("click", handlerChangecolor);

// let safeoption = localStorage.getItem("localstorage");
// if (safeoption === "1") {
//   body.classList.add("claro");
// } else {
//   body.classList.add("oscuro");
// }
