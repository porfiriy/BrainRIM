const AddPlan = document.querySelectorAll('.add-plan');
const NewPlanBody = document.querySelectorAll('.new-plan-body');
const Back = document.querySelectorAll('.back');


AddPlan.onclick = function () {//при нажатии открывается новый план
	NewPlanBody.style = 'display: flex;';
}