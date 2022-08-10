gsap.to('#screen1', {
  duration: 1.3,
  backgroundColor: '#003d4f',
});

gsap
  .from('.backgruond-dots', {
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
  .from('.start-text', {
    duration: 1.3,
    x: -200,
    opacity: 0,
  })
  .delay(1.3);
