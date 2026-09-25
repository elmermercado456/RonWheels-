document.addEventListener('DOMContentLoaded', () => {
    // --- Lógica de Filtrado del Catálogo ---
    const filterBtns = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remover clase 'active' de todos los botones
            filterBtns.forEach(b => b.classList.remove('active'));
            // Añadir clase 'active' al botón clickeado
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            productCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                // Mostrar todas o filtrar por categoría
                if (filterValue === 'all' || filterValue === category) {
                    card.style.display = 'flex';
                    // Pequeña animación de entrada
                    card.style.animation = 'none';
                    card.offsetHeight; /* Trigger reflow */
                    card.style.animation = 'fadeIn 0.5s ease forwards';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // --- Lógica de Enlaces Dinámicos de WhatsApp ---
    const buyBtns = document.querySelectorAll('.js-buy-btn');
    const phoneNumber = '51929150727'; // Modificado

    buyBtns.forEach(btn => {
        const productName = btn.getAttribute('data-name');
        const productPrice = btn.getAttribute('data-price');
        
        // Crear el mensaje y codificarlo para formato URL
        const message = `Hola, estoy interesado en el modelo ${productName} que cuesta S/ ${productPrice}.`;
        const encodedMessage = encodeURIComponent(message);
        
        // Asignar dinámicamente el href
        btn.href = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    });

    // --- Efecto visual para el Navbar en scroll ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            navbar.style.background = 'rgba(18, 18, 18, 0.95)';
            navbar.style.boxShadow = '0 4px 15px rgba(0,0,0,0.6)';
        } else {
            navbar.style.background = 'rgba(18, 18, 18, 0.75)';
            navbar.style.boxShadow = 'none';
        }
    });
});
