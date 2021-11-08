let time = 3000,
    currentImageIndex = 0,
    images = document.
        querySelectorAll("#primario img")

    max = images.length;

function nextImage() {

    images[currentImageIndex].
        classList.remove("select")

    currentImageIndex++

    if (currentImageIndex >= max) {
        currentImageIndex = 0
    }

    images[currentImageIndex].
        classList.add("select")
}

function start() {
    setInterval(() => {
        // troca de imagem
        nextImage()
    }, time)
}

window.addEventListener("load", start)