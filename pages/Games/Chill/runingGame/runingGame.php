<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Game</title>
    <link rel="stylesheet" href="/pages/Games/Chill/runingGame/css/runingGame.css" />
  </head>
  <body>
  <div class="topButton-gameWords">
         <a class="comeback-button" href="#"><div class="comeback-button-body"><ion-icon name="chevron-back-outline"></ion-icon></div></a>
         <a href="#" class="linkToTheSettings"><ion-icon class="imgSettings" name="settings-outline"></ion-icon></a>
         <div class="linkToTheRestart"><ion-icon name="refresh-outline"></ion-icon></div>
      </div>
    <div class="game-container">
        <div id="player"></div>
      <div id="score">Время: <span id="timer">0</span>с <div class="score-enemy-passed">Врагов пройдено: <span id="score-num">0</span></div></div>

	  <div class="results-container">
			<h1 class="results-head-text">Результаты</h1>
			<div class="results">
				<div class="time">Время: <div class="time-count">0</div></div>
				<div class="moves">Врагов:<div class="moves-count">0</div></div>
				<div class="best-results">Ваш лучший результат:</div>
				<div class="time">Время: <div class="best-time-count">0</div></div>
				<div class="moves">Врагов:<div class="best-moves-count">0</div></div>
				<div class="congrats">Вы - молодец!</div>
			</div>
			<div class="results-menu__buttons-container">
			<div onclick="window.location.reload();" class=" results-menu__button results-menu__button-restart"><ion-icon name="refresh-outline" role="img" class="md hydrated" aria-label="refresh outline"></ion-icon>
			</div>
			<a href="/index.php" class=" results-menu__button result-menu__button-home"><ion-icon name="home-outline" role="img" class="md hydrated" aria-label="home outline"></ion-icon></a>
		</div>

    </div>
    <script src="/pages/Games/Chill/runingGame/js/runingGame.js"></script>
	<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
  </body>
</html>