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

document.getElementById('searchInput').addEventListener('keyup', function() {
    // 1. Obtener el valor de búsqueda y convertirlo a minúsculas
    let filter = this.value.toLowerCase();
    
    // 2. Obtener todas las tarjetas
    let cards = document.querySelectorAll('.card');
    
    // 3. Recorrer cada tarjeta
    cards.forEach(card => {
        // Obtenemos el texto completo de la tarjeta
        let cardText = card.innerText.toLowerCase();
        
        // 4. Si el texto de la tarjeta incluye el filtro, mostrarla; si no, ocultarla
        if (cardText.includes(filter)) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });
});