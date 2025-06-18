function setupTooltips() {
  const container = document.querySelector('.imagecontainer');
  if (!container) return;

  const spots = document.querySelectorAll('.spot');

  spots.forEach(spot => {
    const tooltipId = 'tt' + spot.id.replace('circle', '');
    const tooltip = document.getElementById(tooltipId);
    if (!tooltip) return;

    // Make sure tooltip is positioned absolutely inside the container
    tooltip.style.position = 'absolute';

    function updatePosition() {
      const containerRect = container.getBoundingClientRect();
      const spotRect = spot.getBoundingClientRect();

      // Position relative to container
      const left = spotRect.left - containerRect.left;
      const top = spotRect.top - containerRect.top;

      tooltip.style.left = `${left}px`;
      tooltip.style.top = `${top}px`;
    }

    // Show tooltip and update position on hover
    spot.addEventListener('mouseenter', () => {
      updatePosition();
      tooltip.style.opacity = '1';
      tooltip.style.pointerEvents = 'auto';
    });

    spot.addEventListener('mouseleave', () => {
      tooltip.style.opacity = '0';
      tooltip.style.pointerEvents = 'none';
    });

    // Update position on window resize and scroll if tooltip is visible
    window.addEventListener('resize', () => {
      if (tooltip.style.opacity === '1') updatePosition();
    });
    window.addEventListener('scroll', () => {
      if (tooltip.style.opacity === '1') updatePosition();
    });
  });
}

window.addEventListener('load', setupTooltips);
