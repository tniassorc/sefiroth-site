(function() {
  const STROKE = 6;

  function createLineBackgrounds() {
    document.querySelectorAll('.pagetitle-bg').forEach(n => n.remove());

    document.querySelectorAll('.pagetitle').forEach(title => {
      const parent = title.parentElement;
      if (!parent) return;

      const range = document.createRange();
      range.selectNodeContents(title);
      const rects = Array.from(range.getClientRects());
      range.detach?.();

      const parentRect = parent.getBoundingClientRect();

      rects.forEach(r => {
        if (r.width < 5 || r.height < 5) return;

        const bg = document.createElement('div');
        bg.className = 'pagetitle-bg';

        bg.style.position = 'absolute';
        bg.style.top = (r.top - parentRect.top - STROKE) + 'px';
        bg.style.left = (r.left - parentRect.left - STROKE) + 'px';
        bg.style.width = (window.innerWidth - r.left + STROKE) + 'px';
        bg.style.height = (r.height + 2 * STROKE) + 'px';
        bg.style.background = 'black';
        bg.style.zIndex = '0';
        bg.style.pointerEvents = 'none';

        parent.appendChild(bg);
      });
    });
  }

  function init() {
    requestAnimationFrame(() => {
      createLineBackgrounds();
    });
    window.addEventListener('resize', createLineBackgrounds);
  }

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready
      .then(init)
      .catch(() => setTimeout(init, 500));
  } else {
    window.addEventListener('load', init);
    setTimeout(init, 500);
  }
})();
