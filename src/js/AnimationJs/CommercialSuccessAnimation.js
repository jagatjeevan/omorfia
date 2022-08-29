// Commercial Success Transitions
export const loadCommercialSuccess = () => {
  $('#commercial-success').css({
    zIndex: 1,
  });
  setTimeout(() => {
    $('#commercial-success').css({
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
      '#commerical-description',
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
      '#commercial-main-content',
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
  gsap
    .fromTo(
      '#commercial-timeline',
      {
        duration: 2,
        opacity: 0,
      },
      {
        duration: 2,
        opacity: 1,
      },
    )
    .delay(2);
};

//******************************* */

export const exitCommercialSuccess = () => {
  gsap.fromTo(
    '#commercial-success',
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
    $('#commercial-success').css({
      zIndex: -1,
      opacity: 1,
    });
  }, 1100);
};
