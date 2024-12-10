// Define a data e hora de término da contagem regressiva

const countdownDate = new Date("Dec 5, 2024 23:59:59").getTime();


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

// Define a data e hora de término da nova contagem regressiva
const novaCountdownDate = new Date("Dec 5, 2024 23:59:59").getTime();

// Atualiza a contagem regressiva a cada segundo
const y = setInterval(function() {
    // Obtém a data e hora atuais
    const now = new Date().getTime();

    // Calcula a diferença entre a data de término e a data atual
    const distance = novaCountdownDate - now;

    // Cálculos para dias, horas, minutos e segundos
    const novaDays = Math.floor(distance / (1000 * 60 * 60 * 24));
    const novaHours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const novaMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const novaSeconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Exibe os resultados na página
    document.getElementById("nova-days").innerHTML = String(novaDays).padStart(2, '0');
    document.getElementById("nova-hours").innerHTML = String(novaHours).padStart(2, '0');
    document.getElementById("nova-minutes").innerHTML = String(novaMinutes).padStart(2, '0');
    document.getElementById("nova-seconds").innerHTML = String(novaSeconds).padStart(2, '0');

}, 1000);



