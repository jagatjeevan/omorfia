// Screen 1 Transitions
const loadScreen1 = () => {
  gsap.fromTo(
    '#screen1',
    {
      duration: 0.1,
      display: 'none',
    },
    {
      duration: 0.1,
      display: 'flex',
    },
  );
  gsap.fromTo(
    '#screen1',
    {},
    {
      duration: 1.3,
      backgroundColor: '#003d4f',
    },
  );

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
};
const exitScreen1 = () => {
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
    '.lense-commercialSuccess-back',
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
    '.lense-commercialSuccess-back',
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
      '.lense-commercialSuccess-back',
      {
        duration: 0.8,
        width: '93%',
        left: '50%',
        top: '50%',
      },
      {
        duration: 0.8,
        left: '-103.5%',
        width: '8%',
        top: '-1.70%',
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
        duration: 0.1,
        display: 'flex',
      },
      {
        duration: 0.1,
        display: 'none',
      },
    )
    .delay(2.3);
};

// Commercial Success Transitions
const loadCommercialSuccess = () => {
  gsap.fromTo(
    '#commercial-success',
    {
      duration: 0.1,
      display: 'none',
    },
    {
      duration: 0.1,
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
const exitCommercialSuccess = () => {
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

$('.lense-commercialSuccess').on('click', () => {
  exitScreen1();
  loadCommercialSuccess();
});
$('#back-icon-button').on('click', () => {
  console.log('hi');
  exitCommercialSuccess();
  loadScreen1();
});

loadScreen1();

// Button click animation
$('.play-video').on('click', function () {
  gsap.to('.start-text', {
    // opacity: 0,
    y: -200,
    duration: 1,
  });
  gsap.fromTo('.play-video', { opacity: 1 }, { opacity: 0, duration: 1.1 });
  gsap.fromTo('.video-area', { opacity: 0 }, { display: 'flex', duration: 2, opacity: 1 });
});
$('#close-video').on('click', function () {
  gsap.to('.start-text', {
    y: 0,
    duration: 1,
  });
  gsap.fromTo('.play-video', { opacity: 0, duration: 1.1 }, { opacity: 1 });
  gsap.fromTo('.video-area', { display: 'flex', duration: 2, opacity: 1 }, { opacity: 0 });
});
