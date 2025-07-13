export function calculateDuration(sectionId) {
    const targetElement = document.getElementById(sectionId);
    const baseDuration = 500;
    if (targetElement) {
      // Get the distance between current scroll position and target
      const targetPosition = targetElement.getBoundingClientRect().top;
      const scrollPosition = window.pageYOffset;
      const distance = Math.abs(targetPosition + scrollPosition);

      // Base duration + additional time based on distance
      // Adjust the multiplier (0.5) to control how much the distance affects duration
      return Math.min(1200, baseDuration + distance * 0.5);
    }
    return 800; // Default fallback
  };