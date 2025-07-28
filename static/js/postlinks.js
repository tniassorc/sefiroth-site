var postLinks = document.querySelectorAll('.post a');
for (var i = 0; i < postLinks.length; i++) {
  postLinks[i].target = '_blank';
  postLinks[i].rel = 'noopener noreferrer';
}
