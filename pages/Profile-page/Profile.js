'use strict'

//pop-up alert
const buttonChangedName = document.querySelector('.change-name');
const alertContainer = document.querySelector('.pop-up-alert-container');
//pop-up alert


buttonChangedName.onclick = function () {
	alertContainer.style = 'display: flex;';
	setTimeout(() => {
		alertContainer.style = 'display: none;';
	}, 2000);
} 