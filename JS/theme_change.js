const checkbox = document.getElementById('dark_toggle');
const input = document.getElementsByClassName('change');
const radioLabel = document.getElementsByClassName('list_label');


checkbox.addEventListener('change',() => {

	document.body.classList.toggle('dark');
	
	for (var i = input.length - 1; i >= 0; i--) {
		input[i].classList.toggle('dark');
	}
	for (var i = radioLabel.length - 1; i >= 0; i--) {
		radioLabel[i].classList.toggle('dark')
	}
	});