// Ejemplo de interactividad: Cambiar el color del botón al pasar el mouse
const btn = document.querySelector('.btn');

btn.addEventListener('mouseover', () => {
    btn.style.backgroundColor = '#ff3b2f';
});

btn.addEventListener('mouseout', () => {
    btn.style.backgroundColor = '#ff6f61';
});

// Ejemplo de validación de formulario
const contactForm = document.getElementById('contact-form');

