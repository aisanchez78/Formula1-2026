// Seleccionamos todos los botones de like
const likeButtons = document.querySelectorAll('.like-btn');
if (likeButtons.length > 0) {
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
};

// 2. BUSCADOR (Solo se ejecuta si existe el input)
const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keyup', function() {

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
};

/* --- SISTEMA DE CONFIRMACIÓN DE CONTACTO --- */
   
const contactForm = document.getElementById('f1-contact-form');
if (contactForm) {
contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        // Crear el mensaje de confirmación
        const confirmMsg = document.createElement('div');
        confirmMsg.className = 'confirmation-msg show'; // Añadimos 'show' directamente
        confirmMsg.innerHTML = `
            <span class="icon">✅</span>
            <span>¡Mensaje enviado a Boxes! Revisaremos tu telemetría pronto.</span>
        `;
        
        document.body.appendChild(confirmMsg);
        this.reset(); // Limpia el formulario

        // Eliminar mensaje tras 4 segundos
        setTimeout(() => {
            confirmMsg.classList.remove('show');
            setTimeout(() => confirmMsg.remove(), 500);
        }, 4000);
    });
};