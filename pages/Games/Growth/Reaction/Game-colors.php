<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans&display=swap" rel="stylesheet">
   <link rel="stylesheet" href="/pages/Games/Growth/Reaction/css/Game-colors.css">
   <title>Игра - цвета</title>
</head>

<?php 
   include $_SERVER['DOCUMENT_ROOT']."/include/games-pop-up.php"; 
   include $_SERVER['DOCUMENT_ROOT']."/dataBase/surencyAndScore.php";
?>
<body>
<div class="victory-loose-screen-container">
		<div class="victory-loose-screen__mode-container">
			<div class="victory-loose-screen__mode-title">Сложность</div>
			<div class="victory-loose-screen__mode"></div>
		</div>
		<div class="victory-loose-screen__win-loose-text">Победа!</div>
		<div class="victory-loose-screen__results-button">Результаты</div>
	</div>
	<div class="results-menu-container">
		<div class="results-menu__title">Результаты</div>
		<div class="results-menu__mode-container">
			<div class="results-menu__mode-title">Сложность</div>
			<div class="results-menu__mode"></div>
		</div>

		<div class="win-loose-screen">
		<ion-icon class="star" name="star"></ion-icon>
		<div class="screen-title items-container__win-loose-item">Победа</div>
		<ion-icon class="star" name="star"></ion-icon>
		</div>
		
		<div class="results-menu__items-container items-container">
			<div class="items-container__each-item-container">
				<div class="items-container__done-cards-icon"><ion-icon name="checkmark-outline"></ion-icon></div>
				<div class="items-container__done-cards-item"><div class="opened-cards"></div>/20</div>
			</div>
			<div class="items-container__each-item-container">
				<div class="items-container__time-icon"><ion-icon name="stopwatch-outline"></ion-icon></div>
				<div class="items-container__time-item">
					<div class="results-menu__time"></div> с.
				</div>
			</div>
			<div class="items-container__each-item-container">
				<div class="items-container__iq-icon">IQ</div>
				<div class="items-container__iq-item">+</div>
			</div>
			<div class="items-container__each-item-container">
				<div class="items-container__exp-icon">Exp</div>
				<div class="items-container__exp-item">+</div>
			</div>
			</div>
		<div class="results-menu__buttons-container">
			<div onClick="window.location.reload();" class=" results-menu__button results-menu__button-restart"><ion-icon
					name="refresh-outline"></ion-icon>
			</div>
			<a href="/index.php" class=" results-menu__button result-menu__button-home"><ion-icon
					name="home-outline"></ion-icon></a>
		</div>
	</div>
	
   <div class="button-start-container">
      <div class="start-menu">
         <div class="start-menu__game-mode-container">
            <div class="start-menu__game-mode-title">Сложность</div>
            <div class="start-menu__game-mode"></div>
         </div>
         <a href="#" class="button-start">START</a>
		 <div class="game-info-title">
		<span class="game-info-name">Игра картинок</span>
		<span class="game-info">В этой игре вам надо будет ответить, правильный ли цвет имеет прямоугольник вокруг слова по центру</span>
	  </div>
      </div>
   </div>
   <div class="wrapper">
      <div class="mode-options-container">
         <div class="mode-option-title">Сложность</div>
         <div class="mode-body">
            <div class="easy-mode-button">
               <span class="easy-mode-text">Легко</span>
               <div class="easy-mode-count">1.2x</div>
            </div>
            <div class="normal-mode-button">
               <span class="normal-mode-text">Нормально</span>
               <div class="normal-mode-count">1.4x</div>
            </div>
            <div class="hard-mode-button">
               <span class="hard-mode-text">Сложно</span>
               <div class="hard-mode-count">1.7x</div>
            </div>
            <div class="crazy-mode-button">
               <span class="crazy-mode-text">Безумие</span>
               <div class="crazy-mode-count">2x</div>
            </div>
         </div>
      </div>
	  <div class="topButton-gameWords">
         <a class="comeback-button" href="#"><div class="comeback-button-body"><ion-icon name="chevron-back-outline"></ion-icon></div></a>
         <a href="/pages/settings-page/settings-page.php" class="linkToTheSettings"><ion-icon class="imgSettings" name="settings-outline"></ion-icon></a>
         <div class="linkToTheRestart"><ion-icon name="refresh-outline"></ion-icon></div>
      </div>
      <div class="container-play-area">
         <div class="game-mode"></div>
         <div class="deadLineWrapper">
            <div id="deadeLine"></div>
         </div>
         <span class="counter-complited"><span class="counter-complited__number">0</span><span class="schet">/20</span>

            <div class="conntainer-rectangle">
               <div class="rectangle">
                  <span class="rectangle__text"></span>
               </div>
            </div>
            <div class="container-buttons">
               <div class="button_red">Нет</div>
               <div class="button_green">Да</div>
            </div>
      </div>
   </div>
   <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
   <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
   <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
   <script src="/pages/Games/Growth/Reaction/js/Game-colors.js"></script>
</body>

</html>