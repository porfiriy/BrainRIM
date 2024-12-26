<?php 
   include $_SERVER['DOCUMENT_ROOT']."/dataBase/games/logic2048Game.php";
   ?>
<!DOCTYPE html>
<html lang="en">
<head>
	<script>//записывает в переменные данные из базы
      <?php if(isset($_SESSION['id'])): ?>
            let bestTimeRes = Number('<?= $bestUserResultTime ?>');
            let bestScoreRes = Number('<?= $bestUserScore ?>');
      <?php else: ?>//что бы не было ошибки когда не авторизован пользователь
        bestTimeRes = 0;
        bestScoreRes = 0;
      <?php endif;?>
   </script>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width">
	<title>2048</title>
	<link href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="/pages/Games/Chill/2048/css/2048-Game.css">    
</head>
<body>
<?php include($_SERVER['DOCUMENT_ROOT']."/include/games-pop-up.php"); ?>
<div class="button-start-container">
      <div class="start-menu">
         <div class="button-start">START</div>
		 <div class="game-info-title">
		<span class="game-info-name">2048</span>
		<span class="game-info">В этой игре вам надо дойти до кубика с числом "2048"</span>
	  </div>
      </div>
   </div>
   </div>
<div class="topButton-gameWords">
         <a class="comeback-button" href="#"><div class="comeback-button-body"><ion-icon name="chevron-back-outline"></ion-icon></div></a>
         <a href="#" class="linkToTheSettings"><ion-icon class="imgSettings" name="settings-outline"></ion-icon></a>
         <div class="linkToTheRestart"><ion-icon name="refresh-outline"></ion-icon></div>
      </div>
	  
	  <div class="wrapper">
	<div class="score_container">
	<div class="best-score">Лучший результат: <span class="value-best">00</span></div>
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


		</div>
		<div id class="results-gameover results-container">
	  <h1 class="results-head-text">Результаты</h1>
			<div class="results">
				<div class="time">Время:<div class="time-count"></div>c.</div>
				<div class="moves">Счёт:<div class="moves-count"></div></div>
				<div class="best-results">Ваш лучший результат:</div>
				<div class="time">Время: <div class="best-time-count">0</div>с.</div>
				<div class="moves">Счёт: <div class="best-moves-count">0</div></div>
				<div class="loose-win-value">Вы проиграли</div>
			</div>
			<div class="results-menu__buttons-container">
			<div onclick="window.location.reload();" class=" results-menu__button results-menu__button-restart"><ion-icon name="refresh-outline" role="img" class="md hydrated" aria-label="refresh outline"></ion-icon>
			</div>
			<a href="/index.php" class=" results-menu__button result-menu__button-home"><ion-icon name="home-outline" role="img" class="md hydrated" aria-label="home outline"></ion-icon></a>
		</div>
	</div>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
   <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
   <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
  	<script src="/pages/Games/Chill/2048/js/2048-Game.js"></script> 
</body>
</html>