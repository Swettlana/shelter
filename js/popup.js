import { pets } from "./pets.js";

const overlayForCards = document.querySelector("#popup");
const sliderWrapper = document.querySelector("#active-block");
const content = document.querySelector("#popup__content");
const closeBtn = document.querySelector("#close-popup");

const closePopup = () => {
  overlayForCards.classList.remove("active");
  document.body.classList.remove("open-menu");
};

const findPet = (string) => {
  return pets.find((el) => el.name == string);
};

const fillContent = (currentPet) => {
  const imgPet = content.querySelector(".popup__content_img img");
  const name = content.querySelector("#name");
  const kind = content.querySelector("#kind");
  const description = content.querySelector("#description");
  const age = content.querySelector("#age");
  const inoculations = content.querySelector("#inoculations");
  const diseases = content.querySelector("#diseases");
  const parasites = content.querySelector("#parasites");

  if (sliderWrapper.closest(".friends__cards")) {
    imgPet.src = "." + currentPet.img;
  } else {
    imgPet.src = currentPet.img;
  }
  imgPet.alt = currentPet.name;
  name.innerText = currentPet.name;
  kind.innerText = `${currentPet.type} - ${currentPet.breed}`;
  description.innerText = currentPet.description;
  age.innerText = currentPet.age;
  inoculations.innerText = currentPet.inoculations.join(", ");
  diseases.innerText = currentPet.diseases.join(", ");
  parasites.innerText = currentPet.parasites.join(", ");
};

sliderWrapper.onclick = (event) => {
  if (event.target.closest(".card-item")) {
    overlayForCards.classList.add("active");
    document.body.classList.add("open-menu");
    const currentPetName = event.target
      .closest(".card-item")
      .innerText.replace(/\s\n.*/, "");
    const currentPet = findPet(currentPetName);
    fillContent(currentPet);
  }
};

overlayForCards.onclick = closePopup;
closeBtn.onclick = closePopup;
content.onclick = (e) => e.stopPropagation();
