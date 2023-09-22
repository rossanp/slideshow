let slide = document.getElementById('slideshowImage')

let imagens = [
    './sunny.jpg',
    './tripulacao.jpg',
    './zoro.jpg'
]

let time = 5000
let count = 0
let interval; // Variável para armazenar o intervalo
    console.log(count);

function moveSlideShow() {
    slide.src = imagens[count]

    if ( count < imagens.length - 1 ) {
        count++
    } else {
        count = 0
    }
}

// Iniciar o slideshow automaticamente
interval = setInterval(moveSlideShow, time)

// Manipulador de evento para parar o slideshow ao passar o mouse sobre a imagem
slide.addEventListener('mouseover', function () {
    clearInterval(interval) // Interrompe o intervalo
});

// Manipulador de evento para retomar o slideshow ao tirar o mouse de cima da imagem
slide.addEventListener('mouseout', function () {
    interval = setInterval(moveSlideShow, time) // Inicia o intervalo novamente
});

function previousSlide() {
    if (count > 0) {
        count--
    } else {
        count = imagens.length - 1
    }
    moveSlideShow()
}

function nextSlide() {
    if (count < imagens.length - 1) {
        count++
    } else {
        count = 0
    }
    moveSlideShow()
}

// Inicialize o slideshow quando a página for carregada
window.onload = function () {
    moveSlideShow(); // Garante que a primeira imagem seja exibida após o carregamento
}