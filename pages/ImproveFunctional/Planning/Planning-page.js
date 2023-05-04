const AddPlan = document.querySelector('.add-plan');
const NewPlanBody = document.querySelector('.new-plan-body');
const Back = document.querySelector('.back');
const todayDateValue = document.querySelector('.today-date');

AddPlan.onclick = function () {//при нажатии открывается новый план
	NewPlanBody.style = 'display: flex;';
}

var currentDate = new Date();
var day = currentDate.getDate();
var month = currentDate.toLocaleString('default', { month: 'long' });
var year = currentDate.getFullYear();

// Форматируем дату в нужный формат (дд-мм-гггг)
var formattedDate = day + '-' + month + '-' + year;

todayDateValue.innerHTML = formattedDate;