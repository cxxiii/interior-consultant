const mobileMenuBtn = document.querySelector(".mobile-nav");
const mobileWrapper = document.querySelector(".mobile-wrapper");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenuBtn.classList.toggle("change");
  mobileWrapper.classList.toggle("hidden");
});
