import { pets } from "./pets.js";
import { getRandomArr } from "./generate.js";
import { templateCardItem } from "./generate.js";

const screenWidth = window.innerWidth;
const numberCards = screenWidth >= 1280 ? 8 : screenWidth < 768 ? 3 : 6;
const LAST_PAGE = screenWidth >= 1280 ? 6 : screenWidth < 768 ? 16 : 8;
const FIRST_PAGE = 1;
const allPets = [];
let currentPage = 1;

const wrapper = document.querySelector("#active-block");
const first = document.querySelector("#first");
const last = document.querySelector("#last");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const number = document.querySelector("#number");

const arrayAllPets = [];
const arrForRandom = [...getRandomArr(pets)];
for (let i = 0; i < 6; i++) {
  arrayAllPets.push(...arrForRandom);
}
for (let indexPage = 0; indexPage < LAST_PAGE; indexPage++) {
  const arrayOnePage = [];
  for (let j = 0; j < numberCards; j++) {
    arrayOnePage.push(arrayAllPets[indexPage + j + LAST_PAGE]);
  }
  allPets.push(arrayOnePage);
}

const changePrevDisabled = (isTrue) => {
  first.dataset.disabled = isTrue.toString();
  prev.dataset.disabled = isTrue.toString();
  first.disabled = isTrue;
  prev.disabled = isTrue;
};
const changeNextDisabled = (isTrue) => {
  last.dataset.disabled = isTrue.toString();
  next.dataset.disabled = isTrue.toString();
  last.disabled = isTrue;
  next.disabled = isTrue;
};

const fillPets = (page) => {
  wrapper.innerHTML = "";
  for (let i = 0; i < numberCards; i++) {
    wrapper.insertAdjacentHTML(
      "afterbegin",
      templateCardItem(
        allPets[page - 1][i].name,
        `.${allPets[page - 1][i].img}`
      )
    );
  }
};

fillPets(FIRST_PAGE);

first.onclick = () => {
  fillPets(FIRST_PAGE);
  number.innerText = `${FIRST_PAGE}`;
  changePrevDisabled(true);
  changeNextDisabled(false);
  currentPage = FIRST_PAGE;
};

last.onclick = () => {
  fillPets(LAST_PAGE);
  number.innerText = `${LAST_PAGE}`;
  changePrevDisabled(false);
  changeNextDisabled(true);
  currentPage = LAST_PAGE;
};

next.onclick = () => {
  let nextPage = currentPage + 1;
  fillPets(nextPage);
  number.innerText = `${nextPage}`;

  if (currentPage === FIRST_PAGE) {
    changePrevDisabled(false);
  }
  if (nextPage === LAST_PAGE) {
    changeNextDisabled(true);
  }
  currentPage = nextPage;
};

prev.onclick = () => {
  let prevPage = currentPage - 1;
  fillPets(prevPage);
  number.innerText = `${prevPage}`;

  if (currentPage === LAST_PAGE) {
    changeNextDisabled(false);
  }
  if (prevPage === FIRST_PAGE) {
    changePrevDisabled(true);
  }
  currentPage = prevPage;
};
