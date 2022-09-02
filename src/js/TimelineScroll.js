import { addChart } from "./charts/chart-container.js";

var isGraphLoaded = false;
const timelineTitle = document.querySelectorAll('.title');

export const commercialContentScroll = () => {
  var current = '';
  let commercialContent = document.getElementById('commercial-main-content');
  let sections = commercialContent.querySelectorAll('section');
  sections.forEach((section) => {
    let top = commercialContent.scrollTop;
    let offset = section.offsetTop;
    let height = section.offsetHeight;
    if (top >= offset - 60 && top <= offset + height) {
      current = section.getAttribute('id');
      if (current === 'twi-growth' && !isGraphLoaded) {
        addChart();
        isGraphLoaded = true;
      } else if (current !== 'twi-growth' && isGraphLoaded) {
        isGraphLoaded = false;
      }
      const target = document.querySelector(`[href='#${current}']`);
      activeTarget(target);
    }
  });
}

export const activeTarget = (target) => {
  timelineTitle.forEach((item) => {
    if (item !== target) item.parentElement.classList.remove('completed');
  });
  target.parentElement.parentElement.classList.add('completed');
}