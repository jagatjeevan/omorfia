var popupPage = 0;
var isPopupOpen = false;
var currentPopupId;
var currentPopupName;

export const change2PopupPage = () => {
  const leftArrow = document.getElementById(`${currentPopupName}-left-arrow`);
  const rightArrow = document.getElementById(`${currentPopupName}-right-arrow`);
  const popupImages = document.getElementById(`${currentPopupName}-images`);

  if (popupPage === 0) {
    popupPage = 1;
    leftArrow.classList.add('enable');
    leftArrow.disabled = false;
    rightArrow.classList.remove('enable');
    rightArrow.disabled = true;
    popupImages.style.marginLeft = '-100%';
  } else if (popupPage === 1) {
    popupPage = 0;
    rightArrow.classList.add('enable');
    rightArrow.disabled = false;
    leftArrow.classList.remove('enable');
    leftArrow.disabled = true;
    popupImages.style.marginLeft = '0%';
  }
};

export const open2Popup = (popupName) => {
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

export const close2Popup = () => {
  if (!isPopupOpen) return;

  setTimeout(() => {
    if (popupPage === 1) change2PopupPage();
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
