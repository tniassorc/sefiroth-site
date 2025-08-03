document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('a');
  const currentHost = location.hostname;

  links.forEach(function (link) {
    const href = link.getAttribute('href');

    if (!href) return;

    // Open PDFs in new tab
    if (href.endsWith('.pdf')) {
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      return;
    }

    // Create a full URL to compare hosts
    const linkUrl = new URL(href, location.href);

    // Open external links in new tab
    if (linkUrl.hostname !== currentHost) {
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    }
  });
});
