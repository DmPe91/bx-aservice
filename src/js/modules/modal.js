export function initModal() {
  const modal = document.getElementById("callback-modal");
  if (!modal) return;

  const openButtons = document.querySelectorAll('[data-modal-open="callback"]');
  const closeButtons = modal.querySelectorAll("[data-modal-close]");
  const form = modal.querySelector("#callback-form");

  // Открыть модалку
  function openModal() {
    modal.classList.add("modal--open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  // Закрыть модалку
  function closeModal() {
    modal.classList.remove("modal--open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  // Кнопки открытия (в шапке и где угодно)
  openButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openModal();
    });
  });

  // Кнопки закрытия (оверлей, крестик)
  closeButtons.forEach((btn) => {
    btn.addEventListener("click", closeModal);
  });

  // Закрытие по Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("modal--open")) {
      closeModal();
    }
  });

  // Обработка формы
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = new FormData(form);
      const data = Object.fromEntries(formData);

      // Проверка согласия на обработку персданных
      if (!data.agreement) {
        alert("Подтвердите согласие на обработку персональных данных");
        return;
      }

      // Проверка телефона
      if (!data.phone || data.phone.trim().length < 6) {
        alert("Введите корректный номер телефона");
        return;
      }

      // Пока заглушка. Позже здесь будет отправка в Битрикс.
      console.log("Отправка формы:", data);

      // Имитация отправки
      alert("Заявка отправлена! Мы свяжемся с вами.");
      form.reset();
      closeModal();
    });
  }
}
