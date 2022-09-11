import { loadScreen1 } from './AnimationJs/HomePageAnimation.js';
import {
  change2PopupPage,
  close2Popup,
  open2Popup,
  scroll2Popup,
} from './popup/two-page-actions.js';
import {
  change3PopupPage,
  close3Popup,
  open3Popup,
  scroll3Popup,
} from './popup/three-page-actions.js';
import {
  change4PopupPage,
  close4Popup,
  open4Popup,
  scroll4Popup,
} from './popup/four-page-actions.js';
import { backPageTransition, pageTransition } from './AnimationJs/PageTransitions.js';
import { addChart } from './charts/chart-container.js';
import { addAxisChart } from './charts/axis-chart-container.js';
import { addFalabellaChart } from './charts/falabella-chart-container.js';
import { addIdfcChart } from './charts/idfc-chart-container.js';
import { closeVideo, openVideo, playPause } from './VideoAnimations.js';
import { activeTarget, contentScroll } from './TimelineScroll.js';
import {
  change6PopupPage,
  close6Popup,
  open6Popup,
  scroll6Popup,
} from './popup/six-page-actions.js';

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

timelineTitle.forEach((item) => {
  item.addEventListener('click', (event) => {
    activeTarget(event.target);
  });
});

addChart();
// Timeline Scroll
$('#commercial-main-content').scroll(() => contentScroll('commercial'));
$('#revolution-main-content').scroll(() => contentScroll('revolution'));
$('#social-main-content').scroll(() => contentScroll('social'));
$('#awesome-main-content').scroll(() => contentScroll('awesome'));
$('#vibrant-main-content').scroll(() => contentScroll('vibrant'));

// Button click animation
$('.play-video').on('click', openVideo);
$('#close-video').on('click', closeVideo);
$('#play-pause-icons').on('click', playPause);

// 1 page popup
$('#cloud-partnerships-popup-button').on('click', () => open2Popup('cloud-partnerships'));
$('#e4r-popup-button').on('click', () => open2Popup('e4r'));
$('#tech-trends-popup-button').on('click', () => open2Popup('tech-trends'));

// 2 page popup
$('#explore-journey').on('click', () => open2Popup('journey'));
$('#axis-learn-more').on('click', () => {
  open2Popup('axis');
  setTimeout(() => {
    addAxisChart('axis-chart-container', '#cc850a');
  }, 500);
});
$('#falabella-learn-more').on('click', () => {
  open2Popup('falabella');

  setTimeout(() => {
    addFalabellaChart('falabella-chart-container', '#cc850a');
  }, 500);
});
$('#idfc-learn-more').on('click', () => {
  open2Popup('idfc');
  setTimeout(() => {
    addIdfcChart('idfc-chart-container', '#cc850a');
  }, 500);
});

$('#unique-lenovo').on('click', () => open2Popup('lenovo'));
$('#unique-trainline').on('click', () => open2Popup('trainline'));
$('#unique-citi').on('click', () => open2Popup('citi'));
$('#unique-talent').on('click', () => open2Popup('talent'));
$('#unique-books').on('click', () => open2Popup('books'));
$('#bahmni-popup-button').on('click', () => open2Popup('bahmni'));
$('#dpg-popup-button').on('click', () => open2Popup('dpg'));
$('#gic-popup-image').on('click', () => open2Popup('gic'));
$('#gdo-popup-image').on('click', () => open2Popup('gdo'));
$('.arrow-2-page').on('click', change2PopupPage);
$('.close-2-popup').on('click', close2Popup);

