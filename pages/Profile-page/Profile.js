'use strict'

const RankButton = document.querySelector('.rank');
const RankBody = document.querySelector('.rank-body');
const CloseRank = document.querySelector('.close-rank');
const containerGrayBackground = document.querySelector('.gray-background-container');


RankButton.onclick = function () { //Ранг - при нажатии на кнопку
	RankBody.style = 'display: flex;';
	containerGrayBackground.style = 'display: block;';
}
CloseRank.onclick = function () { //Ранг - при закрытии
	RankBody.style = 'display: none;';
	containerGrayBackground.style = 'display: none;';
}