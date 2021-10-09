const images = document.querySelectorAll('img');
const modal = document.createElement('div');
const modalImage = document.createElement('img');

images.forEach((img) => img.addEventListener('click', () => showModal(img)));

modal.title = 'Click to close';
modal.classList.add('modal');

function showModal(img) {
  modalImage.src = img.src;
  modal.appendChild(modalImage);
  document.body.appendChild(modal);
}

modal.addEventListener('click', () => {
  modal.remove();
});
