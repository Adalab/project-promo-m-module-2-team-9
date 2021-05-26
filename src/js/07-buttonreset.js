resetButton.addEventListener("click", reset);

function reset() {
  data = {
    palette: "1",
    name: "Nombre Apellido",
    job: "Front-end developer",
    phone: "",
    email: "",
    linkedin: "https://www.linkedin.com/in/",
    github: "https://github.com/",
    photo: "",
  };
  resetChangeColor();
  deleteValueFOrm();
  refreshData();
}
function resetChangeColor(ev) {
  const checked = document.querySelectorAll(".palette__wrapper");
  if (checked !== "1") {
    previewNameElemento.style.color = "#114e4e";
    profileName.style.borderLeft = "#438792 solid 5px";
  }
  for (let i = 0; i < circleSocialnetwork.length; i++) {
    circleSocialnetwork[i].style.border = "#a2deaf solid 2px";
    circleSocialnetwork[i].style.color = "#114e4e";
  }
}

function deleteValueFOrm() {
  const completedname = document.querySelector(".fill__contact-name");
  const role = document.querySelector(".fill__contact-role");
  const phone = document.querySelectorAll(".fill__contact");
  const mail = document.querySelector(".fill__contact-email");
  const linkedin = document.querySelector(".fill__contact-linkedin");
  const github = document.querySelector(".fill__contact-github");
  completedname.value = "";
  role.value = "";
  mail.value = "";
  phone.value = "";
  linkedin.value = "https://www.linkedin.com/in/";
  github.value = "https://github.com/";
}
