const dropdown = document.querySelector('.card');
const menuActve = document.querySelector('.dropdown__list');
const newClick = document.querySelector('.dropdown__value');
const itemClick = document.querySelectorAll('.dropdown__item');
function openActiveClass() {
	menuActve.classList.toggle('dropdown__list_active');
}
dropdown.addEventListener('click', function (event) {
	if (event.target.closest('.dropdown__value')) {
		openActiveClass();
	}
});
for (let i = 0; i < itemClick.length; i++) {
	itemClick[i].onclick = () => {
		newClick.textContent = itemClick[i].textContent;
		openActiveClass();
		return false;
	};
}




