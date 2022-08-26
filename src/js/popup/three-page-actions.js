var popupPage = 0;
var isPopupOpen = false;
var currentPopupId;
var currentPopupName;

currentPopupName = 'healthcare-domain';
currentPopupId = `#${'healthcare-domain'}-popup`;

export const change3PopupPage = (direction) => {
  const leftArrow = document.getElementById(`${currentPopupName}-left-arrow`);
  const rightArrow = document.getElementById(`${currentPopupName}-right-arrow`);
  const popupImages = document.getElementById(`${currentPopupName}-images`);

  if (popupPage === 0 && direction === 'right') {
    popupPage = 1;
    leftArrow.classList.add('enable');
    leftArrow.disabled = false;
    popupImages.style.marginLeft = '-100%';
  } else if (popupPage === 1 && direction === 'left') {
    popupPage = 0;
    leftArrow.classList.remove('enable');
    leftArrow.disabled = true;
    popupImages.style.marginLeft = '0%';
  } else if (popupPage === 1 && direction === 'right') {
    popupPage = 2;
    rightArrow.classList.remove('enable');
    rightArrow.disabled = true;
    popupImages.style.marginLeft = '-200%';
  } else if (popupPage === 2 && direction === 'left') {
    popupPage = 1;
    rightArrow.classList.add('enable');
    rightArrow.disabled = false;
    popupImages.style.marginLeft = '-100%';
  }
};

export const open3Popup = (popupName) => {
  isPopupOpen = true;
  currentPopupName = popupName;
  currentPopupId = `#${popupName}-popup`;

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

export const close3Popup = () => {
  if (!isPopupOpen) return;

  isPopupOpen = false;

  setTimeout(() => {
    if (popupPage === 2) change3PopupPage('left');
    if (popupPage === 1) change3PopupPage('left');
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
