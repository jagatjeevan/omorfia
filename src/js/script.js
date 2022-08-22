import { loadScreen1, exitScreen1 } from './AnimationJs/HomePageAnimation.js';
import {
  loadCommercialSuccess,
  exitCommercialSuccess,
} from './AnimationJs/CommercialSuccessAnimation.js';
import { changePopupPage, closePopup, openPopup } from './popup/actions.js';
import {
  exitRevolutionizeTech,
  loadRevolutionizeTech,
} from './AnimationJs/RevolutionizeTechAnimation copy.js';

var currentPage = 'screen1';
var previousPages = [];

$('.commercial-success-clickable').on('click', () => {
  previousPages.push(currentPage);
  currentPage = 'commercial-success';

  exitScreen1('commercialSuccess');
  loadCommercialSuccess();
});
$('.revolutionize-tech-clickable').on('click', () => {
  previousPages.push(currentPage);
  currentPage = 'revolutionize-tech';

  exitScreen1('revolutionizeTech');
  loadRevolutionizeTech();
});

$('.back-icon-button').on('click', () => {
  currentPage = 'screen1';
  exitCommercialSuccess();
  exitRevolutionizeTech();
  loadScreen1();
  closePopup();
});

$('#nav-0').on('click', () => {
  if (currentPage === 'screen1') return;

  currentPage = 'screen1';
  exitCommercialSuccess();
  exitRevolutionizeTech();
  loadScreen1();
  closePopup();
});
$('#nav-2').on('click', () => {
  if (currentPage === 'commercial-success') return;

  currentPage = 'commercial-success';
  exitScreen1('commercialSuccess');
  exitRevolutionizeTech();
  loadCommercialSuccess();
});
$('#nav-5').on('click', () => {
  if (currentPage === 'commercial-success') return;

  currentPage = 'revolutionize-tech';
  exitScreen1('revolutionizeTech');
  exitCommercialSuccess();
  loadRevolutionizeTech();
});

loadScreen1();

// Timeline
const timelineTitle = document.querySelectorAll('.title');
let commercialContent = document.getElementById('commercial-main-content');
let sections = commercialContent.querySelectorAll('section');

const addClickOnTitle = (event) => {
  activeTarget(event.target);
};

timelineTitle.forEach((item) => {
  item.addEventListener('click', addClickOnTitle);
});

function activeTarget(target) {
  timelineTitle.forEach((item) => {
    if (item !== target) item.parentElement.classList.remove('completed');
  });
  target.parentElement.parentElement.classList.add('completed');
}

$('#commercial-main-content').scroll(function () {
  var current = '';
  sections.forEach((section) => {
    let top = commercialContent.scrollTop;
    let offset = section.offsetTop;
    let height = section.offsetHeight;
    if (top >= offset - 60 && top <= offset + height) {
      current = section.getAttribute('id');
      const target = document.querySelector(`[href='#${current}']`);
      activeTarget(target);
    }
  });
});

// Button click animation
$('.play-video').on('click', function () {
  gsap.to('.start-text', {
    // opacity: 0,
    y: -200,
    duration: 1,
  });
  gsap.fromTo('.play-video', { opacity: 1 }, { opacity: 0, duration: 1.1 });
  gsap.fromTo('.video-area', { opacity: 0 }, { display: 'flex', duration: 2, opacity: 1 });
});
$('#close-video').on('click', function () {
  gsap.to('.start-text', {
    y: 0,
    duration: 1,
  });
  gsap.fromTo('.play-video', { opacity: 0, duration: 1.1 }, { opacity: 1 });
  gsap.fromTo('.video-area', { display: 'flex', duration: 2, opacity: 1 }, { opacity: 0 });
});

// Journey popup
$('#explore-journey').on('click', () => openPopup('journey'));
$('#unique-e4r').on('click', () => openPopup('e4r'));
$('.close-popup').on('click', closePopup);
$('#journey-left-arrow').on('click', changePopupPage);
$('#journey-right-arrow').on('click', changePopupPage);
$('#e4r-left-arrow').on('click', changePopupPage);
$('#e4r-right-arrow').on('click', changePopupPage);
