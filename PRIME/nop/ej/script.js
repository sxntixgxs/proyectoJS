document.addEventListener('DOMContentLoaded', function() {
    var openModalBtn = document.getElementById('open-modal-btn');
    var modal = document.getElementById('modal');
    var closeModalBtn = document.getElementById('close-modal-btn');

    openModalBtn.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    closeModalBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Cerrar modal al hacer clic fuera del contenido
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
