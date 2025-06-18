document.addEventListener('DOMContentLoaded', () => {
  const spots = document.querySelectorAll('[id^="circle"]');

  spots.forEach(spot => {
    const spotId = spot.id; // e.g., "circle01"
    const tooltipId = 'ti' + spotId.replace('circle', ''); // "tt01"
    const tooltip = document.getElementById(tooltipId);

    if (!tooltip) return;

    spot.addEventListener('mouseenter', () => {
      tooltip.classList.add('visible');
    });

    spot.addEventListener('mouseleave', () => {
      tooltip.classList.remove('visible');
    });
  });
});
