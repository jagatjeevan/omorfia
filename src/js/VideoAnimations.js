var isOpen = false;

export const openVideo = () => {
  isOpen = true;

  gsap.fromTo(
    '.start-text',
    {
      y: 0,
      duration: 1,
    },
    {
      y: -150,
      duration: 1,
    },
  );
  gsap.fromTo(
    '.twi',
    {
      margin: '25px 0',
      duration: 1,
    },
    {
      margin: '10px 0',
      duration: 1,
    },
  );
  gsap.fromTo('.play-video', { opacity: 1 }, { opacity: 0, duration: 1.1 });
  gsap.fromTo(
    '.video-area',
    { opacity: 0, display: 'none' },
    { display: 'flex', duration: 2, opacity: 1 },
  );
  $('#intro-video').get(0).currentTime = 0;
  $('#intro-video').get(0).play();
};

export const closeVideo = () => {
  if (!isOpen) return;

  isOpen = false;

  gsap.fromTo(
    '.start-text',
    {
      y: -150,
      duration: 1,
    },
    {
      y: 0,
      duration: 1,
    },
  );
  gsap.fromTo(
    '.twi',
    {
      margin: '10px 0',
      duration: 1,
    },
    {
      margin: '25px 0',
      duration: 1,
    },
  );
  gsap.fromTo('.play-video', { opacity: 0, duration: 1.1 }, { opacity: 1 });
  gsap.fromTo(
    '.video-area',
    { display: 'flex', duration: 2, opacity: 1 },
    { opacity: 0, display: 'none' },
  );
  $('#intro-video').trigger('pause');
};
