$('.cone').on('click', function () {
  const className = $(this).attr('class');
  $('.wheel-container').each(function () {
    const thisClass = $('.cone').attr('class');
    if (thisClass == className) {
      const timeline = gsap.timeline({ defaults: { duration: 2, ease: Circ.easeOut } });
      timeline
        .set('#screen1', { display: 'none', opacity: 0 })
        .set('#screen2', { display: 'flex', opacity: 1 })
        .from('.lens-details', { y: -1700 })
        .from('.lens-roadmap', { y: -1700 })
        .from('.main-stage', { y: -1700 });
    }
  });
});
