//Lo que ha hecho Iván en clase

const createButton = document.querySelector(".js-create-card");

function handleClickCreate(ev) {
  ev.preventDefault();

  fetch("https://awesome-profile-cards.herokuapp.com/", {
    method: "POST",
    mode: "cors", //esto es para que el servidor tenga en cuenta que pueden llegar peticiones de otros sitios
    body: JSON.stringify(data),
  });
}

createButton.addEventListener("click", handleClickCreate);
