const countdownInterval = setInterval(function() {
  // Obtém o tempo atual
  const currentTime = Date.now();

  // Calcula a diferença entre o tempo atual e o início da contagem
  let remainingTime = countdownDuration - (currentTime - countdownStart);

  if (remainingTime <= 0) {
      // Se o tempo acabou, reinicia a contagem
      countdownStart = Date.now();
      localStorage.setItem("countdownStart", countdownStart); // Atualiza a hora de início no localStorage
      remainingTime = countdownDuration; // Reinicia a contagem para 48 horas
  }

  // Cálculos para dias, horas, minutos e segundos
  const countdownDays = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const countdownHours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const countdownMinutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const countdownSeconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  // Exibe os resultados na página
  document.getElementById("days").innerHTML = String(countdownDays).padStart(2, '0');
  document.getElementById("hours").innerHTML = String(countdownHours).padStart(2, '0');
  document.getElementById("minutes").innerHTML = String(countdownMinutes).padStart(2, '0');
  document.getElementById("seconds").innerHTML = String(countdownSeconds).padStart(2, '0');
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

    
      if (rect.top >= windowHeight * 0.50 && rect.bottom <= windowHeight * 0.64) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  };

  
  window.addEventListener("scroll", handleScroll);

  
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

  
      if (rect.top >= windowHeight * 0.30 && rect.bottom <= windowHeight * 0.60) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  };


  window.addEventListener("scroll", handleScroll);


  handleScroll();
});


// 
// vermais texto professoras -600px
// 

function vermais() {
  const pontos = document.getElementById('pontos');
  const texto = document.getElementById('vermais');
  const btnvermais = document.getElementById('btn-vermais');

  if(pontos.style.display === 'none'){
    pontos.style.display = 'inline';
    texto.style.display = 'none';
    btnvermais.innerHTML = 'Leia Mais';
  } 
  else {
    pontos.style.display = 'none';
    texto.style.display = 'inline';
    btnvermais.innerHTML = 'Leia Menos';
  }
}
// 
// 

function vermais2() {
  const pontos = document.getElementById('pontos2');
  const texto = document.getElementById('vermais2');
  const btnvermais = document.getElementById('btn-vermais2');

  if(pontos.style.display === 'none'){
    pontos.style.display = 'inline';
    texto.style.display = 'none';
    btnvermais.innerHTML = 'Leia Mais';
  } 
  else {
    pontos.style.display = 'none';
    texto.style.display = 'inline';
    btnvermais.innerHTML = 'Leia Menos';
  }
}


// 
// 

function vermais3() {
  const pontos = document.getElementById('pontos3');
  const texto = document.getElementById('vermais3');
  const btnvermais = document.getElementById('btn-vermais3');

  if(pontos.style.display === 'none'){
    pontos.style.display = 'inline';
    texto.style.display = 'none';
    btnvermais.innerHTML = 'Leia Mais';
  } 
  else {
    pontos.style.display = 'none';
    texto.style.display = 'inline';
    btnvermais.innerHTML = 'Leia Menos';
  }
}
