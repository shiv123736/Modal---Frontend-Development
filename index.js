var close = document.getElementById('close-btn');
var open = document.getElementById('open-modal');
var modal = document.querySelector('.modal-overlay');
close.addEventListener('click', () => {
    modal.classList.add('hide');
});

open.addEventListener('click', () => {
    modal.classList.remove('hide');
});