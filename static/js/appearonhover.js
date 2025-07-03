document.addEventListener('DOMContentLoaded', () => {
  const sefirothlogo = document.querySelector('.sefirothlogo');
  const sefiinfo = document.querySelector('.sefiinfo');
  const tree = document.querySelector('.tree');

  if (!sefirothlogo || !sefiinfo || !tree) return;

  let hideTimeout;

  function positionSefiInfo() {
    const imageRect = tree.getBoundingClientRect();
    sefiinfo.style.position = 'absolute';
    sefiinfo.style.right = `${window.innerWidth - imageRect.left}px`;
  }

  positionSefiInfo();

  // Helper to clear hide timeout
  function clearHideTimeout() {
    if (hideTimeout) {
      clearTimeout(hideTimeout);
      hideTimeout = null;
    }
  }

  // Show sefiinfo and clear hide timeout
  function showSefiinfo() {
    clearHideTimeout();
    positionSefiInfo();
    sefiinfo.style.opacity = '1';
    sefiinfo.style.pointerEvents = 'auto';
  }

  // Start hide timeout only if neither element is hovered
  function startHideTimeout() {
    hideTimeout = setTimeout(() => {
      sefiinfo.style.opacity = '0';
      sefiinfo.style.pointerEvents = 'none';
      hideTimeout = null;
    }, 1000);
  }

  // Track if sefirothlogo or sefiinfo is hovered
  let issefirothlogoHovered = false;
  let isSefiinfoHovered = false;

  sefirothlogo.addEventListener('mouseenter', () => {
    issefirothlogoHovered = true;
    showSefiinfo();
  });

  sefirothlogo.addEventListener('mouseleave', () => {
    issefirothlogoHovered = false;
    if (!isSefiinfoHovered) startHideTimeout();
  });

  sefiinfo.addEventListener('mouseenter', () => {
    isSefiinfoHovered = true;
    showSefiinfo();
  });

  sefiinfo.addEventListener('mouseleave', () => {
    isSefiinfoHovered = false;
    if (!issefirothlogoHovered) startHideTimeout();
  });

  window.addEventListener('resize', () => {
    if (sefiinfo.style.opacity === '1') {
      positionSefiInfo();
    }
  });
});
