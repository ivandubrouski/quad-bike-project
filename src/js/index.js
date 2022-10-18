// // // // // // document
// // // // // // window

// // // // // const body = document.body;

// // // // // //parentElement
// // // // // //childElementNodes
// // // // // //firstElementChild
// // // // // //lastElementChild
// // // // // // previousElementSibling
// // // // // //nextElementSibling

// // // // // const background = body.firstElementChild;

// // // // // const main = background.nextElementSibling;

// // // // // const logo = document.getElementById('logo');
// // // // // const header = document.getElementsByClassName('header');
// // // // // const header = document.getElementsByTagName('header');
// // // // // const nav = document.querySelector('nav'); //[].find => сам объект
// // // // // '#nav'
// // // // // '.nav'
// // // // // '[data-test-id="nav"]'
// // // // // '[href^="http://google.com"]'

// // // // // const nav = document.querySelectorAll('[data-test-id="nav"]'); //[].filter => массив объектоов

// // // // const way = document.querySelector('.header__item a');
// // // // //
// // // // // way.outerHTML += '<span class="jjj">Ghbdtn</span>';way.innerHTML += '<script class="jjj">jrefkerfjfrefrjnerjfjefe</script>';
// // // // way.textContent += ' ekmed';

// // // const button = document.querySelector('.header__call');
// // // const modal = document.querySelector('.modal');
// // // const close = document.querySelector('.modal__close');

// // // button.addEventListener('click', () => {
// // //     // link.textContent = 'Hello';
// // //     // link.style.display = 'none';

// // //     // if (link.classList.contains('white')) {
// // //     //     link.classList.remove('white');
// // //     // } else {
// // //     //     link.classList.add('white');
// // //     // }

// // //     // link.classList.toggle('white');

// // //     modal.classList.add('show');
// // //     document.body.classList.add('no-scroll');
// // // });

// // // close.addEventListener('click', () => {
// // //     modal.classList.remove('show');
// // //     document.body.classList.remove('no-scroll');
// // // })

// // // close.removeEventListener('click', () => {
// // //     modal.classList.remove('show');
// // //     document.body.classList.remove('no-scroll');
// // // })

// ^^^^^^^^ Last lesson ^^^^^^^^

const buttons = document.querySelectorAll(".routs__reserve"); // []
const modal = document.querySelector(".modal");
const close = document.querySelector(".modal__close");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    modal.classList.add("show");
    // document.body.classList.add("no-scroll");
  });
});

// button.addEventListener("click", () => {
//   modal.classList.add("show");
//   document.body.classList.add("no-scroll");
// });

close.addEventListener("click", () => {
  modal.classList.remove("show");
});

const tabs = document.querySelectorAll(".tabs__content");

// tabs.forEach((tab) => {
//   tab.addEventListener("click", () => {
//     const text = tab.querySelector(".tabs__text");

//     text.classList.add("tabs__content_show");
//   });
// });

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

//Здесь не нужно было юзать body
document.addEventListener("scroll", (event) => {
  console.log(event);
});
