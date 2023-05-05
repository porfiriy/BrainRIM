const AddPlan = document.querySelector('.add-plan');
const NewPlanBody = document.querySelector('.new-plan-body');
const Back = document.querySelector('.back');
const todayDateValue = document.querySelector('.today-date');
const UserChooseDateValue = document.querySelector('.new-plan-date');
//const ta = document.querySelector('#target'); // textarea
const textarea = document.querySelector("#target");
const count = document.querySelector(".count");
const MaximumCount = document.querySelector("#maximum");

AddPlan.onclick = function () {//при нажатии открывается новый план
	NewPlanBody.style = 'display: flex;';
}

Back.onclick = function () {//при нажатии назад на новом плане
	NewPlanBody.style = 'display: none;';
}

flatpickr(".new-plan-date", {
	dateFormat: "d.m.Y",
	locale: "en"
});

var currentDate = new Date();
var day = currentDate.getDate();
var month = currentDate.toLocaleString('default', { month: 'long' });
var year = currentDate.getFullYear();

// Форматируем дату в нужный формат (дд-мм-гггг)
var formattedDate = day + '-' + month + '-' + year;
todayDateValue.innerHTML = formattedDate;


 // Кол-во символов в текстарее и смена цвета при низких значениях
const MaxCount = 200;

textarea.addEventListener('input', () => {
	const remaining = MaxCount - textarea.value.length;
	const color = remaining < MaxCount * 0.1 ? 'red' : null;

	count.textContent = `${remaining}`;
	count.style.color = color;
});