gsap.to('#screen1', {
  duration: 1.3,
  backgroundColor: '#003d4f',
});

gsap
  .from('.background-image', {
    opacity: 0,
    duration: 0.5,
  })
  .delay(1.3);

gsap
  .from('.skeleton', {
    opacity: 0,
    duration: 0.5,
  })
  .delay(1.8);

gsap
  .from('.lenses-core', {
    opacity: 0,
    duration: 0.5,
  })
  .delay(2);

gsap
  .from('.lense-positiveSocialChange', {
    opacity: 0,
    duration: 0.5,
  })
  .delay(2.4);

gsap
  .from('.lense-revolutionizeTech', {
    opacity: 0,
    duration: 0.5,
  })
  .delay(2.8);

gsap
  .from('.lense-awesomePartner', {
    opacity: 0,
    duration: 0.5,
  })
  .delay(3.2);

gsap
  .from('.lense-vibrantCommunity', {
    opacity: 0,
    duration: 0.5,
  })
  .delay(3.6);

gsap
  .from('.lense-commercialSuccess', {
    opacity: 0,
    duration: 0.5,
  })
  .delay(4);

gsap
  .from('.start-text', {
    duration: 1.3,
    x: -200,
    opacity: 0,
  })
  .delay(1.3);

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

// Exit transition
const pageTransition = () => {
  gsap.to('.start-text', {
    duration: 1.3,
    x: -200,
    opacity: 0,
  });
  gsap.to('.lense-commercialSuccess-back', {
    zIndex: 5,
    duration: 0,
  });
  gsap.to('.lense-commercialSuccess-back', {
    opacity: 1,
    duration: 1.5,
  });
  gsap
    .to(
      `.lense-positiveSocialChange,
        .lense-revolutionizeTech,
        .lense-awesomePartner,
        .lense-vibrantCommunity,
        .lense-commercialSuccess,
        .lenses-core,
        .background-image,
        .skeleton`,
      {
        duration: 0.5,
        opacity: 0,
      },
    )
    .delay(0.8);
  gsap
    .to('.lense-commercialSuccess-back', {
      duration: 0.8,
      left: '-158.8%',
      width: '10%',
      top: '-4.5%',
    })
    .delay(1.3);
  gsap
    .to('#screen1', {
      duration: 1,
      backgroundColor: '#ECF1F3',
    })
    .delay(1.3);
  gsap
    .to('#screen1', {
      duration: 0.1,
      display: 'none',
    })
    .delay(2.3);
  // load new screen
};

$('.lense-commercialSuccess').on('click', pageTransition);
