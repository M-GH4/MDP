const cardsContainer = document.querySelector('.superuniquecontainer'); // Adjust selector as needed
const radioButtons = Array.from(document.querySelectorAll('input[type="radio"]'));
let currentIndex = 0; // Start with the first card
let startXposition;

cardsContainer.addEventListener('touchstart', (e) => {
    startXposition = e.touches[0].clientX; // Get the initial touch position
});

cardsContainer.addEventListener('touchmove', (e) => {
    const moveX = e.touches[0].clientX; // Get the current touch position
    const diffX = moveX - startXposition; // Calculate the difference

    if (Math.abs(diffX) > 50) { // Check if swipe is significant
        if (diffX > 0) {
            // Swipe right
            if (currentIndex > 0) {
                currentIndex--; // Move to the previous card
                radioButtons[currentIndex].checked = true; // Check the new radio button
            }
        } else {
            // Swipe left
            if (currentIndex < radioButtons.length - 1) {
                currentIndex++; // Move to the next card
                radioButtons[currentIndex].checked = true; // Check the new radio button
            }
        }
        startXposition = null; // Reset startX to prevent multiple triggers
    }
});