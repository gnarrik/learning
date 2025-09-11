document.addEventListener('DOMContentLoaded', function () {
	// Применяем маску к полю с id registration-phone
	const phoneInput = document.getElementById('registration-phone');
	if (phoneInput) {
		IMask(phoneInput, {
			mask: '+{7}-(000)-000-00-00',
		});
	}

	// Применяем маску к полям с классом registration-phone в модальном окне
	const modalPhoneInputs = document.querySelectorAll('.registration-phone');
	modalPhoneInputs.forEach(function (input) {
		IMask(input, {
			mask: '+{7}-(000)-000-00-00',
		});
	});
});
