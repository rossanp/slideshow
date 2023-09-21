let slide = document.querySelector('.slideshow')

let imagens = [
    './sunny.jpg',
    './tripulacao.jpg',
    './zoro.jpg'
]

let time = 5000
let count = 0

function moveSlideShow() {
    slide.src = imagens[count]

    if ( count < imagens.length - 1 ) {
        count++
    } else {
        count = 0
    }

    setTimeout("moveSlideShow()", time)

}

window.onload = moveSlideShow