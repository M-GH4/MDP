const container = document.querySelector(".superuniquecontainer");
const radioButtons = document.querySelectorAll('input[type="radio"]');

// Variables to track swipe state
let touchStartX = 0;
let touchEndX = 0;
let isSwipe = false;  // Prevents unnecessary checks if no swipe happened

// Track the currently selected radio button index
let currentIndex = 0;

// Helper function to update the radio button based on direction
const changeRadioButton = (direction) => {
  currentIndex = (currentIndex + direction + radioButtons.length) % radioButtons.length; // Wrap around the radio buttons
  radioButtons[currentIndex].checked = true;
};

const handleTouchStart = (event) => {
  touchStartX = event.touches[0].clientX; // Get the X coordinate of the touch start
  isSwipe = false; // Reset swipe state
};

const handleTouchMove = (event) => {
  touchEndX = event.touches[0].clientX; // Get the X coordinate of the touch move
  
  // Only consider the swipe if the user moved a significant distance
  const swipeThreshold = 50; // Minimum distance to trigger swipe (in pixels)
  if (Math.abs(touchStartX - touchEndX) > swipeThreshold) {
    isSwipe = true; // Flag as a valid swipe event
  }
};

const handleTouchEnd = () => {
  if (isSwipe) {
    if (touchStartX > touchEndX) {
      // Left Swipe - next radio button
      changeRadioButton(1);
      console.log("Left Swipe - Next Radio");
    } else if (touchStartX < touchEndX) {
      // Right Swipe - previous radio button
      changeRadioButton(-1);
      console.log("Right Swipe - Previous Radio");
    }
  }
};

// Add event listeners to the container
container.addEventListener('touchstart', handleTouchStart);
container.addEventListener('touchmove', handleTouchMove);
container.addEventListener('touchend', handleTouchEnd);
