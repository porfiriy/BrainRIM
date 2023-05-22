const BackToPlanning = document.querySelector(".back-to-planning");
const planNumberInputBody = document.querySelector('.planNumber');
const InfoButton = document.querySelector('.info-button');
const ChangePlanBody = document.querySelector('.change-plan-body');

BackToPlanning.onclick = function () {//при нажатии назад на новом плане
	ChangePlanBody.style = 'display: none;';
}
InfoButton.onclick = function () {//при нажатии на инфо
	ChangePlanBody.style = 'display: flex;';
}

// Кол-во символов в текстарее и смена цвета при низких значениях
const MaxCount = 200;

textarea.addEventListener('input', () => {
	const remaining = MaxCount - textarea.value.length;
	const color = remaining < MaxCount * 0.1 ? 'red' : null;

	count.textContent = `${remaining}`;
	count.style.color = color;
});