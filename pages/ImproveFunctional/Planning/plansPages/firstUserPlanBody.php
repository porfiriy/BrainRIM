<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link rel="stylesheet" href="/pages/ImproveFunctional/Planning/plansPages/css/firstPlan.css">
   <title>Document</title>
</head>
<body>
<div class="change-plan-body">
		    	<div class="comeback-button back-to-planning"><ion-icon name="chevron-back-outline"></ion-icon></div>
		    	<div class="new-plan-title">Изменить план</div>
			<div class="new-plan-date-body">
				<input type="date" name="planDateValue" class="new-plan-date" placeholder="Выберите дату">
		   	<div class="date-icon" ></div>
			</div>
			<div class="container plan-text-body">
			<button type="submit" name="button-change" class="change-plan">Изменить</button>
    			<textarea name="planTextArea" placeholder="Напишите цель/заметку здесь..." id="target" autocomplete="on" maxlength="200"></textarea>
				<div class="symbols-count">
    			<span class="count" id="current">0 </span>
    			<span id="maximum">/ 200</span>
  				</div>
			</div>
		  <button type="submit" name="button-save-plan" class="save-plan">Готово</button>
		  <button type="submit" name="button-delelte-plan" class="delelte-plan">Удалить</button>
		</div>
</body>
</html>
