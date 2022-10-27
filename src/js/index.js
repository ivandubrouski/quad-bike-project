const buttons = document.querySelectorAll(".routs__reserve"); // []
const modal = document.querySelector(".modal");
const close = document.querySelector(".modal__close");
const header = document.querySelector(".header");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    modal.classList.add("show");
    document.body.classList.add("no-scroll");
  });
});

close.addEventListener("click", () => {
  modal.classList.remove("show");
});

document.addEventListener("scroll", (event) => {
  if (
    event.target.scrollingElement.scrollTop &&
    !header.classList.contains("header_white")
  ) {
    header.classList.add("header_white");
  }

  if (
    !event.target.scrollingElement.scrollTop &&
    header.classList.contains("header_white")
  ) {
    header.classList.remove("header_white");
  }
});
