// Открытие модального окна
function openModal() {
    document.getElementById('signInModal').style.display = 'block';
}

// Закрытие модального окна
function closeModal() {
    document.getElementById('signInModal').style.display = 'none';
}

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
    var modal = document.getElementById('signInModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
