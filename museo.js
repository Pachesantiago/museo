// Mostrar mensaje de bienvenida al cargar la página
window.onload = function () {
    console.log("Bienvenido a la página de Museos de Bogotá");
    showImage(currentImageIndex); // Mostrar la primera imagen del carrusel al cargar la página
};

// Función para mostrar u ocultar la información del museo
function toggleInfo(sectionId) {
    const section = document.getElementById(sectionId);
    const info = section.querySelector("p");

    if (info.style.display === "none") {
        info.style.display = "block";
    } else {
        info.style.display = "none";
    }
}

// Cambiar el tema de la página entre claro y oscuro
function toggleTheme() {
    const body = document.body;

    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
    } else {
        body.classList.add("dark-mode");
    }
}

// Carrusel de imágenes
let currentImageIndex = 0; // Definir la variable actual para el índice de la imagen

const images = document.querySelectorAll(".carousel-image"); // Seleccionar todas las imágenes del carrusel

// Función para mostrar la imagen activa
function showImage(index) {
    images.forEach((img, i) => {
        img.classList.toggle("active", i === index); // Se activa la imagen correspondiente
    });
}

// Función para mostrar la siguiente imagen
function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length; // Asegura que el índice vuelva al principio
    showImage(currentImageIndex);
}

// Función para mostrar la imagen anterior
function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length; // Asegura que el índice no sea negativo
    showImage(currentImageIndex);
}
