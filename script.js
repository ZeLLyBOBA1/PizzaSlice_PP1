const navigationHeight = document.querySelector('header').offsetHeight;

console.log(navigationHeight);

document.documentElement.style.setProperty('--scroll-padding', navigationHeight + "px");

document.documentElement.style.setProperty('--padding-top', navigationHeight + "px");

