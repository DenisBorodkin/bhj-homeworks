
const modalStart = document.getElementById('modal_main');
const showModalStart = document.getElementById('modal_success');
modalStart.classList.add('modal_active');
const closeModal = document.getElementsByClassName("modal__close");
for (let i = 0; i < closeModal.length; i++) {
	closeModal[i].onclick = () => {
		modalStart.classList.remove('modal_active');
		showModalStart.classList.remove('modal_active');
	}
}
const showCloseModal = document.getElementsByClassName("show-success");
for (let i = 0; i < showCloseModal.length; i++) {
	showCloseModal[i].onclick = () => {
		modalStart.classList.remove('modal_active');
		showModalStart.classList.add('modal_active');
	}
}




