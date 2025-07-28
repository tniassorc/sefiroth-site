document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.post a');

  links.forEach(function (link) {
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  });
});
