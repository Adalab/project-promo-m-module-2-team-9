let dataSave = [];
dataSave = JSON.parse(localStorage.getItem("profile"));

function printAfterReload() {
  if (dataSave !== null) {
    refreshData2();
  }
}

function refreshData2() {
  namelocal.value = dataSave.name;
  jobLocal.value = dataSave.job;
  emailLocal.value = dataSave.email;
  phoneLocal.value = dataSave.phone;
  linkedinLocal.value = dataSave.linkedin;
  githubLocal.value = dataSave.github;
  previewNameElemento.innerHTML = dataSave.name;
  previewRoleElemento.innerHTML = dataSave.job;
  previewPhoneElement.href =
    "https://api.whatsapp.com/send?phone=" + `${dataSave.phone}`;
  previewMailElement.href = "mailto:" + `${dataSave.email}`;

  previewLinkedinElement.href =
    "https://www.linkedin.com/in/" + `${dataSave.linkedin}`;
  previewGithubElement.href = "https://github.com/" + `${dataSave.github}`;
}

printAfterReload();
