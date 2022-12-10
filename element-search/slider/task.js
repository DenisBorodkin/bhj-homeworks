
const prevSlider = document.querySelector('.slider__arrow_prev');
const nextSlider = document.querySelector('.slider__arrow_next');
const slider = Array.from(document.getElementsByClassName('slider__item'));
let sliderNumber = 0;
const checkActiveClass = slider[sliderNumber].classList.contains('slider__item_active');
prevSlider.onclick = () => {
	if (checkActiveClass) {
		slider[sliderNumber].classList.remove('slider__item_active');
	}
	if (sliderNumber != 0) {
		sliderNumber -= 1;
		slider[sliderNumber].classList.add('slider__item_active');
	}
	else {
		sliderNumber = slider.length - 1;
		slider[sliderNumber].classList.add('slider__item_active');
	}
}
nextSlider.onclick = () => {
	if (checkActiveClass) {
		slider[sliderNumber].classList.remove('slider__item_active');
	}

	if (sliderNumber < slider.length - 1) {
		sliderNumber += 1;
		slider[sliderNumber].classList.add('slider__item_active');
	}
	else {
		sliderNumber = 0;
		slider[sliderNumber].classList.add('slider__item_active');
	}
}











