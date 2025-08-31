document.addEventListener('DOMContentLoaded', () => {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.getElementById('lightbox-close');

  // Open lightbox for any image inside .post
  document.querySelectorAll('.post img, .bookcontent img').forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightbox.classList.add('show');
    });
  });

  // Close lightbox by clicking outside image or on ×
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox || e.target === closeBtn) {
      lightbox.classList.remove('show');
    }
  });

  // Close with Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      lightbox.classList.remove('show');
    }
  });
});
