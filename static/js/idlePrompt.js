if ('ontouchstart' in window) {
  document.addEventListener('DOMContentLoaded', () => {
    const prompt = document.getElementById('idlePrompt');
    if (!prompt) return;

    const isMobile = window.innerWidth <= 1024;
    if (!isMobile) return;

    let userInteracted = false;
    let showTimeout, hideTimeout, repeatTimeout;

    function showPrompt() {
      if (!userInteracted) {
        prompt.classList.add('visible');

        hideTimeout = setTimeout(() => {
          prompt.classList.remove('visible');

          repeatTimeout = setTimeout(showPrompt, 10000);
      }, 10000); // Show for 10s
      }
    }

    function clearTimers() {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
      clearTimeout(repeatTimeout);
    }

    function onUserInteraction() {
      userInteracted = true;
      prompt.classList.remove('visible');
      clearTimers();

      window.removeEventListener('click', onUserInteraction);
      window.removeEventListener('touchstart', onUserInteraction);
    }

  showTimeout = setTimeout(showPrompt, 10000); // initial wait

  window.addEventListener('click', onUserInteraction);
  window.addEventListener('touchstart', onUserInteraction);
});
};