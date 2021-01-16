let d = new Date();
console.log(d);

$(document).ready(function () {
  $('.collapsible').collapsible();
  $('.sidenav').sidenav();
  $("select").formSelect();
  $(".datepicker").datepicker({
    autoClose: true,
    minDate: d,
    // yearRange: [1],
    // disableWeekends: true,
    isOpen: true,
    i18n: {
      cancel: "close",
      previousMonth: "<",
      nextMonth: ">",
    },
  });
});

window.addEventListener("load", () => {
  const headline = document.querySelector(".intro-container h2");
  const hero_model_image = document.querySelector('#hero-model')
  hero_model_image ? hero_model_image.style.visibility = 'visible' : null;
  const rule = CSSRulePlugin.getRule(".intro-container .animation:after");

  gsap.from(headline, {
    duration: 1,
    opacity: 0,
    y: "20%",
    // delay: 0.5,
    ease: "power1",
  });

  gsap.from("#hero-model", {
    duration: 1.8,
    opacity: 0,
    scale: 0.9,
    delay: 1,
    ease: "power4",
  });
  gsap.from(".hero-container", {
    // backgroundPosition: '-250px 1px',
    duration: 1.2,
    opacity: 0,
    delay: 1.2,
  });
  gsap.to(rule, {
    cssRule: { scaleY: 0 },
    duration: 0.9,
    ease: "power1.easeIn",
  });
  gsap.from(".drop-animation", {
    duration: 1 ,
    opacity: 0,
    y: "-100",
    stagger: 0.1,
    ease: "ease",
    delay: 0.6,
  });
  gsap.from(".About-content", {
    duration: .6, y: "20%", opacity: 0, ease: 'power2.easeIn'
  })
});

const logo = document.querySelector(".logo");

logo.addEventListener("click", () => {
  document.location.assign("/");
});

// const styleSheets = Array.from(document.styleSheets).filter(
//       (styleSheet) => !styleSheet.href || styleSheet.href.startsWith(window.location.origin)
//     );
// for (let style of styleSheets) {
//   if (style instanceof CSSStyleSheet && style.cssRules) {
//     ...
//   }
// }
