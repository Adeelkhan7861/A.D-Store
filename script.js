document.addEventListener('DOMContentLoaded', () => {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    function showSlide(index) {
        if (index >= totalSlides) {
            slideIndex = 0;
        } else if (index < 0) {
            slideIndex = totalSlides - 1;
        } else {
            slideIndex = index;
        }
        document.querySelector('.slides').style.transform = `translateX(${-slideIndex * 100}%)`;
    }

    document.querySelector('.next').addEventListener('click', () => {
        showSlide(slideIndex + 1);
    });

    document.querySelector('.prev').addEventListener('click', () => {
        showSlide(slideIndex - 1);
    });

    // Auto slide
    setInterval(() => {
        showSlide(slideIndex + 1);
    }, 2000); // Change slide every 5 seconds
});
