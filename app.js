

const openModalBtn = document.querySelector('.App_open_modal');
const modal = document.querySelector('.App_modal');
const closeModalBtn = document.querySelector('.App_close_modal');
// const closeModalBtn = document.querySelector('.App_close_modal');

function openModal(e) {
    return modal.style.display = 'block';
}

function closeModal (e) {
    if (e.target === modal.children[0]) {
        return modal.style.display = 'none';
    }

    if (e.target === closeModalBtn) {
        return modal.style.display = 'none';
    }

    if (e.keyCode == 27) {
        return modal.style.display = 'none';
    }
}

openModalBtn.addEventListener('click', openModal);
window.addEventListener('keydown', closeModal);

for (let i = 0; i < [closeModalBtn, modal].length; i++) {
    [closeModalBtn, modal][i].addEventListener('click', closeModal);
}
