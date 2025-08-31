
if (window.netlifyIdentity) {
  window.netlifyIdentity.init();

  const user = window.netlifyIdentity.currentUser();

  // Redirect non-logged-in users to maintenance page
  if (
    !user &&
    !window.location.pathname.startsWith('/admin') &&
    window.location.pathname !== '/maintenance/'
  ) {
    window.location.href = '/maintenance/';
  }

  // Optional: handle login event
  window.netlifyIdentity.on('login', user => {
    if (window.location.pathname === '/maintenance/') {
      window.location.href = '/';
    }
  });
}
