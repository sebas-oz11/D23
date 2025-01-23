function updateCountdown() {
    const birthdayDate = new Date("2025-01-23T00:02:00"); // Cambia esto por la fecha de cumpleaños
    const now = new Date();
    const timeLeft = birthdayDate - now;
  
    if (timeLeft <= 0) {
      document.getElementById("special-day").innerText = "¡Es tu día especial amor, te quiero muchoo!";
      document.getElementById("birthday-gif").style.display = "block"; // Muestra el GIF
      clearInterval(countdownInterval); // Detener el contador cuando llegue el día
    } else {
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
      document.getElementById("days").innerText = days.toString().padStart(2, "0");
      document.getElementById("hours").innerText = hours.toString().padStart(2, "0");
      document.getElementById("minutes").innerText = minutes.toString().padStart(2, "0");
      document.getElementById("seconds").innerText = seconds.toString().padStart(2, "0");
    }
  }
  
  // Actualizar el cronómetro cada segundo
  const countdownInterval = setInterval(updateCountdown, 1000);
  
  
  window.addEventListener("scroll", () => {
    const backToTopButton = document.getElementById("back-to-top");
    const backToCountdownButton = document.getElementById("back-to-countdown");
  
    if (window.scrollY > 500) {
      backToTopButton.style.display = "block";
      backToCountdownButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
      backToCountdownButton.style.display = "none";
    }
  });
  
  document.getElementById("back-to-top").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  
  document.getElementById("back-to-countdown").addEventListener("click", () => {
    const countdownSection = document.getElementById("countdown");
    countdownSection.scrollIntoView({ behavior: "smooth" });
  });

  // Este script puede ir dentro de tu archivo script.js
window.onload = function() {
    const music = document.getElementById('background-music');
    music.volume = 0.5; // Ajusta el volumen (0 a 1, donde 1 es el máximo)
  };
  