const shareIcon = document.querySelector('.shareIcon');
const tooltip = document.querySelector('.tooltip');
const body = document.querySelector('body');
const active = document.querySelector('.active');

shareIcon.addEventListener('click', () => {
  tooltip.classList.toggle('active');
  shareIcon.classList.toggle('active');
});

body.addEventListener('click', (event) => {
  if (!event.target.closest('.tooltip') && !event.target.closest('.shareIcon')) {
    tooltip.classList.remove('active');
    shareIcon.classList.remove('active');
  }
});

