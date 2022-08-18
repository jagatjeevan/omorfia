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

//Button click animation
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
