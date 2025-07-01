const button = document.querySelector('input[type="button"]');
const colorSelect = document.getElementById('colorSelect');

// button.onclick = function () {
// 	const selectedIndex = colorSelect.selectedIndex;
	
// 	if (selectedIndex !== -1) {
// 		colorSelect.remove(selectedIndex);
		
// 	}
// };

button.addEventListener('click', () => {
	const selectedIndex = colorSelect.selectedIndex;

	if(selectedIndex !== -1) {
		colorSelect.remove(selectedIndex);
	}
})

// function startFunc() {
// 	const selectedIndex = colorSelect.selectedIndex;

// 	if(selectedIndex !== -1) {
// 		colorSelect.remove(selectedIndex);
// 	}
// }