import { pets } from "./pets.js";
import { getRandomArr } from "./generate.js";
import { templateCardItem } from "./generate.js";

const activePets = ["Katrine", "Jennifer", "Woody"];

const btnLeft = document.querySelector("#left");
const btnRight = document.querySelector("#right");
const slider = document.querySelector("#slider");
const rightBlock = document.querySelector("#right-block");
const leftBlock = document.querySelector("#left-block");
const activeBlock = document.querySelector("#active-block");

const changeActiveBlock = (arrow) => {
  if (arrow == "left") {
    activeBlock.innerHTML = leftBlock.innerHTML;
  } else {
    activeBlock.innerHTML = rightBlock.innerHTML;
  }
};

const takeNewCardsBlock = (arrow) => {
  const otherPets = pets.filter((pet) => !activePets.includes(pet.name));
  getRandomArr(otherPets);
  activePets.length = 0;
  if (arrow === "left") {
    leftBlock.innerHTML = "";
    for (let i = 0; i < 3; i++) {
      activePets.push(otherPets[i].name);
      leftBlock.insertAdjacentHTML(
        "afterbegin",
        templateCardItem(otherPets[i].name, otherPets[i].img)
      );
    }
  } else {
    rightBlock.innerHTML = "";
    for (let i = 0; i < 3; i++) {
      activePets.push(otherPets[i].name);
      rightBlock.insertAdjacentHTML(
        "afterbegin",
        templateCardItem(otherPets[i].name, otherPets[i].img)
      );
    }
  }
};

const disableButtons = () => {
  btnRight.setAttribute("disabled", "disabled");
  btnRight.classList.add("our-friends__slider-arrows_disable");
  btnLeft.setAttribute("disabled", "disabled");
  btnLeft.classList.add("our-friends__slider-arrows_disable");
};
const turnOnButtons = () => {
  btnLeft.removeAttribute("disabled");
  btnRight.removeAttribute("disabled");
  btnLeft.classList.remove("our-friends__slider-arrows_disable");
  btnRight.classList.remove("our-friends__slider-arrows_disable");
};

btnLeft.onclick = () => {
  takeNewCardsBlock("left");
  slider.classList.add("transition-left");
  disableButtons();
};

btnRight.onclick = () => {
  takeNewCardsBlock("right");
  slider.classList.add("transition-right");
  disableButtons();
};

slider.onanimationend = (animationEvent) => {
  if (animationEvent.animationName === "to-left") {
    changeActiveBlock("left");
  } else {
    changeActiveBlock("right");
  }
  slider.classList.remove("transition-right");
  slider.classList.remove("transition-left");
  turnOnButtons();
};
