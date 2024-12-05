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

