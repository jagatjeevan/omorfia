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
  .from('.start-text', {
    duration: 1.3,
    x: -200,
    opacity: 0,
  })
  .delay(1.3);

//Button click animation
$('.play-video').on('click', function () {
  gsap.set('.video-area', { display: 'flex', duration: 1.3 }).delay(1.2);
});
