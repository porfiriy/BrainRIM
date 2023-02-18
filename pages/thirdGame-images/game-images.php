<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans&display=swap" rel="stylesheet">
   <link rel="stylesheet" href=" /pages/thirdGame-images/css/game-images.css">
   <title>game words</title>
</head>

<body>
<?php include("C:\ospanel\domains\mem.com\include\games-pop-up.php"); ?>
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
      <div class="results-menu__items-container items-container">
         <div class="items-container__each-item-container">
            <div class="items-container__win-loose-icon"></div>
            <div class="items-container__win-loose-item"></div>
         </div>
         <div class="items-container__each-item-container">
            <div class="items-container__time-icon"><ion-icon name="stopwatch-outline"></ion-icon></div>
            <div class="items-container__time-item">
               <div class="results-menu__time"></div> сек.
            </div>
         </div>
         <div class="items-container__each-item-container">
            <div class="items-container__done-cards-icon"><ion-icon name="checkmark-outline"></ion-icon></div>
            <div class="items-container__done-cards-item">Открыто<div class="opened-cards">8</div>/9</div>
         </div>
         <div class="items-container__each-item-container">
            <div class="items-container__iq-icon">IQ</div>
            <div class="items-container__iq-item">+20</div>
         </div>
      </div>
      <div class="results-menu__buttons-container">
         <div onClick="window.location.reload();" class=" results-menu__button results-menu__button-restart"><ion-icon
               name="refresh-outline"></ion-icon>
         </div>
         <a href=" /index.php" class=" results-menu__button result-menu__button-home"><ion-icon
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
      </div>
   </div>
   <div class="wrapper">
      <div class="mode-options-container">
         <div class="mode-option-title">Сложность</div>
         <div class="mode-body">
            <div class="mode-button-container">
               <div class=" easy-mode-button">Легко</div>
               <div class="mode-button__procent">1.3x</div>
            </div>
            <div class="mode-button-container">
               <div class=" normal-mode-button">Нормально</div>
               <div class="mode-button__procent">1.5x</div>
            </div>
            <div class="mode-button-container">
               <div class=" hard-mode-button">Сложно</div>
               <div class="mode-button__procent">1.7x</div>
            </div>
            <div class="mode-button-container">
               <div class=" crazy-mode-button">Безумно</div>
               <div class="mode-button__procent">2x</div>
            </div>
         </div>
      </div>
      <div class="topButton-gameWords">
         <a class="comeback-button" href="#">
            <div class="comeback-button-body">
               <ion-icon name="chevron-back-outline"></ion-icon>
            </div>
         </a>
         <a href="#" class="linkToTheSettings"><ion-icon class="imgSettings" name="settings-outline"></ion-icon></a>
         <div class="linkToTheRestart"><ion-icon class="img-restart" name="refresh-outline"></ion-icon></div>
      </div>

      <div class="game-mode"></div>
      <div class="hint-button">
         <div class="hint-counter">0</div><ion-icon class="icon-eye" name="eye-outline"></ion-icon>
      </div>
      <h3 class="text-openedCards"> Сделано:<span class="score-openedCards" id="scoreOpenedCards"></span>/9</h3>
      <div class="deadLineWrapper">
         <div id="deadeLine"></div>
      </div>
      <section class="memory-game">
         <div class="memory-card" data-framework="1">
            <img src=" /pages/thirdGame-images/img/1.png" alt="1" class="front-face">
            <img src="" alt="memory card" class="back-face">
            <img class="brain-logo" src=" /pages/thirdGame-images/img/brain-logo.png" alt="logo">
         </div>
         <div class="memory-card" data-framework="1">
            <img src="/pages/thirdGame-images/img/1.png" alt="1" class="front-face">
            <img src="/pages/thirdGame-images/img/0.jpg" alt="memory card" class="back-face">
            <img class="brain-logo" src="/pages/thirdGame-images/img/brain-logo.png" alt="logo">
         </div>

         <div class="memory-card" data-framework="2">
            <img src="/pages/thirdGame-images/img/2.png" alt="2" class="front-face two-eagle">
            <img src="/pages/thirdGame-images/img/0.jpg" alt="memory card" class="back-face">
            <img class="brain-logo" src="/pages/thirdGame-images/img/brain-logo.png" alt="logo">
         </div>
         <div class="memory-card" data-framework="2">
            <img src="/pages/thirdGame-images/img/2.png" alt="2" class="front-face two-eagle">
            <img src="/pages/thirdGame-images/img/0.jpg" alt="memory card" class="back-face">
            <img class="brain-logo" src="/pages/thirdGame-images/img/brain-logo.png" alt="logo">
         </div>
         <div class="memory-card" data-framework="3">
            <img src="/pages/thirdGame-images/img/3.png" alt="3" class="front-face img-mouse">
            <img src="/pages/thirdGame-images/img/0.jpg" alt="memory card" class="back-face">
            <img class="brain-logo" src="/pages/thirdGame-images/img/brain-logo.png" alt="logo">
         </div>
         <div class="memory-card" data-framework="3">
            <img src="/pages/thirdGame-images/img/3.png" alt="3" class="front-face img-mouse">
            <img src="/pages/thirdGame-images/img/0.jpg" alt="memory card" class="back-face">
            <img class="brain-logo" src="/pages/thirdGame-images/img/brain-logo.png" alt="logo">
         </div>
         <div class="memory-card" data-framework="4">
            <img src="/pages/thirdGame-images/img/4.png" alt="4" class="front-face">
            <img src="/pages/thirdGame-images/img/0.jpg" alt="memory card" class="back-face">
            <img class="brain-logo" src="/pages/thirdGame-images/img/brain-logo.png" alt="logo">
         </div>
         <div class="memory-card" data-framework="4">
            <img src="/pages/thirdGame-images/img/4.png" alt="4" class="front-face">
            <img src="/pages/thirdGame-images/img/0.jpg" alt="memory card" class="back-face">
            <img class="brain-logo" src="/pages/thirdGame-images/img/brain-logo.png" alt="logo">
         </div>
         <div class="memory-card" data-framework="5">
            <img src="/pages/thirdGame-images/img/5.png" alt="5" class="front-face img-sheep">
            <img src="/pages/thirdGame-images/img/0.jpg" alt="memory card" class="back-face">
            <img class="brain-logo" src="/pages/thirdGame-images/img/brain-logo.png" alt="logo">
         </div>
         <div class="memory-card" data-framework="5">
            <img src="/pages/thirdGame-images/img/5.png" alt="5" class="front-face img-sheep">
            <img src="/pages/thirdGame-images/img/0.jpg" alt="memory card" class="back-face">
            <img class="brain-logo" src="/pages/thirdGame-images/img/brain-logo.png" alt="logo">
         </div>
         <div class="memory-card" data-framework="6">
            <img src="/pages/thirdGame-images/img/6.png" alt="6" class="front-face">
            <img src="/pages/thirdGame-images/img/0.jpg" alt="memory card" class="back-face">
            <img class="brain-logo" src="/pages/thirdGame-images/img/brain-logo.png" alt="logo">
         </div>
         <div class="memory-card" data-framework="6">
            <img src="/pages/thirdGame-images/img/6.png" alt="6" class="front-face">
            <img src="/pages/thirdGame-images/img/0.jpg" alt="memory card" class="back-face">
            <img class="brain-logo" src="/pages/thirdGame-images/img/brain-logo.png" alt="logo">
         </div>
         <div class="memory-card" data-framework="7">
            <img src="/pages/thirdGame-images/img/7.png" alt="7" class="front-face img-ice-creem">
            <img src="/pages/thirdGame-images/img/0.jpg" alt="memory card" class="back-face">
            <img class="brain-logo" src="/pages/thirdGame-images/img/brain-logo.png" alt="logo">
         </div>
         <div class="memory-card" data-framework="7">
            <img src="/pages/thirdGame-images/img/7.png" alt="7" class="front-face img-ice-creem">
            <img src="/pages/thirdGame-images/img/0.jpg" alt="memory card" class="back-face">
            <img class="brain-logo" src="/pages/thirdGame-images/img/brain-logo.png" alt="logo">
         </div>
         <div class="memory-card" data-framework="8">
            <img src="/pages/thirdGame-images/img/8.png" alt="8" class="front-face">
            <img src="/pages/thirdGame-images/img/0.jpg" alt="memory card" class="back-face">
            <img class="brain-logo" src="/pages/thirdGame-images/img/brain-logo.png" alt="logo">
         </div>
         <div class="memory-card" data-framework="8">
            <img src="/pages/thirdGame-images/img/8.png" alt="8" class="front-face">
            <img src="/pages/thirdGame-images/img/0.jpg" alt="memory card" class="back-face">
            <img class="brain-logo" src="/pages/thirdGame-images/img/brain-logo.png" alt="logo">
         </div>
         <div class="memory-card" data-framework="9">
            <img src="/pages/thirdGame-images/img/9.png" alt="9" class="front-face img-circle">
            <img src="/pages/thirdGame-images/img/0.jpg" alt="memory card" class="back-face">
            <img class="brain-logo" src="/pages/thirdGame-images/img/brain-logo.png" alt="logo">
         </div>
         <div class="memory-card" data-framework="9">
            <img src="/pages/thirdGame-images/img/9.png" alt="9" class="front-face img-circle">
            <img src="/pages/thirdGame-images/img/0.jpg" alt="memory card" class="back-face">
            <img class="brain-logo" src="/pages/thirdGame-images/img/brain-logo.png" alt="logo">
         </div>
      </section>

   </div>
   <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
   <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
   <script src="/pages/thirdGame-images/js/third-game.js"></script>
</body>

</html>