import { addAxisChart } from '../charts/axis-chart-container.js';
import { addFalabellaChart } from '../charts/falabella-chart-container.js';
import { addIdfcChart } from '../charts/idfc-chart-container.js';

var popupPage = 0;
var isPopupOpen = false;
var currentPopupId;
var currentPopupName;
var currentPopupImagesElement;
var leftArrow;
var rightArrow;

export const change2PopupPage = (direction) => {
  if (popupPage === 0) {
    currentPopupImagesElement.scrollTo(1121, 0);
  } else if (popupPage === 1) {
    currentPopupImagesElement.scrollTo(0, 0);
  } else if (direction === 'reset') {
    currentPopupImagesElement.style.scrollBehavior = 'auto';
    currentPopupImagesElement.scrollTo(0, 0);
    currentPopupImagesElement.style.scrollBehavior = 'smooth';
  }
};

export const open2Popup = (popupName) => {
  isPopupOpen = true;
  currentPopupName = popupName;
  currentPopupId = `#${popupName}-popup`;
  currentPopupImagesElement = document.getElementById(`${popupName}-images`);
  leftArrow = document.getElementById(`${currentPopupName}-left-arrow`);
  rightArrow = document.getElementById(`${currentPopupName}-right-arrow`);

  gsap.fromTo(
    currentPopupId,
    {
      duration: 0.1,
      display: 'none',
    },
    {
      duration: 0.1,
      display: 'block',
    },
  );
  gsap.fromTo(
    currentPopupId,
    {
      duration: 1,
      y: 1000,
    },
    {
      duration: 1,
      y: 0,
    },
  );
};

export const close2Popup = () => {
  if (!isPopupOpen) return;

  isPopupOpen = false;

  setTimeout(() => {
    if (popupPage === 1) change2PopupPage('reset');
  }, 1000);

  gsap.fromTo(
    currentPopupId,
    {
      duration: 1.5,
      y: 0,
    },
    {
      duration: 1.5,
      y: 1000,
    },
  );
  gsap
    .fromTo(
      currentPopupId,
      {
        duration: 0.1,
        display: 'block',
      },
      {
        duration: 0.1,
        display: 'none',
      },
    )
    .delay(1.3);
};

const triggerGraphAnimation1 = () => {
  addAxisChart('axis-chart-container', '#cc850a');
  addFalabellaChart('falabella-chart-container', '#cc850a');
  addIdfcChart('idfc-chart-container', '#cc850a');
};

export const scroll2Popup = (triggerAnimation) => {
  if (triggerAnimation) triggerGraphAnimation1();

  var scrollLeft = currentPopupImagesElement.scrollLeft;

  if (scrollLeft < 1000) {
    popupPage = 0;
    leftArrow.classList.remove('enable');
    leftArrow.disabled = true;
    rightArrow.classList.add('enable');
    rightArrow.disabled = false;
  }
  if (scrollLeft > 1000 && scrollLeft < 2200) {
    popupPage = 1;
    leftArrow.classList.add('enable');
    leftArrow.disabled = false;
    rightArrow.classList.remove('enable');
    rightArrow.disabled = true;
  }
};
