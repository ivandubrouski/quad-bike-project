import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

const swiper = new Swiper(".swiper", {
  // Optional parameters
  // direction: "vertical",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    control: true,
  },
  spaceBetween: 40,
  effect: "flip",

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    1000: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },
});

/*******************MODAL************************ */

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

  /************SLIDER-1*********/

  // let slideIndex = 1;

  // const slides = document.querySelectorAll(".slider__slide"),
  //   prev = document.querySelector(".slider__prev"),
  //   next = document.querySelector(".slider__next"),
  //   total = document.querySelector(".slider__total"),
  //   current = document.querySelector(".slider__current");

  // total.textContent = slides.length;

  // showSlides(1);

  // function showSlides(n) {
  //   if (n > slides.length) {
  //     slideIndex = 1;
  //   }

  //   if (n < 1) {
  //     slideIndex = slides.length;
  //   }

  //   slides.forEach((slide) => (slide.style.display = "none"));

  //   slides[slideIndex - 1].style.display = "block";
  //   slides[slideIndex - 1].style.animationName = "fade";
  //   slides[slideIndex - 1].style.animationDuration = "1s";

  //   if (slideIndex < 10) {
  //     current.textContent = `0${slideIndex}`;
  //   } else {
  //     current.textContent = slideIndex;
  //   }
  // }

  // next.addEventListener("click", () => {
  //   showSlides((slideIndex += 1));
  // });

  // prev.addEventListener("click", () => {
  //   showSlides((slideIndex -= 1));
  // });

  /************SLIDER-2*********/

  // let offset = 0;
  // let slideIndex = 1;

  // const slides = document.querySelectorAll(".slider__slide"),
  //   prev = document.querySelector(".slider__prev"),
  //   next = document.querySelector(".slider__next"),
  //   total = document.querySelector(".slider__total"),
  //   current = document.querySelector(".slider__current"),
  //   wrapper = document.querySelector(".slider__wrapper"),
  //   inner = document.querySelector(".slider__inner"),
  //   bullets = document.querySelectorAll(".slider__bullet"),
  //   width = window.getComputedStyle(wrapper).width;

  // total.textContent = slides.length;
  // current.textContent = slideIndex;

  // inner.style.width = 100 * slides.length + "%";

  // slides.forEach((item) => {
  //   item.style.width = width;
  // });

  // next.addEventListener("click", () => {
  //   if (offset === +width.slice(0, width.length - 2) * (slides.length - 1)) {
  //     offset = 0;
  //   } else {
  //     offset += +width.slice(0, width.length - 2);
  //   }

  //   inner.style.transform = `translateX(-${offset}px)`;

  //   if (slideIndex === slides.length) {
  //     slideIndex = 1;
  //   } else {
  //     slideIndex++;
  //   }

  //   current.textContent = slideIndex;
  // });

  // prev.addEventListener("click", () => {
  //   console.log("oo");
  //   if (offset === 0) {
  //     offset = +width.slice(0, width.length - 2) * (slides.length - 1);
  //   } else {
  //     offset -= +width.slice(0, width.length - 2);
  //   }

  //   inner.style.transform = `translateX(-${offset}px)`;

  //   if (slideIndex === 1) {
  //     slideIndex = slides.length;
  //   } else {
  //     slideIndex--;
  //   }

  //   current.textContent = slideIndex;
  // });

  // bullets.forEach((bullet) => {
  //   bullet.addEventListener("click", (event) => {
  //     slideIndex = bullet.getAttribute("data-number");
  //     current.textContent = slideIndex;
  //   });
  // });

  let slideIndex = 1;
  const slides = document.querySelectorAll(".slider__slide");
  const bullets = document.querySelectorAll(".pagination__bullet");

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
  }

  bullets.forEach((bullet) => {
    bullet.addEventListener("click", () => {
      showSlides((slideIndex += 1));
    });
  });
});
