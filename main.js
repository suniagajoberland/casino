function obtenerSimboloAleatorio() {
  const simbolos = ["🍒", "🍋", "🔔", "💎", "7"];
  return simbolos[Math.floor(Math.random() * simbolos.length)];
}

function girar() {
  const carrete1 = document.getElementById("carrete1");
  const carrete2 = document.getElementById("carrete2");
  const carrete3 = document.getElementById("carrete3");
  const mensaje = document.getElementById("message");

  const giros = 20; // Número de giros antes de detenerse
  let contadorGiros = 0;

  const intervalo = setInterval(() => {
    girarCarrete(carrete1);
    girarCarrete(carrete2);
    girarCarrete(carrete3);

    contadorGiros++;
    if (contadorGiros >= giros) {
      clearInterval(intervalo);
      verificarGanador(carrete1, carrete2, carrete3, mensaje);
    }
  }, 100);
}

function girarCarrete(carrete) {
  const simbolo = carrete.querySelector(".symbol");
  simbolo.textContent = obtenerSimboloAleatorio();
  simbolo.style.transform = "translateY(" + Math.random() * -100 + "px)";
  setTimeout(() => {
    simbolo.style.transform = "translateY(0)";
  }, 50);
}

function verificarGanador(carrete1, carrete2, carrete3, mensaje) {
  if (
    carrete1.querySelector(".symbol").textContent ===
      carrete2.querySelector(".symbol").textContent &&
    carrete1.querySelector(".symbol").textContent ===
      carrete3.querySelector(".symbol").textContent
  ) {
    mensaje.textContent = "¡Felicidades! ¡Has ganado!";
  } else {
    mensaje.textContent = "Sigue intentando...";
  }
}
