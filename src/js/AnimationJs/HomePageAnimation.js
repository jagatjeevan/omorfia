export const loadScreen1 = () => {
  setTimeout(() => {
    $('#screen1').css({
      zIndex: 2,
    });
  }, 1000);

  gsap
    .fromTo(
      '#screen1',
      {},
      {
        duration: 0.5,
        backgroundColor: '#003d4f',
      },
    )
    .delay(0.3);
  gsap
    .fromTo(
      '#screen1',
      {
        opacity: 0,
      },
      {
        duration: 1,
        opacity: 1,
      },
    )
    .delay(1);
  gsap
    .fromTo(
      '.nav-0',
      {},
      {
        duration: 1.3,
        color: 'white',
        backgroundColor: '#003d4f',
        height: '56px',
      },
    )
    .delay(0.3);
  gsap
    .fromTo(
      '.nav-1, .nav-2, .nav-3, .nav-4, .nav-5',
      {},
      {
        duration: 0.1,
        backgroundColor: 'white',
        color: '#003d4f',
      },
    )
    .delay(0.3);
  gsap
    .fromTo(
      '.background-image',
      {
        opacity: 0,
        duration: 0.5,
      },
      {
        opacity: 0.1,
        duration: 0.5,
      },
    )
    .delay(1.3);

  gsap
    .fromTo(
      '.skeleton',
      {
        opacity: 0,
        duration: 0.5,
      },
      {
        opacity: 1,
        duration: 0.5,
      },
    )
    .delay(1.8);

  gsap
    .fromTo(
      '.lenses-core',
      {
        opacity: 0,
        duration: 0.5,
      },
      {
        opacity: 2,
        duration: 0.5,
      },
    )
    .delay(2);

  gsap
    .fromTo(
      '.lense-positiveSocialChange',
      {
        opacity: 0,
        duration: 0.5,
      },
      {
        opacity: 1,
        duration: 0.5,
      },
    )
    .delay(2.4);

  gsap
    .fromTo(
      '.lense-revolutionizeTech',
      {
        opacity: 0,
        duration: 0.5,
      },
      {
        opacity: 1,
        duration: 0.5,
      },
    )
    .delay(2.8);

  gsap
    .fromTo(
      '.lense-awesomePartner',
      {
        opacity: 0,
        duration: 0.5,
      },
      {
        opacity: 1,
        duration: 0.5,
      },
    )
    .delay(3.2);

  gsap
    .fromTo(
      '.lense-vibrantCommunity',
      {
        opacity: 0,
        duration: 0.5,
      },
      {
        opacity: 1,
        duration: 0.5,
      },
    )
    .delay(3.6);

  gsap
    .fromTo(
      '.lense-commercialSuccess',
      {
        opacity: 0,
        duration: 0.5,
      },
      {
        opacity: 1,
        duration: 0.5,
      },
    )
    .delay(4);

  gsap
    .fromTo(
      '.start-text',
      {
        duration: 1.3,
        x: -200,
        opacity: 0,
      },
      {
        duration: 1.3,
        x: 0,
        opacity: 1,
      },
    )
    .delay(1.3);

  $('.lense-commercialSuccess-back').css({
    zIndex: -1,
    opacity: 0,
  });
  $('.lense-revolutionizeTech-back').css({
    zIndex: -1,
    opacity: 0,
  });
  $('.lense-vibrantCommunity-back').css({
    zIndex: -1,
    opacity: 0,
  });
  $('.lense-positiveSocialChange-back').css({
    zIndex: -1,
    opacity: 0,
  });
  $('.lense-awesomePartner-back').css({
    zIndex: -1,
    opacity: 0,
  });
};

//***************************************************** */

export const exitScreen1 = (nextPage) => {
  const nextPageBackIcon = `.lense-${nextPage}-back`;

  gsap.fromTo(
    '.start-text',
    {
      duration: 1.3,
      x: 0,
      opacity: 1,
    },
    {
      duration: 1.3,
      x: -200,
      opacity: 0,
    },
  );
  gsap.fromTo(
    nextPageBackIcon,
    {
      zIndex: -1,
      duration: 0,
    },
    {
      zIndex: 5,
      duration: 0,
    },
  );
  gsap.fromTo(
    nextPageBackIcon,
    {
      opacity: 0,
      duration: 1.5,
    },
    {
      opacity: 1,
      duration: 1.5,
    },
  );
  gsap
    .fromTo(
      `.lense-positiveSocialChange,
        .lense-revolutionizeTech,
        .lense-awesomePartner,
        .lense-vibrantCommunity,
        .lense-commercialSuccess,
        .lenses-core,
        .background-image,
        .skeleton`,
      {},
      {
        duration: 0.5,
        opacity: 0,
      },
    )
    .delay(0.8);
  gsap
    .fromTo(
      nextPageBackIcon,
      {
        duration: 0.8,
        width: '93%',
        left: '50%',
        top: '50%',
      },
      {
        duration: 0.8,
        left: '-104.9%',
        width: '8%',
        top: '-0.3%',
      },
    )
    .delay(1.3);
  gsap
    .fromTo(
      '.nav-0',
      {},
      {
        duration: 1,
        backgroundColor: 'white',
        color: '#003d4f',
      },
    )
    .delay(1.3);

  gsap
    .fromTo(
      '#screen1',
      {},
      {
        duration: 1,
        backgroundColor: '#ECF1F3',
      },
    )
    .delay(1.3);
  gsap
    .fromTo(
      '#screen1',
      {
        duration: 1,
        opacity: 1,
      },
      {
        duration: 1,
        opacity: 0,
      },
    )
    .delay(2.0);

  setTimeout(() => {
    $('#screen1').css({
      zIndex: -1,
    });
  }, 3300);
};
