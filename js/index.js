// const shareIcon = document.querySelector('.shareIcon');
// const hide = document.querySelector('.hide');

// shareIcon.addEventListener('click', () => {
//   hide.style.display = hide.style.display === 'none' ? 'flex' : 'none';
// });

const shareIcon = document.querySelector('.shareIcon');
const tooltip = document.querySelector('.tooltip');

shareIcon.addEventListener('click', () => {
  tooltip.classList.toggle('active');
  shareIcon.classList.toggle('active');
});