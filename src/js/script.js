import { loadScreen1, exitScreen1 } from './AnimationJs/HomePageAnimation.js';
import {
  loadCommercialSuccess,
  exitCommercialSuccess,
} from './AnimationJs/CommercialSuccessAnimation.js';

$('.lense-commercialSuccess').on('click', () => {
  exitScreen1();
  loadCommercialSuccess();
});
$('#back-icon-button').on('click', () => {
  console.log('hi');
  exitCommercialSuccess();
  loadScreen1();
});

loadScreen1();

// Timeline
const timelineTitle = document.querySelectorAll('.title');

const addClickOnTitle = (event) => {
  console.log('target', event.target);
  timelineTitle.forEach((item) => {
    if (item !== event.target) item.parentElement.classList.remove('completed');
  });
  event.target.parentElement.classList.add('completed');
};

timelineTitle.forEach((item) => {
  item.addEventListener('click', addClickOnTitle);
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
