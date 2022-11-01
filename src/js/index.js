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

/************TABS*********/
const tabs = document.querySelectorAll(".tabs__content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => {
      if (item.classList.contains("tabs__content_show")) {
        item.classList.remove("tabs__content_show");
      }
    });
    tab.classList.add("tabs__content_show");
  });
});

const burger = document.querySelector(".header__burger");
burger.addEventListener("click", () => {
  document.body.classList.add("no-scroll");
});
