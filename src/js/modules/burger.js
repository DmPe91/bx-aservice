export function initBurger() {
  const burger = document.querySelector(".burger");
  const offcanvas = document.getElementById("offcanvas");
  const overlay = document.getElementById("offcanvas-overlay");
  const closeBtn = document.querySelector(".offcanvas__close");

  if (!burger || !offcanvas) return;

  function openMenu() {
    offcanvas.classList.add("open");
    overlay.classList.add("open");
    burger.classList.add("open");
    document.body.classList.add("menu-open");
  }

  function closeMenu() {
    offcanvas.classList.remove("open");
    overlay.classList.remove("open");
    burger.classList.remove("open");
    document.body.classList.remove("menu-open");
  }

  burger.addEventListener("click", openMenu);
  closeBtn.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);
}
