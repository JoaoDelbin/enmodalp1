// Define a data e hora de término da contagem regressiva

const countdownDate = new Date("Dec 16, 2024 23:59:59").getTime();


// Atualiza a contagem regressiva a cada segundo

const x = setInterval(function() {


    // Obtém a data e hora atuais

    const now = new Date().getTime();


    // Calcula a diferença entre a data de término e a data atual

    const distance = countdownDate - now;


    // Cálculos para dias, horas, minutos e segundos

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);


    // Exibe os resultados na página

    document.getElementById("days").innerHTML = String(days).padStart(2, '0');

    document.getElementById("hours").innerHTML = String(hours).padStart(2, '0');

    document.getElementById("minutes").innerHTML = String(minutes).padStart(2, '0');

    document.getElementById("seconds").innerHTML = String(seconds).padStart(2, '0');



}, 1000);

// thumbnail video 1 professora
function playVideo() {
    const iframe = document.getElementById('video');
    const videoUrl = "https://www.youtube.com/embed/2-6pLqW8QGU?autoplay=1";
    iframe.src = videoUrl;
    iframe.style.display = 'block'; 
    document.querySelector('.video-thumbnail').style.display = 'none'; 
  }

  // thumbnail video 2 professora

function playVideo2() {
    const iframe = document.getElementById('video2');
    const videoUrl = "https://www.youtube.com/embed/2-6pLqW8QGU?autoplay=1";
    iframe.src = videoUrl;
    iframe.style.display = 'block'; 
    document.querySelector('.video-thumbnail2').style.display = 'none'; 
  }


//   contaagem 2 final do site 

const countdownDuration = 48 * 60 * 60 * 1000; // 48 horas em milissegundos

// Verifica se já existe um registro no localStorage
let countdownStart = localStorage.getItem("countdownStart");

if (!countdownStart) {
    // Se não houver nenhum registro, começa uma nova contagem
    countdownStart = Date.now();
    localStorage.setItem("countdownStart", countdownStart); // Salva a hora de início no localStorage
}

// Função para atualizar a contagem regressiva
const y = setInterval(function() {
    // Obtém o tempo atual
    const now = Date.now();

    // Calcula a diferença entre o tempo atual e o início da contagem
    let distance = countdownDuration - (now - countdownStart);

    if (distance <= 0) {
        // Se o tempo acabou, reinicia a contagem
        countdownStart = Date.now();
        localStorage.setItem("countdownStart", countdownStart); // Atualiza a hora de início no localStorage
        distance = countdownDuration; // Reinicia a contagem para 48 horas
    }

    // Cálculos para dias, horas, minutos e segundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Exibe os resultados na página
    document.getElementById("nova-days").innerHTML = String(days).padStart(2, '0');
    document.getElementById("nova-hours").innerHTML = String(hours).padStart(2, '0');
    document.getElementById("nova-minutes").innerHTML = String(minutes).padStart(2, '0');
    document.getElementById("nova-seconds").innerHTML = String(seconds).padStart(2, '0');
}, 1000);

// 
// 
// 

function playVideo3() {
    const iframe = document.getElementById('video3');
    const videoUrl = "https://www.youtube.com/embed/NV4TId1dDec?autoplay=1";
    iframe.src = videoUrl;
    iframe.style.display = 'block'; 
    document.querySelector('.video-thumbnail3').style.display = 'none'; 
  }
  
function playVideo4() {
    const iframe = document.getElementById('video4');
    const videoUrl = "https://www.youtube.com/embed/gP2gc39oPwM?autoplay=1";
    iframe.src = videoUrl;
    iframe.style.display = 'block'; 
    document.querySelector('.video-thumbnail4').style.display = 'none'; 
  }

function playVideo5() {
    const iframe = document.getElementById('video5');
    const videoUrl = "https://www.youtube.com/embed/jfA-ZXq7RpM?autoplay=1";
    iframe.src = videoUrl;
    iframe.style.display = 'block'; 
    document.querySelector('.video-thumbnail5').style.display = 'none'; 
  }

// scroll mudanças 
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".modulo-item");

  const handleScroll = () => {
    items.forEach((item) => {
      const rect = item.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Ativa apenas se o item estiver centralizado (limite ajustável)
      if (rect.top >= windowHeight * 0.50 && rect.bottom <= windowHeight * 0.64) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  };

  // Escuta o evento de scroll
  window.addEventListener("scroll", handleScroll);

  // Verifica os itens iniciais ao carregar a página
  handleScroll();
});

// 
// 
// 
// scroll beneficios

document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".beneficios-item");

  const handleScroll = () => {
    items.forEach((item) => {
      const rect = item.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Ativa a classe 'active' quando o item está visível na tela
      if (rect.top >= windowHeight * 0.25 && rect.bottom <= windowHeight * 0.55) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  };

  // Escuta o evento de scroll
  window.addEventListener("scroll", handleScroll);

  // Verifica os itens iniciais ao carregar a página
  handleScroll();
});







