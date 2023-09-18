let slideIndex = 0;
const slides = document.querySelectorAll('.slider');

function showSlide(index) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }
  slides[index].classList.add('active');
}

function showNextSlide() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide(slideIndex);
}

// Initial slide display
showSlide(slideIndex);

// Automatically change slide every 2 seconds
setInterval(showNextSlide, 2000);
