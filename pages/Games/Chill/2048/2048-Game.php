<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>2048</title>
	<link href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="/pages/Games/Chill/2048/css/2048-Game.css">    
</head>
<body>
<?php include($_SERVER['DOCUMENT_ROOT']."/include/games-pop-up.php"); ?>

<div class="topButton-gameWords">
         <a class="comeback-button" href="#"><div class="comeback-button-body"><ion-icon name="chevron-back-outline"></ion-icon></div></a>
         <a href="#" class="linkToTheSettings"><ion-icon class="imgSettings" name="settings-outline"></ion-icon></a>
         <div class="linkToTheRestart"><ion-icon name="refresh-outline"></ion-icon></div>
      </div>
	  
		<div class="game">
		<div class="best-score">Лучший результат: <span id="value-best">00</span></div>
      <div class="score">Счёт: <span id="value"></span></div>
    <div class="field">
      
      <div class="row">
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
      </div>
      <div class="row">
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
      </div>
      <div class="row">
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
      </div>
      <div class="row">
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
      </div>
    </div>
    
  </div>
  <div class='' id='status'>
  </div>

		<div class="results-container">
			<h1 class="results-head-text">Результаты</h1>
			<div class="results">
				<div class="time">Время: <div class="time-count">0</div></div>
				<div class="moves">Действий:<div class="moves-count">0</div></div>
				<div class="best-results">Ваш лучший результат:</div>
				<div class="time">Время: <div class="best-time-count">0</div></div>
				<div class="moves">Действий:<div class="best-moves-count">0</div></div>
				<div class="congrats">Вы - молодец!</div>
			</div>
			<div class="results-menu__buttons-container">
			<div onclick="window.location.reload();" class=" results-menu__button results-menu__button-restart"><ion-icon name="refresh-outline" role="img" class="md hydrated" aria-label="refresh outline"></ion-icon>
			</div>
			<a href="/index.php" class=" results-menu__button result-menu__button-home"><ion-icon name="home-outline" role="img" class="md hydrated" aria-label="home outline"></ion-icon></a>
		</div>
		</div>

    <script src="/pages/Games/Chill/2048/js/2048-Game.js"></script>  
	<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
</body>
</html>