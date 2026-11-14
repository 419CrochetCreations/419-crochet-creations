const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("#nav-links");

menuToggle?.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.setAttribute(
    "aria-label",
    isExpanded ? "Open navigation menu" : "Close navigation menu",
  );
  navLinks?.classList.toggle("is-open", !isExpanded);
});

navLinks?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Open navigation menu");
    navLinks.classList.remove("is-open");
  });
});

document.querySelectorAll(".read-more-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const extraText = button.parentElement?.querySelector(".post-extra");
    if (!extraText) return;

    const isExpanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!isExpanded));
    extraText.hidden = isExpanded;
    button.innerHTML = isExpanded
      ? 'Read the story <span aria-hidden="true">→</span>'
      : 'Show less <span aria-hidden="true">↑</span>';
  });
});

document.querySelector("#custom-order-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const status = document.querySelector("#form-status");
  if (status) {
    status.textContent =
      "Thanks! This preview form isn't connected, so your request wasn't sent.";
  }
});

const year = document.querySelector("#current-year");
if (year) year.textContent = String(new Date().getFullYear());
