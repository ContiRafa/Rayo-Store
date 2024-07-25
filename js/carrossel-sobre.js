const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;

function hideSlider() {
  slider.forEach(item => item.classList.remove('on'));
}

function showSlider() {
  slider[currentSlide].classList.add('on');
}

function nextSlider() {
  hideSlider();
  if (currentSlide === slider.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  showSlider();
}

function prevSlider() {
  hideSlider();
  if (currentSlide === 0) {
    currentSlide = slider.length - 1;
  } else {
    currentSlide--;
  }
  showSlider();
}

btnNext.addEventListener('click', nextSlider);
btnPrev.addEventListener('click', prevSlider);

// Adicionar o setInterval para passar as imagens automaticamente
setInterval(nextSlider, 3000); // Altere 3000 para o intervalo desejado em milissegundos (3000ms = 3s)


document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.team-member img');
  
    images.forEach(image => {
      image.addEventListener('touchstart', function() {
        image.classList.add('hover-effect');
  
        setTimeout(() => {
          image.classList.remove('hover-effect');
        }, 1000); // Mantém o efeito hover por 1 segundo
      });
    });
  });
  