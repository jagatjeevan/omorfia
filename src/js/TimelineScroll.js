import { addChart } from './charts/chart-container.js';

var isGraphLoaded = false;
var timelineTitles;

export const contentScroll = (pageName) => {
  timelineTitles = document.querySelectorAll(`#${pageName}-steps > .step > .title`);
  console.log(document.querySelectorAll(`#${pageName}-steps > .step > .title`));
  var current = '';
  let content = document.getElementById(`${pageName}-main-content`);
  let sections = content.querySelectorAll('section');
  // console.log(sections);
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
    item.parentElement.classList.remove('current');
    item.parentElement.classList.remove('completed');
  });
  var isCompleted = false;
  timelineTitles.forEach((item) => {
    if (!isCompleted) item.parentElement.classList.add('completed');
    if (item === target.parentElement) isCompleted = true;
    console.log(item);
  });
  target.parentElement.parentElement.classList.add('current');
};
