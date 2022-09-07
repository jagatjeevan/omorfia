import { addChart } from './charts/chart-container.js';

var isGraphLoaded = false;
const timelineTitles = document.querySelectorAll('#commercial-steps > .step > .title');

export const contentScroll = (pageName) => {
  var current = '';
  let content = document.getElementById(`${pageName}-main-content`);
  let sections = content.querySelectorAll('section');
  sections.forEach((section) => {
    let top = content.scrollTop;
    let offset = section.offsetTop;
    let height = section.offsetHeight;
    if (top >= offset - 60 && top <= offset + height) {
      current = section.getAttribute('id');
      if (pageName === 'commercial') {
        if (current === 'twi-growth' && !isGraphLoaded) {
          addChart();
          isGraphLoaded = true;
        } else if (current !== 'twi-growth' && isGraphLoaded) {
          isGraphLoaded = false;
        }
      }
      const target = document.querySelector(`[href='#${current}']`);
      activeTarget(target);
    }
  });
};

export const activeTarget = (target) => {
  timelineTitles.forEach((item) => {
    if (item !== target) item.parentElement.classList.remove('current');
  });
  target.parentElement.parentElement.classList.add('current');
};
