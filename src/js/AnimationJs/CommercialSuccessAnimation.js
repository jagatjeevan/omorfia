// Commercial Success Transitions
export const loadCommercialSuccess = () => {
  gsap.fromTo(
    '#commercial-success',
    {
      duration: 0.001,
      display: 'none',
    },
    {
      duration: 0.001,
      display: 'block',
    },
  );
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
      '.nav-2',
      {},
      {
        duration: 1,
        backgroundColor: '#cc850a',
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
export const exitCommercialSuccess = () => {
  gsap.fromTo(
    '#commercial-success',
    {
      duration: 0.1,
      display: 'block',
    },
    {
      duration: 0.1,
      display: 'none',
    },
  );
};
