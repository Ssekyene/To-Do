import "./styles.css";
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";


const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const contactBtn = document.querySelector("#contact-btn");

function renderPage(pageLoader) {
  const content = document.querySelector("#content");
  content.replaceChildren(pageLoader());
  //content.textContent = "";

  //pageLoader();
}

function setActiveButton(activeBtn) {
  const buttons = document.querySelectorAll("nav button");

  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  activeBtn.classList.add("active");
}

/* load home page initially */
renderPage(loadHome);
setActiveButton(homeBtn);

homeBtn.addEventListener("click", () => {
  renderPage(loadHome);
  setActiveButton(homeBtn);
});

menuBtn.addEventListener("click", () => {
  renderPage(loadMenu);
  setActiveButton(menuBtn);
});

contactBtn.addEventListener("click", () => {
  renderPage(loadContact);
  setActiveButton(contactBtn);
});

