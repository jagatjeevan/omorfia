// Commercial Success Transitions
export const loadPositiveSocialChange = () => {
  $('#positive-social-change').css({
    zIndex: 1,
  });
  setTimeout(() => {
    $('#positive-social-change').css({
      zIndex: 2,
    });
  }, 3000);

  gsap
    .fromTo(
      '.back-icon-button',
      {
        duration: 0.8,
        opacity: 0,
      },
      {
        duration: 0.8,
        opacity: 1,
      },
    )
    .delay(2.3);
  gsap
    .fromTo(
      '.description',
      {
        duration: 1,
        x: -100,
        opacity: 0,
      },
      {
        duration: 1,
        x: 0,
        opacity: 1,
      },
    )
    .delay(2.3);
  gsap
    .fromTo(
      '.main-content',
      {
        duration: 2.3,
        opacity: 0,
      },
      {
        duration: 2.3,
        opacity: 1,
      },
    )
    .delay(2.3);
};

//******************************* */

export const exitPositiveSocialChange = () => {
  gsap.fromTo(
    '#positive-social-change',
    {
      duration: 1,
      opacity: 1,
    },
    {
      duration: 1,
      opacity: 0,
    },
  );

  setTimeout(() => {
    $('#positive-social-change').css({
      zIndex: -1,
      opacity: 1,
    });
  }, 1100);
};
