const buttons = document.querySelectorAll(".routs__reserve"); // []
const modal = document.querySelector(".modal");
const close = document.querySelector(".modal__close");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    modal.classList.add("show");
    document.body.classList.add("no-scroll");
  });
});

close.addEventListener("click", () => {
  modal.classList.remove("show");
});