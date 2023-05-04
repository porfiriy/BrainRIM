<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width">
   <link href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans&display=swap" rel="stylesheet">
   <link rel="stylesheet" href="/pages/ImproveFunctional/Planning/Planning-page.css">
   <title>Planning-page</title>
</head>

<body>
    <header>
            <a class="comeback-button" href="/index.php"><ion-icon name="chevron-back-outline"></ion-icon></a>
			<div class="page-title">Планирование<ion-icon class="page-title-icon" name="calendar-outline"></ion-icon></div>
	</header>
	<main>
	    <div class="info-body">
	        <div class="info-button"><ion-icon name="information-outline" role="img" class="md hydrated" aria-label="information outline"></ion-icon></div>
	        <div class="info-text">Выбирай дату и записывай задачу</div>
	    </div>
		<div class="date-body">
				<div class="today-text">Сегодня</div>
				<div class="today-date">XX.XX.XXXX</div>
		</div>
		<div class="add-plan-body">
			<div class="add-plan">+ Добавить план</div>
			<div class="add-plan">+ Добавить план</div>
			<div class="add-plan">+ Добавить план</div>
			<div class="add-plan">+ Добавить план</div>
		</div>

		<div class="new-plan-body">
		    <div class="comeback-button back"><ion-icon name="chevron-back-outline"></ion-icon></div>
		    <div class="new-plan-title">Новый план</div>
		<div class="new-plan-date-body">
		    <div class="new-plan-date">XX.XX.XXXX</div>
		    <div class="date-icon"><ion-icon class="page-title-icon md hydrated" name="calendar-outline" role="img" aria-label="calendar outline"></ion-icon></div>
		</div>
		<div class="plan-text-body">
		  <textarea name="target" id="target" cols="30" rows="10"></textarea>
		  <div class="symbols-count">X/X</div>
		  </div>
		  <div class="create-plan">Создать план</div>
		</div>
	</main>
</body>

    <script src="/pages/ImproveFunctional/Planning/Planning-page.js"></script>
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
</html>