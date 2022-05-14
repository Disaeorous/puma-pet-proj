// Modal
window.onload = function() {
	setInterval(function() {	
		const modal = document.getElementById('modal');
		const modalBtn = document.getElementById('modal-cta');
		const modalClose = document.getElementById('modal-close');

		// const modal = document.querySelectorAll('.modal');
		// const modalBtn = document.querySelectorAll('.modal-cta');
		// const modalClose = document.querySelectorAll('.modal-close');

		const openModal = () => {
			document.body.classList.add('backdrop');
			modal.classList.add('show');
		}

		const closeModal = () => {
			if (modal.classList.contains('show')) {
				modal.classList.remove('show');
			}
			document.body.classList.remove('backdrop');
		}

		if (modalBtn) {
			modalBtn.addEventListener('click', openModal, false);
		}

		if (modalClose) {
			modalClose.addEventListener('click', closeModal, false);
		}
	}, 1000);
}

// document.onload = function() { 
// 	const modal = document.getElementById('modal');
// 	const modalBtn = document.getElementById('modal-cta');
// 	const modalClose = document.getElementById('modal-close');

// 	const openModal = () => {
// 		document.body.classList.add('backdrop');
// 		modal.classList.add('show');
// 	}

// 	const closeModal = () => {
// 		if (modal.classList.contains('show')) {
// 			modal.classList.remove('show');
// 		}
// 		document.body.classList.remove('backdrop');
// 	}

// 	if (modalBtn) {
// 		modalBtn.addEventListener('click', openModal, false);
// 	}

// 	if (modalClose) {
// 		modalClose.addEventListener('click', closeModal, false);
// 	}
// }


