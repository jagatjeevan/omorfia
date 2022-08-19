var journeyPopupPage = 0;
var isPopupOpen = false;

const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
const journeyImages = document.getElementById('journey-images');

export const changeJourneyPage = () => {
  console.log('hi');
  if (journeyPopupPage === 0) {
    journeyPopupPage = 1;
    leftArrow.classList.add('enable');
    leftArrow.disabled = false;
    rightArrow.classList.remove('enable');
    rightArrow.disabled = true;
    journeyImages.style.marginLeft = '-100%';
  } else if (journeyPopupPage === 1) {
    journeyPopupPage = 0;
    rightArrow.classList.add('enable');
    rightArrow.disabled = false;
    leftArrow.classList.remove('enable');
    leftArrow.disabled = true;
    journeyImages.style.marginLeft = '0%';
  }
};

export const openPopup = () => {
  isPopupOpen = true;
  gsap.fromTo(
    '#journey-popup',
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
    '.journey-popup',
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

export const closePopup = () => {
  if (!isPopupOpen) return;

  gsap.fromTo(
    '.journey-popup',
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
      '#journey-popup',
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
