var popupPage = 0;
var isPopupOpen = false;
var currentPopupId;
var currentPopupName;
var currentPopupImagesElement;
var leftArrow;
var rightArrow;

export const change4PopupPage = (direction) => {
  if (popupPage === 0 && direction === 'right') {
    currentPopupImagesElement.scrollTo(1121, 0);
  } else if (popupPage === 1 && direction === 'left') {
    currentPopupImagesElement.scrollTo(0, 0);
  } else if (popupPage === 1 && direction === 'right') {
    currentPopupImagesElement.scrollTo(2242, 0);
  } else if (popupPage === 2 && direction === 'left') {
    currentPopupImagesElement.scrollTo(1121, 0);
  } else if (popupPage === 2 && direction === 'right') {
    currentPopupImagesElement.scrollTo(3363, 0);
  } else if (popupPage === 3 && direction === 'left') {
    currentPopupImagesElement.scrollTo(2242, 0);
  } else if (direction === 'reset') {
    currentPopupImagesElement.style.scrollBehavior = 'auto';
    currentPopupImagesElement.scrollTo(0, 0);
    currentPopupImagesElement.style.scrollBehavior = 'smooth';
  }
};

export const open4Popup = (popupName) => {
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

export const close4Popup = () => {
  if (!isPopupOpen) return;

  isPopupOpen = false;

  setTimeout(() => {
    if (popupPage === 3 || popupPage === 2 || popupPage === 1) change4PopupPage('reset');
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

export const scroll4Popup = () => {
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
    rightArrow.classList.add('enable');
    rightArrow.disabled = false;
  }
  if (scrollLeft > 2200) {
    popupPage = 2;
    leftArrow.classList.add('enable');
    leftArrow.disabled = false;
    rightArrow.classList.add('enable');
    rightArrow.disabled = false;
  }
  if (scrollLeft > 3300) {
    popupPage = 3;
    leftArrow.classList.add('enable');
    leftArrow.disabled = false;
    rightArrow.classList.remove('enable');
    rightArrow.disabled = true;
  }
};
