if (!('ontouchstart' in window)) {
  function setupInfoBoxes() {
    const tree = document.querySelector('.tree');
    if (!tree) return;

    const spots = document.querySelectorAll('.spot');
    let currentVisibleInfoBox = null;
    let hideTimeout = null;

    spots.forEach(spot => {
      const infoId = 'book' + spot.id.replace('circle', '');
      const infoBox = document.getElementById(infoId);
      if (!infoBox) return;

      function positionInfoBox() {
        const treeRect = tree.getBoundingClientRect();
        const containerRect = tree.parentElement.getBoundingClientRect();

        infoBox.style.position = 'absolute';
        infoBox.style.left = `${treeRect.right - containerRect.left}px`;
        infoBox.style.top = `${treeRect.top - containerRect.top}px`;
      }

    // Show info box and cancel any hide timeout
      function showInfoBox() {
        if (hideTimeout) {
          clearTimeout(hideTimeout);
          hideTimeout = null;
        }

      // If a different info box is visible, hide it immediately
        if (currentVisibleInfoBox && currentVisibleInfoBox !== infoBox) {
          currentVisibleInfoBox.style.opacity = '0';
          currentVisibleInfoBox.style.pointerEvents = 'none';
        }

        positionInfoBox();
        infoBox.style.opacity = '1';
        infoBox.style.pointerEvents = 'auto';

        currentVisibleInfoBox = infoBox;
      }

    // Start hiding the info box with delay
      function startHideTimeout() {
        hideTimeout = setTimeout(() => {
          infoBox.style.opacity = '0';
          infoBox.style.pointerEvents = 'none';
          if (currentVisibleInfoBox === infoBox) {
            currentVisibleInfoBox = null;
          }
          hideTimeout = null;
        }, 1000);
      }

    // Track hover states
      let isSpotHovered = false;
      let isInfoBoxHovered = false;

    // Spot event listeners
      spot.addEventListener('mouseenter', () => {
        isSpotHovered = true;
        showInfoBox();
      });

      spot.addEventListener('mouseleave', () => {
        isSpotHovered = false;
        if (!isInfoBoxHovered) startHideTimeout();
      });

    // Info box event listeners
      infoBox.addEventListener('mouseenter', () => {
        isInfoBoxHovered = true;
        if (hideTimeout) {
          clearTimeout(hideTimeout);
          hideTimeout = null;
        }
      });

      infoBox.addEventListener('mouseleave', () => {
        isInfoBoxHovered = false;
        if (!isSpotHovered) startHideTimeout();
      });

    // Reposition on resize if visible
      window.addEventListener('resize', () => {
        if (infoBox.style.opacity === '1') positionInfoBox();
      });
    });
  }

  window.addEventListener('load', setupInfoBoxes);
}