<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans&display=swap" rel="stylesheet">
   <link rel="stylesheet" href=" /pages/secondGameWords/css/game-words.css">
   <title>game words</title>
</head>

<body>
   <div class="start-menu">
      <a href="#" class="button-start">START</a>
	  <div class="game-info-title">
		<span class="game-info-name">Игра слов</span>
		<span class="game-info">Изменить!</span>
	  </div>
   </div>
   <div class="wrapper">
      <div class="topButton-gameWords">
         <a class="comeback-button" href=" /index.php">
            <img src=" /img/comeback-button.svg" alt="назад"></a>
         <a href=" /pages/settings-page/settings-page.html" class="linkToTheSettings"><img src=" /img/settings.svg"
               alt="settings" class="imgSettings"></a>
         <a href="#" onClick="window.location.reload();" class="linkToTheRestart"><img src=" /img/button-retryGame.svg"
               alt="restart" class="img-restart"></a>
      </div>

      <div class="score">
         <span class="firstScoreNum">1</span> <span>/</span> <span class="secondScoreNum">∞</span>
      </div>
      <div class="timer-wrap">
         <span class="timer">00:00</span>
      </div>
      <div class="firstTask">
         <div class="task2Text"> Назвать 4 страны на букву “Д” </div>
      </div>

      <div class="WrapperseparatingLine">
         <span class="separatingLine">И</span>
      </div>
      <div class="secondTask">
         <div class="task1Text"> Левую ногу согнуть </div>
      </div>
   </div>

   <script src=" /pages/secondGameWords/js/game-words.js"></script>
</body>

</html>