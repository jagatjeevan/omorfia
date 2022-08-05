// gsap.from('.start-text', { duration: 2, y: '-100%', ease: 'bounce' });
const timeline = gsap.timeline({ defaults: { duration: 1, ease: Circ.easeOut } });
timeline
  .from('.screen1', {
    delay: 1,
    duration: 3,
    scale: 0,
    transformOrigin: 'left top',
    ease: 'sine.out',
  })
  .from('.start-text', { x: -600, ease: 'bounce' })
  .from('.wheel-container', { y: -1700 })
  .from('.why-core', { y: -1700 })
  .from('.cone1', { y: -1700 })
  .from('.cone2', { y: -1700, x: 300 })
  .from('.cone3', { y: 1700, x: -600 })
  .from('.cone4', { y: 1700, x: -600 })
  .from('.cone5', { y: -1700, x: -900 });
