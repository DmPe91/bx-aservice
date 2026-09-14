export function initCalc() {
  const form = document.getElementById("calc-form");
  if (!form) return;

  const brandSelect = form.querySelector("#calc-brand");
  const serviceSelect = form.querySelector("#calc-service");
  const resultEl = form.querySelector("#calc-result");
  const submitBtn = form.querySelector(".calc__submit");

  const prices = {
    to: {
      toyota: [5000, 8000],
      honda: [5000, 8000],
      nissan: [5000, 8000],
      mazda: [5000, 8000],
      mitsubishi: [5000, 8000],
      subaru: [5500, 8500],
      suzuki: [4500, 7000],
      lexus: [9000, 14000],
      infiniti: [9000, 14000],
      acura: [8500, 13000],
    },
    electrical: {
      toyota: [3000, 6000],
      honda: [3000, 6000],
      nissan: [3000, 6000],
      mazda: [3000, 6000],
      mitsubishi: [3000, 6000],
      subaru: [3500, 6500],
      suzuki: [2800, 5500],
      lexus: [6000, 11000],
      infiniti: [6000, 11000],
      acura: [5500, 10000],
    },
    transmission: {
      toyota: [30000, 50000],
      honda: [30000, 50000],
      nissan: [30000, 50000],
      mazda: [28000, 48000],
      mitsubishi: [28000, 48000],
      subaru: [35000, 55000],
      suzuki: [25000, 45000],
      lexus: [60000, 90000],
      infiniti: [60000, 90000],
      acura: [55000, 85000],
    },
    diagnostics: {
      toyota: [1500, 2500],
      honda: [1500, 2500],
      nissan: [1500, 2500],
      mazda: [1500, 2500],
      mitsubishi: [1500, 2500],
      subaru: [1800, 2800],
      suzuki: [1200, 2000],
      lexus: [2500, 3500],
      infiniti: [2500, 3500],
      acura: [2200, 3200],
    },
    cooling: {
      toyota: [4000, 7000],
      honda: [4000, 7000],
      nissan: [4000, 7000],
      mazda: [4000, 7000],
      mitsubishi: [4000, 7000],
      subaru: [4500, 7500],
      suzuki: [3500, 6000],
      lexus: [7000, 12000],
      infiniti: [7000, 12000],
      acura: [6500, 11000],
    },
  };

  function formatPrice(value) {
    return value.toLocaleString("ru-RU") + " ₽";
  }

  function calculate() {
    const brand = brandSelect.value;
    const service = serviceSelect.value;
    const urgency = form.querySelector('input[name="urgency"]:checked').value;

    if (!brand || !service) {
      resultEl.textContent = "—";
      submitBtn.disabled = true;
      return;
    }

    const [min, max] = prices[service][brand];
    const multiplier = urgency === "urgent" ? 1.3 : 1;

    const minResult = Math.round(min * multiplier);
    const maxResult = Math.round(max * multiplier);

    resultEl.textContent = `${formatPrice(minResult)} — ${formatPrice(maxResult)}`;
    submitBtn.disabled = false;
  }

  form.addEventListener("change", calculate);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(form));

    if (!data.agreement) {
      alert("Подтвердите согласие на обработку персональных данных");
      return;
    }

    const modal = document.getElementById("callback-modal");
    if (modal) {
      modal.classList.add("modal--open");
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }

    console.log("Заявка:", data);
  });
}
