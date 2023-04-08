const menu = document.querySelector('.menu__icon');

if (menu) {
	const navbar = document.querySelector('.menu__nav');
	menu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		menu.classList.toggle('_active');
		navbar.classList.toggle('_active');
	});
}