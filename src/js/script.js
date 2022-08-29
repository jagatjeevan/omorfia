import { loadScreen1 } from './AnimationJs/HomePageAnimation.js';
import { change2PopupPage, close2Popup, open2Popup } from './popup/two-page-actions.js';
import {
  change3PopupPage,
  close3Popup,
  open3Popup,
  scroll3Popup,
} from './popup/three-page-actions.js';
import { backPageTransition, pageTransition } from './AnimationJs/PageTransitions.js';

var isPageLoaded = false;

const transitionOnPageLoad = (nextPage, isBackButton) => {
  if (isPageLoaded) {
    isPageLoaded = false;

    const transitionTime = isBackButton ? backPageTransition() : pageTransition(nextPage);

    setTimeout(() => {
      isPageLoaded = true;
    }, transitionTime);
  }
};

// Why-Wheel Page Transitions
$('.commercial-success-clickable').on('click', () => transitionOnPageLoad('commercialSuccess'));
$('.revolutionize-tech-clickable').on('click', () => transitionOnPageLoad('revolutionizeTech'));
$('.vibrant-community-clickable').on('click', () => transitionOnPageLoad('vibrantCommunity'));
$('.positive-social-change-clickable').on('click', () =>
  transitionOnPageLoad('positiveSocialChange'),
);
$('.awesome-partner-clickable').on('click', () => transitionOnPageLoad('awesomePartner'));

// Navigation Page Transitions
$('#nav-0').on('click', () => transitionOnPageLoad('screen1'));
$('#nav-1').on('click', () => transitionOnPageLoad('positiveSocialChange'));
$('#nav-2').on('click', () => transitionOnPageLoad('commercialSuccess'));
$('#nav-3').on('click', () => transitionOnPageLoad('vibrantCommunity'));
$('#nav-4').on('click', () => transitionOnPageLoad('awesomePartner'));
$('#nav-5').on('click', () => transitionOnPageLoad('revolutionizeTech'));

// Back Button Page Transitions
$('.back-icon-button').on('click', () => transitionOnPageLoad('', true));

loadScreen1();
setTimeout(() => {
  isPageLoaded = true;
}, 4000);

gsap
  .fromTo(
    `.nav-screen1`,
    {
      height: '0px',
      backgroundColor: 'white',
      color: '#003d50',
    },
    {
      duration: 1.3,
      backgroundColor: '#003d50',
      color: 'white',
      height: '56px',
    },
  )
  .delay(0.3);

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

// 2 page popup
$('#explore-journey').on('click', () => open2Popup('journey'));
$('#axis-learn-more').on('click', () => open2Popup('axis'));
$('#falabella-learn-more').on('click', () => open2Popup('falabella'));
$('#idfc-learn-more').on('click', () => open2Popup('idfc'));
$('#unique-e4r').on('click', () => open2Popup('e4r'));
$('#unique-gdo').on('click', () => open2Popup('gdo'));
$('#unique-gic').on('click', () => open2Popup('gic'));
$('.arrow-2-page').on('click', change2PopupPage);
$('.close-2-popup').on('click', close2Popup);

// 3 page popup
$('#healthcare-domain').on('click', () => open3Popup('healthcare-domain'));
$('#healthcare-domain-left-arrow').on('click', () => change3PopupPage('left'));
$('#healthcare-domain-right-arrow').on('click', () => change3PopupPage('right'));
$('.close-3-popup').on('click', close3Popup);

// Popup scroll
$('#healthcare-domain-images').scroll(scroll3Popup);
