'use strict'

const RankButton = document.querySelector('.rank');
const RankBody = document.querySelector('.rank-body');
const CloseRank = document.querySelector('.close-rank');
const containerGrayBackground = document.querySelector('.gray-background-container');
//pop-up alert
const buttonChangedName = document.querySelector('.change-name');
const alertContainer = document.querySelector('.pop-up-alert-container');
//pop-up alert

RankButton.onclick = function () { //Ранг - при нажатии на кнопку
	RankBody.style = 'display: flex;';
	containerGrayBackground.style = 'display: block;';
}
CloseRank.onclick = function () { //Ранг - при закрытии
	RankBody.style = 'display: none;';
	containerGrayBackground.style = 'display: none;';
}
buttonChangedName.onclick = function () {
	alertContainer.style = 'display: flex;';
	setTimeout(() => {
		alertContainer.style = 'display: none;';
	}, 2000);
}