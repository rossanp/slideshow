let slide = document.getElementById('slideshowImage')
let container = document.getElementById('container')

let imagens = [
    './sunny.jpg',
    './tripulacao.jpg',
    './zoro.jpg'
]

let time = 5000
let count = 0
let interval; // Variável para armazenar o intervalo
interval = setInterval(moveSlideShow, time) // Iniciar o slideshow automaticamente

// Manipulador de evento para parar o slideshow ao passar o mouse sobre a imagem
container.addEventListener('mouseover', function () {
    clearInterval(interval) // Interrompe o intervalo
});

// Manipulador de evento para retomar o slideshow ao tirar o mouse de cima da imagem
container.addEventListener('mouseout', function () {
    interval = setInterval(moveSlideShow, time) // Inicia o intervalo novamente
});

function moveSlideShow() {
    let imageCount = 0

    if ( count < imagens.length - 1 ) {
        imageCount = 
        count++
    } else if (count = 0 ) {
        count = imagens.length - 1
    } else { 
        count = 0
    }
    slide.src = imagens[count]
}

function previousSlide() {
    if (count <= 0) {
        count = imagens.length - 1
        slide.src = imagens[count]
    } else {
        count--
        slide.src = imagens[count]
    }
}

function nextSlide() {
    if (count < imagens.length - 1) {
        count++
        slide.src = imagens[count]
    } else {
        count = 0
        slide.src = imagens[count]
    }
}

// Inicialize o slideshow quando a página for carregada
window.onload = function () {
    slide.src = imagens[0]/* moveSlideShow() */; // Garante que a primeira imagem seja exibida após o carregamento
}