'use strict'


//pop-up alert
const buttonChangedName = document.querySelector('.change-name');
const alertContainer = document.querySelector('.pop-up-alert-container');
const mail = document.querySelector('.mail');
const Link = document.querySelector('.link');
const Friend = document.querySelector('.add-friend');

  buttonChangedName.onclick = function () {
	alertContainer.style = 'display: flex;';
	setTimeout(() => {
		alertContainer.style = 'display: none;';
	}, 2000);
} 

mail.onclick = function popUpAlert() {
	alertContainer.style = 'display: flex;';
	setTimeout(() => {
	  alertContainer.style = 'display: none;';
	}, 2000);
  }

  Link.onclick = function popUpAlert() {
	alertContainer.style = 'display: flex;';
	setTimeout(() => {
	  alertContainer.style = 'display: none;';
	}, 2000);
  }

  Friend.onclick = function popUpAlert() {
	alertContainer.style = 'display: flex;';
	setTimeout(() => {
	  alertContainer.style = 'display: none;';
	}, 2000);
  }

//pop-up alert
