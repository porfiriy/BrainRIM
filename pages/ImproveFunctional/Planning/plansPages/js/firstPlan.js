const BackToPlanning = document.querySelector(".back-to-planning");

const InfoButton = document.querySelector('.info-button');
const ChangePlanBody = document.querySelector('.change-plan-body');

BackToPlanning.onclick = function () {//при нажатии назад на новом плане
   ChangePlanBody.style = 'display: none;';
}
InfoButton.onclick = function () {//при нажатии на инфо
   ChangePlanBody.style = 'display: flex;';
}