---
layout: page
title: Seite im Wartungsmodus
permalink: /maintenance/
---

Diese Seite wird gerade gewartet und ist vorrübergehend nicht verfügbar.

<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
<script>
  if (window.netlifyIdentity) {
    window.netlifyIdentity.init();

    const user = window.netlifyIdentity.currentUser();
    if (user) {
      window.location.href = "/";
    }

    window.netlifyIdentity.on('login', user => {
      window.location.href = "/";
    });
  }
</script>
