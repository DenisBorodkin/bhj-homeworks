
const prevSlider = document.querySelector('.slider__arrow_prev');
const nextSlider = document.querySelector('.slider__arrow_next');
const slider = Array.from(document.getElementsByClassName('slider__item'));
let slider_number = 0;
const checkActiveClass = slider[slider_number].classList.contains('slider__item_active');
prevSlider.onclick = () => {
	if (checkActiveClass) {
		slider[slider_number].classList.remove('slider__item_active');
	}
	if (slider_number != 0) {
		slider_number -= 1;
		slider[slider_number].classList.add('slider__item_active');
	}
	else {
		slider_number = slider.length - 1;
		slider[slider_number].classList.add('slider__item_active');
	}
}
nextSlider.onclick = () => {
	if (checkActiveClass) {
		slider[slider_number].classList.remove('slider__item_active');
	}

	if (slider_number < slider.length - 1) {
		slider_number += 1;
		slider[slider_number].classList.add('slider__item_active');
	}
	else {
		slider_number = 0;
		slider[slider_number].classList.add('slider__item_active');
	}
}











