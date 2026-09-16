export function initServiceForm() {
  const form = document.getElementById('service-form')
  if (!form) return

  form.addEventListener('submit', (e) => {
    e.preventDefault()

    const data = Object.fromEntries(new FormData(form))

    if (!data.agreement) {
      alert('Подтвердите согласие на обработку персональных данных')
      return
    }

    if (!data.phone || data.phone.trim().length < 6) {
      alert('Введите корректный номер телефона')
      return
    }

    console.log('Заявка:', data)
    alert('Заявка отправлена! Мы свяжемся с вами.')
    form.reset()
  })
}