// Seleccionamos todos los botones de like
const likeButtons = document.querySelectorAll('.like-btn');

likeButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Obtenemos el span que contiene el número
        const countSpan = button.querySelector('span');
        let currentLikes = parseInt(countSpan.innerText);
        
        // Incrementamos el contador
        countSpan.innerText = currentLikes + 1;
        
        // Efecto visual simple
        button.style.transform = "scale(1.1)";
        setTimeout(() => button.style.transform = "scale(1)", 100);
    });
});
