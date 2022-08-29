// Commercial Success Transitions
export const loadRevolutionizeTech = () => {
  $('#revolutionize-tech').css({
    zIndex: 1,
  });
  setTimeout(() => {
    $('#revolutionize-tech').css({
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
      '#revolution-description',
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
      '#revolution-main-content',
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
      '#revolution-timeline',
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

export const exitRevolutionizeTech = () => {
  gsap.fromTo(
    '#revolutionize-tech',
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
    $('#revolutionize-tech').css({
      zIndex: -1,
      opacity: 1,
    });
  }, 1100);
};
