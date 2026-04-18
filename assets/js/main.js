function initFaq() {
  const faqItems = document.querySelectorAll("[data-faq-item]");

  faqItems.forEach((item) => {
    const trigger = item.querySelector("[data-faq-trigger]");
    const answer = item.querySelector("[data-faq-answer]");
    const isOpen = item.getAttribute("data-open") === "true";

    if (answer) {
      answer.classList.toggle("hidden", !isOpen);
    }

    trigger?.addEventListener("click", () => {
      const currentState = item.getAttribute("data-open") === "true";

      faqItems.forEach((entry) => {
        const entryTrigger = entry.querySelector("[data-faq-trigger]");
        const entryAnswer = entry.querySelector("[data-faq-answer]");

        entry.setAttribute("data-open", "false");
        entryTrigger?.setAttribute("aria-expanded", "false");
        entryAnswer?.classList.add("hidden");
      });

      item.setAttribute("data-open", String(!currentState));
      trigger.setAttribute("aria-expanded", String(!currentState));
      answer?.classList.toggle("hidden", currentState);
    });
  });
}

function initFooterYear() {
  const footerYear = document.getElementById("footer-year");

  if (footerYear) {
    footerYear.textContent = String(new Date().getFullYear());
  }
}

function initForms() {
  const forms = document.querySelectorAll("[data-form]");

  forms.forEach((form) => {
    form.dataset.formReady = "true";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initFaq();
  initFooterYear();
  initForms();
});
