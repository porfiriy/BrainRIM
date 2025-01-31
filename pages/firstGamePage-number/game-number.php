<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
   <link href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans&display=swap" rel="stylesheet">
   <link rel="stylesheet" href=" /pages/firstGamePage-number/css/game-number.css">
   <title>Игра цифры</title>
</head>

<body>
<?php include("C:\ospanel\domains\mem.com\include\games-pop-up.php"); ?>
      <div class="start-menu">
         <a href="#" class="button-start">START</a>
		 <div class="game-info-title">
		<span class="game-info-name">Игра цифр</span>
		<span class="game-info">В этой игре вам надо будет запомнить цифры по порядку и набрать их</span>
	  </div>
      </div>
      <div class="random-num-container">
         <div class="random-num-container__text">ЗАПОМНИ</div>
         <div class="random-num-container__textGo">ПОГНАЛИ !</div>
         <div class="random-num-container__number rand-num"></div>
         <div class="random-num-container__number2 rand-num"></div>
         <div class="random-num-container__number3 rand-num"></div>
         <div class="random-num-container__number4 rand-num"></div>
         <div class="random-num-container__number5 rand-num"></div>
         <div class="random-num-container__number6 rand-num"></div>
         <div class="random-num-container__number7 rand-num"></div>
         <div class="random-num-container__number8 rand-num"></div>
         <div class="random-num-container__number9 rand-num"></div>
         <div class="random-num-container__number10 rand-num"></div>
      </div>
      <div class="screenResult__container">
         <h2 class="screenResult__textResult">Результаты</h2>
         <span class="screenResult__textMode">Сложность: <span class="screenResult__textMode-green">Лёгкая</span></span>
         <span class="screenResult__timeResult">4.20</span>
         <div class="screenResult__discriptionRandomNum">Заданные числа</div>
         <div class="screenResult__randomNum-orange">

         </div>
         <span class="screenResult__plusScoreIQ">+33 </span>
         <form action="#" class="screenResult__form">
            <div class="screenResult__button-container">
               <a class="button-container__button-restart" onClick="window.location.reload();"><img
                     src=" /pages/firstGamePage-number/img/arrovRestart.svg" alt="заново"></a>
               <a class=" button-container__button-next"><img src=" /pages/firstGamePage-number/img/ArrowNext.svg"
                     alt="дальше"></a>
            </div>
         </form>
      </div>
      <header class="header">

         <a class="header__comeback-button" href="#">
            <img class="header__img-comeback" src=" /img/comeback-button.svg" alt="назад"></a>
         <a href="#" class="header__settings-link"><img src=" /img/settings.svg" alt="settings"
               class="header__icon-settings"></a>
         <a href="#" onClick="window.location.reload();" class="header__button-restart"><img
               src=" /img/button-retryGame.svg" alt="заново" class="header__img-restart"></a>
      </header>
      <div class="maine">
         <div class="game-mode">Easy mode</div>
         <div class="maine__timer-container">
            <span class="timer">00 : 00</span>
         </div>
         <div class="maine__numbers-top-container numbers-container">
         </div>
         <div class="maine__container-calc ">
            <form class="calculator" name="calc">
               <input type="text" id="input" class="value" readonly name="txt">
               <div class="form__num-wrap">
                  <span class="num" onclick="calc.txt.value+='1'"><i>1</i></span>
                  <span class="num" onclick="calc.txt.value+='2'"><i>2</i></span>
                  <span class="num" onclick="calc.txt.value+='3'"><i>3</i></span>
                  <span class="num" onclick="calc.txt.value+='4'"><i>4</i></span>
                  <span class="num" onclick="calc.txt.value+='5'"><i>5</i></span>
                  <span class="num" onclick="calc.txt.value+='6'"><i>6</i></span>
                  <span class="num" onclick="calc.txt.value+='7'"><i>7</i></span>
                  <span class="num" onclick="calc.txt.value+='8'"><i>8</i></span>
                  <span class="num" onclick="calc.txt.value+='9'"><i>9</i></span>
                  <span class="num clear" onclick="calc.txt.value=''"><i></i></span>
                  <span class="num" onclick="calc.txt.value+='0'"><i>0</i></span>
                  <button class="num enter" onclick="inputResult()"><i></i></button>
               </div>
            </form>
         </div>
      </div>
   </div>
   <script src=" /pages/firstGamePage-number/js/game-number.js"></script>
</body>

</html>