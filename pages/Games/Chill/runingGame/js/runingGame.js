let settings = document.querySelector(".pop-up__container");
let comeback = document.querySelector(".pop-up__container2");
let restart = document.querySelector(".pop-up__container3");

let ResultsGameOver = document.querySelector(".results-gameover");

//при нажатии на отмену вспл окна настройки 
document.querySelector('.pop-up__cancel').onclick = function () {
   settings.style = 'visibility:hidden;';
};
//при нажатии на иконку настроек
document.querySelector('.linkToTheSettings').onclick = function () {
   settings.style = 'visibility:visible;';
};
//при нажатии на отмену вспл окна назад
document.querySelector('.pop-up__cancel2').onclick = function () {
   comeback.style = 'visibility:hidden;';
};
//при нажатии на иконку назад
document.querySelector('.comeback-button').onclick = function () {
   comeback.style = 'visibility:visible;';
};
//при нажатии на отмену вспл окна рестарт
document.querySelector('.pop-up__cancel3').onclick = function () {
   restart.style = 'visibility:hidden;';
};
//при нажатии на иконку рестарт
document.querySelector('.linkToTheRestart').onclick = function () {
   restart.style = 'visibility:visible;';
};


const gameContainer = document.querySelector(".game-container");
const player = document.querySelector("#player");
const timer = document.querySelector("#timer");
const score = document.querySelector("#score-num");
let timerCount = 0;
let enemiesPassedCount = 0;
let isGameOver = false;
let enemySpeed = 3; // Скорость падения врагов
let enemyInterval = 1500; // Интервал появления врагов
let maxEnemies = 16; // Максимальное количество врагов на экране
let currentEnemies = 0; // Текущее количество врагов на экране
let enemyIntervalId = null;

function movePlayer(event) {
   const x = event.touches[0].clientX;
   const y = event.touches[0].clientY;
   const horizontalLimit = gameContainer.clientWidth - player.clientWidth;
   const verticalLimit = gameContainer.clientHeight - player.clientHeight;
   if (x > 0 && x < horizontalLimit && y > 0 && y < verticalLimit) {
      player.style.left = x + "px";
      player.style.top = y + "px";
   }
}

function createEnemy() {
   if (currentEnemies >= maxEnemies || isGameOver == true) return;

   const enemy = document.createElement("div");
   enemy.classList.add("enemy");
   enemy.style.left = Math.random() * (gameContainer.clientWidth - 20) + "px";
   gameContainer.appendChild(enemy);
   moveEnemy(enemy);
   currentEnemies++;
}

function moveEnemy(enemy) {
   let enemyMoveInterval = setInterval(() => {
      const playerPosition = player.getBoundingClientRect();
      const enemyPosition = enemy.getBoundingClientRect();

      if (
         playerPosition.bottom >= enemyPosition.top &&
         playerPosition.top <= enemyPosition.bottom &&
         playerPosition.right >= enemyPosition.left &&
         playerPosition.left <= enemyPosition.right
      ) {
         gameOver();
      } else if (enemyPosition.top >= gameContainer.clientHeight) {
         gameContainer.removeChild(enemy);
         enemiesPassedCount++;
         updateScore();
         currentEnemies--;
      } else {
         enemy.style.top = enemyPosition.top + enemySpeed + "px";
      }
   }, 20);
}

function updateScore() {
   score.innerHTML = `${enemiesPassedCount}`;
}

function increaseDifficulty() {
   if (timerCount > 0 && timerCount % 10 === 0) {
      enemySpeed += 1.5;
      if (enemyInterval > 400) {
         enemyInterval -= 400;
         clearInterval(enemyIntervalId); // Останавливаем текущий интервал
         enemyIntervalId = setInterval(createEnemy, enemyInterval); // Создаем новый интервал с обновленным значением
      }
      if (maxEnemies < 16) {
         maxEnemies += 2;
      }
   }
}

function startGame() {
   isGameOver = false;
   timerCount = 0;
   enemiesPassedCount = 0;
   updateScore();
   timer.innerHTML = "0";
   player.style.left = "50%";
   player.style.top = "90%";

   const gameTimer = setInterval(() => {
      timerCount++;
      timer.innerHTML = timerCount;
      increaseDifficulty();
      if (isGameOver) {
         clearInterval(gameTimer);
      }
   }, 1000);

   createEnemy();
   console.log(enemyInterval)
   enemyIntervalId = setInterval(createEnemy, enemyInterval); // Сохраняем идентификатор интервала
}

function gameOver() {
   isGameOver = true;
   enemySpeed = 0;
   console.log("Game Over! Enemies Passed: " + enemiesPassedCount);
   ResultsGameOver.style = 'display:block;';
}

gameContainer.addEventListener("touchmove", movePlayer);
startGame();