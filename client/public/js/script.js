const sliders = document.querySelectorAll('.slider');
let currentIndex = 0;

const prevSlide = () => {
  sliders[currentIndex].style.animation = 'none';
  setTimeout(() => {
    sliders[currentIndex].style.animation = '';
    currentIndex = (currentIndex - 1 + sliders.length) % sliders.length;
    updateSlider();
  }, 10);
};

const nextSlide = () => {
  sliders[currentIndex].style.animation = 'none';
  setTimeout(() => {
    sliders[currentIndex].style.animation = '';
    currentIndex = (currentIndex + 1) % sliders.length;
    updateSlider();
  }, 10);
};

const updateSlider = () => {
  sliders.forEach((slider, index) => {
    if (index === currentIndex) {
      slider.style.transform = 'translateX(0)';
    } else {
      slider.style.transform = 'translateX(-100%)';
    }
  });
};

document.querySelector('.prev-slide').addEventListener('click', prevSlide);
document.querySelector('.next-slide').addEventListener('click', nextSlide);
