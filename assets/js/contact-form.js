document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector(".wpcf7");
  if (!wrapper) return;

  // Успішна відправка
  wrapper.addEventListener("wpcf7mailsent", (e) => {
    console.log("Mail sent. Form id:", e.detail.contactFormId);
    console.log("Server response:", e.detail.apiResponse);

    const form = e.target.closest("form") || e.target.querySelector("form");
    form.classList.add("is-success");
    // Наприклад, прокрутити до повідомлення
    form
      .querySelector(".wpcf7-response-output")
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  });

  // Помилки валідації
  wrapper.addEventListener("wpcf7invalid", (e) => {
    console.log("Invalid fields:", e.detail.apiResponse.invalid_fields);

    // Фокус на першому полі з помилкою
    const firstInvalid =
      e.target.closest(".wpcf7-not-valid") ||
      e.target.querySelector(".wpcf7-not-valid");
    firstInvalid?.focus();
  });

  // Відправка не вдалася (сервер, пошта, abort з хука)
  wrapper.addEventListener("wpcf7mailfailed", (e) => {
    console.warn("Mail failed:", e.detail.apiResponse.message);
  });

  // Будь-яка відповідь сервера, незалежно від результату
  wrapper.addEventListener("wpcf7submit", (e) => {
    console.log("Status:", e.detail.status);
    // Статуси: validation_failed, mail_sent, mail_failed, aborted, spam
  });
});
