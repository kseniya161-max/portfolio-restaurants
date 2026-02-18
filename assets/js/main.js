alert('main.js loaded');

document.addEventListener('DOMContentLoaded', () => {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const closeBtn = document.getElementById('lightboxClose');

  if (!lightbox || !lightboxImg || !closeBtn) return;

  function open(src) {
    lightboxImg.src = src;
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
  }

  function close() {
    lightbox.hidden = true;
    lightboxImg.src = '';
    document.body.style.overflow = '';
  }

  // Открытие только по клику на фото галереи портфолио
  document.querySelectorAll('#portfolio .case__gallery img').forEach(img => {
    img.addEventListener('click', () => open(img.getAttribute('src')));
  });

  // Закрытие
  closeBtn.addEventListener('click', close);

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) close(); // клик по фону
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.hidden && e.key === 'Escape') close();
  });
});
