$(document).ready(() => {

  $('.materialboxed').materialbox();
  $('.sidenav').sidenav();
  $('.collapsible').collapsible();

})



const loaderGif = document.querySelector('#loader_background_gif')
const isLoading_container = document.querySelector('#loading-container')

window.addEventListener('load', () => {
  isLoading_container ? isLoading_container.style.display = 'none' : null;
  loaderGif ? loaderGif.style.display = "none" : null;
})



const logo_porfolio = document.querySelector(".logo");

logo_porfolio.addEventListener("click", () => {
  document.location.assign("/");
});