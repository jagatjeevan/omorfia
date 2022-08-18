const cones = document.querySelectorAll('.wheel-container .cone');

const addClickOnCones = (event) => {
  console.log('target', event.target);
};

cones.forEach((item) => {
  item.addEventListener('click', addClickOnCones);
});
