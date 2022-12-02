
const newMenuLink = document.querySelectorAll('.menu__link');
for (let i = 0; i < newMenuLink.length; i++) {
	newMenuLink[i].onclick = () => {
		const searchMenu = newMenuLink[i].parentElement.querySelector('.menu_sub');
		if (searchMenu) {
			searchMenu.classList.toggle('menu_active');
			return false;
		}
	}
}




