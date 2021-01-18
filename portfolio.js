$(document).ready(() => {

  $('.materialboxed').materialbox();
  $('.sidenav').sidenav();

})



const loaderGif = document.querySelector('#loader_background_gif')
const isLoading_container = document.querySelector('#loading-container')

window.addEventListener('load', () => {
  isLoading_container.style.display = 'none'
})

window.addEventListener('DOMContentLoaded', () => {
  loaderGif ? loaderGif.style.display = "none" : null;
})


const logo_porfolio = document.querySelector(".logo");

logo_porfolio.addEventListener("click", () => {
  document.location.assign("/");
});