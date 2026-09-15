import "/src/scss/main.scss";
import { initModal } from "./modules/modal.js";
import { initCalc } from "./modules/calc.js";
import { initBurger } from "./modules/burger.js";

document.addEventListener("DOMContentLoaded", () => {
  initModal();
  initCalc();
  initBurger();
});
