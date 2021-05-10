//COLLAPSABLE FORM

const designButton = document.querySelector("#js-designButton");
const fillButton = document.querySelector("#js-fillButton");
const shareButton = document.querySelector("#js-shareButton");

const designExpand = document.querySelector(".design__expand");
designExpand.classList.replace("design__expand", "js-collapse");

const shareExpand = document.querySelector(".share__expand");
shareExpand.classList.replace("share__expand", "js-collapse");

function showDesignFieldset() {
  designExpand.classList.toggle("design__expand");
}

function showShareFieldset() {
  shareExpand.classList.toggle("share__expand");
}

designButton.addEventListener("click", showDesignFieldset);
shareButton.addEventListener("click", showShareFieldset);

//PROFILE CARDS
/*
const person = {
  firstName,
  lastName,
};

console.log(person["name"]);

//PILLAR LA INFO DE LOS INPUTS

const form = document.querySelector("js-form");

function handleChangeForm(e) {
  const inputChanged = e.target;
  const changedValue = inputChanged.value;

  if (inputChanged.name === "name") {
    previewNameElement.innerHTML = changedValue;
  }

  console.log("Target", e.target);
  console.log("Current Target", e.currentTtarget);
}

form.addEventListener("change", handleChangeForm);

*/
