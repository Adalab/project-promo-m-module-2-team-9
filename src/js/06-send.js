//Lo que ha hecho Iván en clase

const createButton = document.querySelector(".js-create-card");
const responseElement = document.querySelector(".js-response");
const cardCreated = document.querySelector(".card--created");

function handleClickCreate(ev) {
  ev.preventDefault();

  fetch("https://awesome-profile-cards.herokuapp.com/card", {
    method: "POST",
    mode: "cors", //esto es para que el servidor tenga en cuenta que pueden llegar peticiones de otros sitios
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success === false) {
        responseElement.classList.remove("none");
        responseElement.innerHTML = "Tienes que rellenar los campos";
      } else {
        responseElement.innerHTML = `<a href='${data.cardURL}'>Dirección url</a>`;
        //   responseElement.classList.remove("none");
        cardCreated.classList.remove("none");
      }
    })
    .catch(() => {
      responseElement.innerHTML = "Inténtalo más tarde.";
      //   responseElement.classList.remove("none");
    });
}

createButton.addEventListener("click", handleClickCreate);
console.log(cardCreated);
