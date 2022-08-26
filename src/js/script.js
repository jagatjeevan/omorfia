import { loadScreen1, exitScreen1 } from './AnimationJs/HomePageAnimation.js';
import {
  loadCommercialSuccess,
  exitCommercialSuccess,
} from './AnimationJs/CommercialSuccessAnimation.js';
import { change2PopupPage, close2Popup, open2Popup } from './popup/two-page-actions.js';
import {
  exitRevolutionizeTech,
  loadRevolutionizeTech,
} from './AnimationJs/RevolutionizeTechAnimation copy.js';
import {
  exitVibrantCommunity,
  loadVibrantCommunity,
} from './AnimationJs/VibrantCommunityAnimation.js';
import {
  exitPositiveSocialChange,
  loadPositiveSocialChange,
} from './AnimationJs/PositiveSocialChangeAnimation.js';
import { exitAwesomePartner, loadAwesomePartner } from './AnimationJs/AwesomePartnerAnimation.js';
import { change3PopupPage, close3Popup, open3Popup } from './popup/three-page-actions.js';

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
$('.vibrant-community-clickable').on('click', () => {
  previousPages.push(currentPage);
  currentPage = 'vibrant-community';

  exitScreen1('vibrantCommunity');
  loadVibrantCommunity();
});
$('.positive-social-change-clickable').on('click', () => {
  previousPages.push(currentPage);
  currentPage = 'positive-social-change';

  exitScreen1('positiveSocialChange');
  loadPositiveSocialChange();
});
$('.awesome-partner-clickable').on('click', () => {
  previousPages.push(currentPage);
  currentPage = 'awesome-partner';

  exitScreen1('awesomePartner');
  loadAwesomePartner();
});

$('.back-icon-button').on('click', () => {
  currentPage = 'screen1';
  exitCommercialSuccess();
  exitRevolutionizeTech();
  exitVibrantCommunity();
  exitPositiveSocialChange();
  exitAwesomePartner();
  loadScreen1();
  close2Popup();
});

$('#nav-0').on('click', () => {
  if (currentPage === 'screen1') return;

  currentPage = 'screen1';
  exitCommercialSuccess();
  exitRevolutionizeTech();
  exitVibrantCommunity();
  exitPositiveSocialChange();
  exitAwesomePartner();
  loadScreen1();
  close2Popup();
});
$('#nav-1').on('click', () => {
  if (currentPage === 'positive-social-change') return;

  currentPage = 'positive-social-change';
  exitScreen1('positiveSocialChange');
  exitCommercialSuccess();
  exitRevolutionizeTech();
  exitAwesomePartner();
  exitVibrantCommunity();
  loadPositiveSocialChange();
});
$('#nav-2').on('click', () => {
  if (currentPage === 'commercial-success') return;

  currentPage = 'commercial-success';
  exitScreen1('commercialSuccess');
  exitPositiveSocialChange();
  exitAwesomePartner();
  exitRevolutionizeTech();
  exitVibrantCommunity();
  loadCommercialSuccess();
});
$('#nav-3').on('click', () => {
  if (currentPage === 'vibrant-community') return;

  currentPage = 'vibrant-community';
  exitScreen1('vibrantCommunity');
  exitCommercialSuccess();
  exitRevolutionizeTech();
  exitPositiveSocialChange();
  exitAwesomePartner();
  loadVibrantCommunity();
});
$('#nav-4').on('click', () => {
  if (currentPage === 'awesome-partner') return;

  currentPage = 'awesome-partner';
  exitScreen1('awesomePartner');
  exitCommercialSuccess();
  exitVibrantCommunity();
  exitPositiveSocialChange();
  exitRevolutionizeTech();
  loadAwesomePartner();
});
$('#nav-5').on('click', () => {
  if (currentPage === 'revolutionize-tech') return;

  currentPage = 'revolutionize-tech';
  exitScreen1('revolutionizeTech');
  exitCommercialSuccess();
  exitVibrantCommunity();
  exitAwesomePartner();
  exitPositiveSocialChange();
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

// 2 page popup
$('#explore-journey').on('click', () => open2Popup('journey'));
$('#axis-learn-more').on('click', () => open2Popup('axis'));
$('#falabella-learn-more').on('click', () => open2Popup('falabella'));
$('#idfc-learn-more').on('click', () => open2Popup('idfc'));
$('#unique-e4r').on('click', () => open2Popup('e4r'));
$('#unique-gdo').on('click', () => open2Popup('gdo'));
$('#unique-gic').on('click', () => open2Popup('gic'));
$('#journey-left-arrow').on('click', change2PopupPage);
$('#journey-right-arrow').on('click', change2PopupPage);
$('#e4r-left-arrow').on('click', change2PopupPage);
$('#e4r-right-arrow').on('click', change2PopupPage);
$('#gdo-left-arrow').on('click', change2PopupPage);
$('#gdo-right-arrow').on('click', change2PopupPage);
$('#gic-left-arrow').on('click', change2PopupPage);
$('#gic-right-arrow').on('click', change2PopupPage);
$('.close-popup').on('click', close2Popup);

// 3 page popup
$('#healthcare-domain').on('click', () => open3Popup('healthcare-domain'));
$('#healthcare-domain-left-arrow').on('click', () => change3PopupPage('left'));
$('#healthcare-domain-right-arrow').on('click', () => change3PopupPage('right'));
$('.close-3-popup').on('click', close3Popup);
