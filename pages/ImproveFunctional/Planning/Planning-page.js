const Add1Plan = document.querySelector('.first-plan');
const Add2Plan = document.querySelector('.second-plan');
const Add3Plan = document.querySelector('.third-plan');
const Add4Plan = document.querySelector('.fourth-plan');
const NewPlanBody = document.querySelector('.new-plan-body');
const planNumberInputBody = document.querySelector('.planNumber');
const Back = document.querySelector('.back');
const todayDateValue = document.querySelector('.today-date');
//const ta = document.querySelector('#target'); // textarea
const textarea = document.querySelector("#target");
const count = document.querySelector(".count");
const MaximumCount = document.querySelector("#maximum");

Add1Plan.onclick = function () {//при нажатии открывается новый план
	NewPlanBody.style = 'display: flex;';
	planNumberInputBody.value = 1;
}
Add2Plan.onclick = function () {//при нажатии открывается новый план
	NewPlanBody.style = 'display: flex;';
	planNumberInputBody.value = 2;
}
Add3Plan.onclick = function () {//при нажатии открывается новый план
	NewPlanBody.style = 'display: flex;';
	planNumberInputBody.value = 3;
}
Add4Plan.onclick = function () {//при нажатии открывается новый план
	NewPlanBody.style = 'display: flex;';
	planNumberInputBody.value = 4;
}

Back.onclick = function () {//при нажатии назад на новом плане
	NewPlanBody.style = 'display: none;';
}

flatpickr(".new-plan-date", {
	dateFormat: "Y/m/d"
});

let currentDate = new Date();
let day = currentDate.getDate();
let month = currentDate.toLocaleString('default', { month: 'long' });
let year = currentDate.getFullYear();
// Форматируем дату в нужный формат (дд-мм-гггг)
let formattedDate = year + ' - ' + month + ' - ' + day;
todayDateValue.innerHTML = formattedDate;



// Кол-во символов в текстарее и смена цвета при низких значениях
const MaxCount = 200;

textarea.addEventListener('input', () => {
	const remaining = MaxCount - textarea.value.length;
	const color = remaining < MaxCount * 0.1 ? 'red' : null;

	count.textContent = `${remaining}`;
	count.style.color = color;
});