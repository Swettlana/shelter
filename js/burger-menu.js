const btnBurger = document.querySelector("#burger-btn");
const bodyBurger = document.querySelector("#burger-body");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const headerWrap = document.querySelector(".header__wrapper");

const checkVisibility = () => {
  if (btnBurger.offsetWidth) {
    return true;
  }
  return false;
};

const snowMenu = () => {
  bodyBurger.style.display = "flex";
  btnBurger.classList.toggle("open-menu");
  header.classList.toggle("open-menu");
  document.body.classList.toggle("open-menu");
  overlay.classList.toggle("active");
  headerWrap.classList.toggle("open-menu");

  if (bodyBurger.classList.contains("open-menu")) {
    bodyBurger.classList.remove("open-menu");
    bodyBurger.classList.add("close-menu");
  } else {
    bodyBurger.classList.add("open-menu");
    bodyBurger.classList.remove("close-menu");
  }
};

bodyBurger.onanimationend = () => {
  if (bodyBurger.classList.contains("close-menu")) {
    bodyBurger.style.display = "none";
  }
};

btnBurger.onclick = () => {
  if (checkVisibility()) {
    snowMenu();
  }
};

bodyBurger.onclick = (e) => {
  if (checkVisibility()) {
    if (e.target.dataset) {
      location.hash = e.target.dataset.link;
      snowMenu();
    }
  }
};

overlay.onclick = (e) => {
  if (e.target.dataset) {
    location.hash = e.target.dataset.link;
  }
  snowMenu();
};
