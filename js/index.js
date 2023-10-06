const shareIcon = document.querySelector('.shareIcon');
const tooltip = document.querySelector('.tooltip');

shareIcon.addEventListener('click', () => {
  tooltip.classList.toggle('active');
  shareIcon.classList.toggle('active');
});