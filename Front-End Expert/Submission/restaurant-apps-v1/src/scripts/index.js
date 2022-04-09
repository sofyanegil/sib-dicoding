import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import './restaurant.js';
import './meal.js';

const menuBtn = document.querySelector('#nav__menu');
const menuDrawer = document.querySelector('#nav__drawer');
const mainElement = document.querySelector('main');
const nav = document.querySelector('nav');

menuBtn.addEventListener('click', (e) => {
  menuDrawer.classList.toggle('open');
  e.stopPropagation();
});

mainElement.addEventListener('click', (e) => {
  menuDrawer.classList.remove('open');
  e.stopPropagation();
});

function scrollDown() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) nav.classList.add('nav__scroll');
  else nav.classList.remove('nav__scroll');
}

window.onscroll = () => scrollDown();
