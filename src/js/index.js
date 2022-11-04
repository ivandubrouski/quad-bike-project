window.addEventListener("DOMContentLoaded", () => {
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
  const headerInfo = document.querySelector(".header__info");
  burger.addEventListener("click", () => {
    document.body.classList.toggle("no-scroll");
    headerInfo.classList.toggle("header__info_show");
  });

  /************SLIDER*********/

  let slideIndex = 1;

  const slides = document.querySelectorAll(".slider__slide"),
    prev = document.querySelector(".slider__prev"),
    next = document.querySelector(".slider__next"),
    total = document.querySelector(".slider__total"),
    current = document.querySelector(".slider__current");

  total.textContent = slides.length;

  showSlides(1);

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    slides.forEach((slide) => (slide.style.display = "none"));

    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].style.animationName = "fade";
    slides[slideIndex - 1].style.animationDuration = "1s";

    if (slideIndex < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }
  }

  next.addEventListener("click", () => {
    showSlides((slideIndex += 1));
  });

  prev.addEventListener("click", () => {
    showSlides((slideIndex -= 1));
  });
});
