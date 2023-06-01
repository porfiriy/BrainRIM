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
	  
	  <div class="wrapper">
	<div class="score_container">
	<div class="best-score">Лучший результат: <span id="value-best">00</span></div>
		<p>Счёт: <span id="score01"> 0</span></p>
	</div>  
		<div class="main">                                              
			<div class="cell" id="c00"></div>
			<div class="cell" id="c01"></div>
			<div class="cell" id="c02"></div>
			<div class="cell" id="c03"></div>

			<div class="cell" id="c10"></div>
			<div class="cell" id="c11"></div>
			<div class="cell" id="c12"></div>
			<div class="cell" id="c13"></div>
			
			<div class="cell" id="c20"></div>
			<div class="cell" id="c21"></div>
			<div class="cell" id="c22"></div>
			<div class="cell" id="c23"></div>

			<div class="cell" id="c30"></div>
			<div class="cell" id="c31"></div>
			<div class="cell" id="c32"></div>
			<div class="cell" id="c33"></div>
			</div>

<!--
    		<div class="gameover" id="gameover">                
			<div class="over">
				<p>GAME OVER!!!</p>
				<p>SCORE:<span id="score02"></span></p>
				<a href="javascript:game.start()">try again!</a>
			</div>
!-->

			<div class="results-gameover results-container">
	  <h1 class="results-head-text">Результаты</h1>
			<div class="results">
				<div class="time">Время:<div class="time-count"></div>c.</div>
				<div class="moves">Действий:<div class="moves-count"></div></div>
				<div class="best-results">Ваш лучший результат:</div>
				<div class="time">Время: <div class="best-time-count">0</div>с.</div>
				<div class="moves">Действий: <div class="best-moves-count">0</div></div>
				<div class="loose-win-value">Вы проиграли</div> 
			</div>
			<div class="results-menu__buttons-container">
			<div onclick="window.location.reload();" class=" results-menu__button results-menu__button-restart"><ion-icon name="refresh-outline" role="img" class="md hydrated" aria-label="refresh outline"></ion-icon>
			</div>
			<a href="/index.php" class=" results-menu__button result-menu__button-home"><ion-icon name="home-outline" role="img" class="md hydrated" aria-label="home outline"></ion-icon></a>
		</div>
		</div>
	</div>

  <script src="/pages/Games/Chill/2048/js/2048-Game.js"></script>  
	<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
</body>
</html>