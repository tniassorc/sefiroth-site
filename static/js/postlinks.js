document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('a');
  const currentHost = location.hostname;

  links.forEach(function (link) {
    const href = link.getAttribute('href');

    if (!href) return;

    if (link.classList.contains('backarrow')) return;

    if (href.endsWith('.pdf')) {
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      return;
    }

    const linkUrl = new URL(href, location.href);

    if (linkUrl.hostname !== currentHost) {
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    }
  });
});
