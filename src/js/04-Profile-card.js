function changedForm(ev) {
  const inputNameChange = ev.target.name;
  const changedValue = ev.target.value;

  data[inputNameChange] = changedValue;
  console.log(data);
}

function refreshData() {
  previewNameElemento.innerHTML =
    data.name === "" ? "Nombre Apellido" : data.name;
  previewRoleElemento.innerHTML =
    data.job === "" ? "Front-end developer" : data.job;
  previewPhoneElement.href = `https://api.whatsapp.com/send?phone=${data.phone}`;
  previewMailElement.href = `mailto:${data.email}`;
  previewLinkedinElement.href = data.linkedin;
  previewGithubElement.href = data.github;
}

function handleChangeForm(ev) {
  // 1. Cojo el nuevo valor y lo guardo en una variable

  handlerChangecolor(ev);
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
    profileName.style.borderLeft = "#438792 solid 5px";

    for (let i = 0; i < circleSocialnetwork.length; i++) {
      circleSocialnetwork[i].style.border = "#a2deaf solid 2px";
      circleSocialnetwork[i].style.color = "#114e4e";
    }
  }

  if (checked === "2") {
    previewNameElemento.style.color = "#420101";
    profileName.style.borderLeft = "#bd1010 solid 5px";

    for (let i = 0; i < circleSocialnetwork.length; i++) {
      circleSocialnetwork[i].style.border = "#E95626 solid 2px";
      circleSocialnetwork[i].style.color = "#bd1010";
    }
  }
  if (checked === "3") {
    previewNameElemento.style.color = "#EAB052";
    profileName.style.borderLeft = "#bfcdd0 solid 5px";
    for (let i = 0; i < circleSocialnetwork.length; i++) {
      circleSocialnetwork[i].style.border = "#d5d5d5 solid 2px";
      circleSocialnetwork[i].style.color = "#eab052";
    }
  }
}

//generalColors.addEventListener("click", handlerChangecolor);
form.addEventListener("change", handleChangeForm);

// let safeoption = localStorage.getItem("localstorage");
// if (safeoption === "1") {
//   body.classList.add("claro");
// } else {
//   body.classList.add("oscuro");
// }
