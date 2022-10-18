const button = document.querySelector(".routs__reserve");
const modal = document.querySelector(".modal");
const close = document.querySelector('modal__close');

button.addEventListener('click', () =>{
  modal.classList.add('show');
  document.body.classList.add('no-scroll');

});

close.addEventListener('click',() =>{
  modal.classList.remove('show');
});