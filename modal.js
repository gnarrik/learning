const modalContainer = document.querySelector('.modal-container');
const openModalButtons = document.querySelectorAll('.open-modal-button');
const closeModalButton = document.querySelector('.close-modal');

openModalButtons.forEach(btn => btn.addEventListener('click', openModal));

function openModal() {
	modalContainer.style.opacity = 1;
	modalContainer.style.pointerEvents = 'all';
	closeModalButton.addEventListener('click', closeModalByButton);
	modalContainer.addEventListener('click', closeModalHandle);
}

function closeModalByButton() {
	modalContainer.style.opacity = 0;
	modalContainer.style.pointerEvents = 'none';
	modalContainer.removeEventListener('click', closeModalByButton);
	modalContainer.removeEventListener('click', closeModalHandle);
}

function closeModalHandle(event) {
	if (event.target === modalContainer) {
		modalContainer.style.opacity = 0;
		modalContainer.style.pointerEvents = 'none';
		modalContainer.removeEventListener('click', closeModalHandle);
	}
}
