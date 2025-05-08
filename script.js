document.addEventListener('DOMContentLoaded', function() {
  // Animación del texto en la sección hero si existe
  const heroText = document.querySelector('.hero-text');
  if (heroText) {
      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('visible');
              }
          });
      }, { threshold: 0.5 });
      observer.observe(heroText);
  }
});

// Slider automático en loop (cada slide se muestra durante 5 segundos)
let currentIndex = 0;
setInterval(() => {
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  const slideCount = slides.length;
  if (slider && slideCount > 0) {
      currentIndex = (currentIndex + 1) % slideCount;
      slider.style.transform = `translateX(${-currentIndex * 100}%)`;
  }
}, 5000);

// Validación del formulario (si existe)
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const responseElement = document.getElementById('response');
      
      // Validación básica: que existan valores y que el correo incluya '@'
      if (!name || !email.includes('@')) {
        responseElement.textContent = "Por favor, ingresa datos válidos.";
        responseElement.style.color = "red";
      } else {
        // Actualizamos el mensaje
        responseElement.textContent = "Muchas gracias, ¡te enviaremos un mail enseguida para que brindemos juntos!";
        responseElement.style.color = "#fff"; // Define el texto en blanco
        
        // Reiniciamos la animación quitando y agregando nuevamente la clase
        responseElement.classList.remove('fade-in');
        // Forzamos un reflow para que la remoción de la clase se haga efectiva
        void responseElement.offsetWidth;
        // Activamos la clase que ejecuta la animación fade-in
        responseElement.classList.add('fade-in');
      }
    });
  }
});



// Menú hamburguesa para dispositivos móviles
document.querySelector('.menu-toggle').addEventListener('click', function() {
  document.querySelector('.navigation').classList.toggle('active');
});
document.addEventListener('DOMContentLoaded', function() {
  const aboutText = document.querySelector('.about-text');
  if (aboutText) {
      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('visible');
              }
          });
      }, { threshold: 0.3 });
      observer.observe(aboutText);
  }
});
document.addEventListener('DOMContentLoaded', function() {
  const aboutText = document.querySelector('.about-text');
  if (aboutText) {
      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('visible');
              }
          });
      }, { threshold: 0.3 });
      observer.observe(aboutText);
  }
});
document.addEventListener('DOMContentLoaded', function() {
  const aboutText = document.querySelector('.about-text');
  if (aboutText) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.3 });
    
    observer.observe(aboutText);
  }
});
document.addEventListener('DOMContentLoaded', function() {
  const contactFormWrapper = document.querySelector('.contact-form');
  if (contactFormWrapper) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.3 });
    observer.observe(contactFormWrapper);
  }
});
