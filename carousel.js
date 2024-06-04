document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.getElementById('carousel');
    const carouselItems = carousel.querySelector('.carousel-items');
    const items = carousel.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    const prevButton = carousel.querySelector('.prev');
    const nextButton = carousel.querySelector('.next');

    let currentIndex = 0;
    let intervalId;

    function startCarousel() {
        intervalId = setInterval(() => {
            currentIndex = (currentIndex + 1) % totalItems;
            updateCarousel();
        }, 2000); // Change slide every 2 seconds
    }

    function updateCarousel() {
        const offset = -currentIndex * 100; // Calculate the offset for the current slide
        carouselItems.style.transform = `translateX(${offset}%)`;
    }

    function stopCarousel() {
        clearInterval(intervalId);
    }

    function showNextItem() {
        stopCarousel();
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
        startCarousel();
    }

    function showPrevItem() {
        stopCarousel();
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
        startCarousel();
    }

    // Start the carousel
    startCarousel();

    // Add hover event listeners to pause and resume the carousel
    carousel.addEventListener('mouseenter', stopCarousel);
    carousel.addEventListener('mouseleave', startCarousel);

    // Add click event listeners for navigation buttons
    prevButton.addEventListener('click', showPrevItem);
    nextButton.addEventListener('click', showNextItem);
});
