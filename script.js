// Hero Images Container
document.addEventListener("DOMContentLoaded", function () {
    const imageContainers = document.querySelectorAll(".image-container");
    let currentIndex = 0;

    function showImage(index) {
        imageContainers.forEach((container, i) => {
            if (i === index) {
                container.classList.add("active");
            } else {
                container.classList.remove("active");
            }
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % imageContainers.length;
        showImage(currentIndex);
    }

    // Initially, show the first image
    showImage(currentIndex);

    // Automatically change images every 5 seconds (adjust as needed)
    setInterval(nextImage, 5000);
});

