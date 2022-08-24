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
      '.nav-5',
      {},
      {
        duration: 1,
        backgroundColor: '#47a1ad',
        color: 'white',
        height: '56px',
      },
    )
    .delay(1.3);
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
  gsap
  .fromTo(
    '.nav-5',
    {
    },
    {
      duration: 1,
      backgroundColor: '#ffffff',
      color: '#003d4f',
      height: '56px',
    },
  )
  .delay(1.3);

  setTimeout(() => {
    $('#revolutionize-tech').css({
      zIndex: -1,
      opacity: 1,
    });
  }, 1100);
};