// 3 page popup
$('#healthcare-domain').on('click', () => open3Popup('healthcare-domain'));
$('#healthcare-domain-left-arrow').on('click', () => change3PopupPage('left'));
$('#healthcare-domain-right-arrow').on('click', () => change3PopupPage('right'));
$('#dei-popup-button').on('click', () => open3Popup('dei'));
$('#dei-left-arrow').on('click', () => change3PopupPage('left'));
$('#dei-right-arrow').on('click', () => change3PopupPage('right'));
$('#home-twu-popup-button').on('click', () => open3Popup('home-twu'));
$('#home-twu-left-arrow').on('click', () => change3PopupPage('left'));
$('#home-twu-right-arrow').on('click', () => change3PopupPage('right'));
$('#empc-popup-image').on('click', () => open3Popup('empc'));
$('#empc-left-arrow').on('click', () => change3PopupPage('left'));
$('#empc-right-arrow').on('click', () => change3PopupPage('right'));
$('#ai-popup-image').on('click', () => open3Popup('ai'));
$('#ai-left-arrow').on('click', () => change3PopupPage('left'));
$('#ai-right-arrow').on('click', () => change3PopupPage('right'));
$('#cxpd-popup-image').on('click', () => open3Popup('cxpd'));
$('#cxpd-left-arrow').on('click', () => change3PopupPage('left'));
$('#cxpd-right-arrow').on('click', () => change3PopupPage('right'));
$('#dto-popup-image').on('click', () => open3Popup('dto'));
$('#dto-left-arrow').on('click', () => change3PopupPage('left'));
$('#dto-right-arrow').on('click', () => change3PopupPage('right'));
$('#domain-popup-button').on('click', () => open3Popup('domain'));
$('#domain-left-arrow').on('click', () => change3PopupPage('left'));
$('#domain-right-arrow').on('click', () => change3PopupPage('right'));
$('.close-3-popup').on('click', close3Popup);

// 4 page popup
$('#retail-domain').on('click', () => open4Popup('retail-domain'));
$('#retail-domain-left-arrow').on('click', () => change4PopupPage('left'));
$('#retail-domain-right-arrow').on('click', () => change4PopupPage('right'));
$('#marketing-button').on('click', () => open4Popup('marketing'));
$('#marketing-left-arrow').on('click', () => change4PopupPage('left'));
$('#marketing-right-arrow').on('click', () => change4PopupPage('right'));
$('#operational-metrics').on('click', () => open4Popup('operational-metrics'));
$('#operational-metrics-left-arrow').on('click', () => change4PopupPage('left'));
$('#operational-metrics-right-arrow').on('click', () => change4PopupPage('right'));
$('.close-4-popup').on('click', close4Popup);

// 6 page popup
$('#people-function-popup-button').on('click', () => open6Popup('people-function'));
$('#people-function-left-arrow').on('click', () => change6PopupPage('left'));
$('#people-function-right-arrow').on('click', () => change6PopupPage('right'));
$('#client-portfolio-popup-button').on('click', () => {
  open6Popup('client-portfolio');
  setTimeout(() => {
    addIdfcChart('falabella-chart-container-2', '#634f7d');
  }, 500);
});
$('#client-portfolio-left-arrow').on('click', () => change6PopupPage('left'));
$('#client-portfolio-right-arrow').on('click', () => change6PopupPage('right'));
$('.close-6-popup').on('click', close6Popup);

// Popup scroll
var triggerAnimation = true;

$('#people-function-images').scroll(scroll6Popup);
$('#client-portfolio-images').scroll(() => scroll6Popup(triggerAnimation));
$('#healthcare-domain-images').scroll(scroll3Popup);
$('#dei-images').scroll(scroll3Popup);
$('#domain-images').scroll(scroll3Popup);
$('#empc-images').scroll(scroll3Popup);
$('#ai-images').scroll(scroll3Popup);
$('#cxpd-images').scroll(scroll3Popup);
$('#dto-images').scroll(scroll3Popup);
$('#home-twu-images').scroll(scroll3Popup);
$('#marketing-images').scroll(scroll4Popup);
$('#retail-domain-images').scroll(scroll4Popup);
$('#operational-metrics-images').scroll(scroll4Popup);
$('#journey-images').scroll(scroll2Popup);
$('#e4r-images').scroll(scroll2Popup);
$('#bahmni-images').scroll(scroll2Popup);
$('#dpg-images').scroll(scroll2Popup);
$('#gdo-images').scroll(scroll2Popup);
$('#gic-images').scroll(scroll2Popup);
$('#axis-images').scroll(() => scroll2Popup(triggerAnimation));
$('#falabella-images').scroll(() => scroll2Popup(triggerAnimation));
$('#idfc-images').scroll(() => scroll2Popup(triggerAnimation));
