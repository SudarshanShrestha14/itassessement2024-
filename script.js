
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    if (name === '' || email === '' || message === '') {
        alert('All fields are required!');
    } else {
        alert('Form submitted successfully!');
        this.reset();
    }
});

// Simple Slider for Homepage
const slides = document.querySelectorAll('.slider img');
if (slides.length > 0) {
    let currentSlide = 0;
    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 3000); // Change slide every 3 seconds
}