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

form.addEventListener("keyup", handleChangeForm);
