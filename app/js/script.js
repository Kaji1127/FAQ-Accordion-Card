// Variables
const items = document.querySelectorAll('.faq__item');
const descs = document.querySelectorAll('.faq__description');
const arrow = document.querySelectorAll('.arrow');

items.forEach((item) => {
	item.addEventListener('click', () => {
		item.classList.toggle('active');
	});
});
