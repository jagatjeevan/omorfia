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

export const playPause = () => {
  const video = $('#intro-video').get(0);

  if (video.paused) {
    gsap.fromTo(
      '#play-icon',
      {
        width: '65px',
        opacity: '0',
      },
      {
        width: '80px',
        opacity: '0.6',
        duration: 0.4,
      },
    );
    setTimeout(() => {
      gsap.fromTo(
        '#play-icon',
        {
          width: '80px',
          opacity: '0.6',
        },
        {
          width: '65px',
          opacity: '0',
          duration: 0.25,
        },
      );
      video.play();
    }, 400);
  } else {
    video.pause();
    gsap.fromTo(
      '#pause-icon',
      {
        width: '65px',
        opacity: '0',
      },
      {
        width: '80px',
        opacity: '0.6',
        duration: 0.4,
      },
    );
    setTimeout(() => {
      gsap.fromTo(
        '#pause-icon',
        {
          width: '80px',
          opacity: '0.6',
        },
        {
          width: '65px',
          opacity: '0',
          duration: 0.25,
        },
      );
    }, 400);
  }
};
