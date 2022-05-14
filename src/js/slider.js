// Slider
document.addEventListener("DOMContentLoaded", () => {
		const sliderItems = document.querySelectorAll('.intro-slider__item');
		const sliderDescriptions = document.querySelectorAll('.intro-slider__description');
		const sliderNext = document.getElementById('slider-handle__right');

		let sliderOffset = 0;

		const showSlideItem = item => {
			for(slide of sliderItems) {
				slide.classList.remove('show');
			}

			for(slide of sliderDescriptions) {
				slide.classList.remove('show');
			}

			sliderItems[item].classList.add('show');
			sliderDescriptions[item].classList.add('show');
		}

		const switchSlide = () => {
			if (sliderOffset === sliderItems.length - 1) {
				sliderOffset = 0;
				showSlideItem(sliderOffset);
			} else {
				sliderOffset++;
				showSlideItem(sliderOffset);
			}
		}

		if (sliderNext) {
			sliderNext.addEventListener('click', switchSlide, false);
		}
})
		
/*
document.onload = function() {
	const sliderItems = document.querySelectorAll('.intro-slider__item');
	const sliderDescriptions = document.querySelectorAll('.intro-slider__description');
	const sliderNext = document.getElementById('slider-handle__right');

	let sliderOffset = 0;

	const showSlideItem = item => {
		for(slide of sliderItems) {
			slide.classList.remove('show');
		}

		for(slide of sliderDescriptions) {
			slide.classList.remove('show');
		}

		sliderItems[item].classList.add('show');
		sliderDescriptions[item].classList.add('show');
	}

	const switchSlide = () => {
		if (sliderOffset === sliderItems.length - 1) {
			sliderOffset = 0;
			showSlideItem(sliderOffset);
		} else {
			sliderOffset++;
			showSlideItem(sliderOffset);
		}
	}

	if (sliderNext) {
		sliderNext.addEventListener('click', switchSlide, false);
	}
}
*/
