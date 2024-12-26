const board = document.getElementById('game-board');
const levelTimerElement = document.getElementById('level-timer');
const totalTimerElement = document.getElementById('total-timer');
const levelElement = document.getElementById('level');
const messageElement = document.getElementById('message');
const resultScreen = document.getElementById('result-screen');
const resultText = document.getElementById('result-text');

let gridSize = 2; // Starting grid size
let path = [];
let selectedTiles = new Set();
let levelTime = 40; // Time per level
let totalTime = 0; // Total time spent in the game
let currentLevel = 1; // Current level number
let levelTimer;
let totalTimer;
let gameOver = false;

function generateMaze(size) {
   board.innerHTML = '';
   board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
   const totalTiles = size * size;
   path = [];
   selectedTiles.clear();
   for (let i = 0; i < totalTiles; i++) {
      const tile = document.createElement('div');
      tile.classList.add('tile');
      tile.addEventListener('click', () => handleTileClick(i));
      board.appendChild(tile);
   }
   createPath(size);
   showPathPreview();
}

function createPath(size) {
   let x = 0, y = 0;
   path.push(0);
   while (x < size - 1 || y < size - 1) {
      if (x < size - 1 && (y === size - 1 || Math.random() > 0.5)) {
         x++;
      } else {
         y++;
      }
      path.push(y * size + x);
   }
   console.log('Path:', path); // Debugging purposes
}

function showPathPreview() {
   const tiles = document.querySelectorAll('.tile');
   path.forEach(index => tiles[index].classList.add('preview'));
   setTimeout(() => {
      path.forEach(index => tiles[index].classList.remove('preview'));
      enableTiles();
      startLevelTimer(); // Start level timer only after preview ends
   }, 2000); // Show path for 2 seconds
}

function enableTiles() {
   const tiles = document.querySelectorAll('.tile');
   tiles.forEach(tile => tile.style.pointerEvents = 'auto');
}

function handleTileClick(index) {
   const tiles = document.querySelectorAll('.tile');
   if (path.includes(index) && !selectedTiles.has(index)) {
      tiles[index].classList.add('correct');
      selectedTiles.add(index);
      if (selectedTiles.size === path.length) {
         clearInterval(levelTimer); // Stop level timer on level complete
         setTimeout(() => {
            messageElement.style.visibility = 'visible';
            setTimeout(() => {
               messageElement.style.visibility = 'hidden';
               nextLevel();
            }, 2000);
         }, 300);
      }
   } else if (!path.includes(index)) {
      tiles[index].classList.add('incorrect');
      resetMaze();
   }
}

function resetMaze() {
   setTimeout(() => {
      generateMaze(gridSize);
      selectedTiles.clear();
   }, 500);
}

function nextLevel() {
   levelTime = 40; // Reset level time
   gridSize++;
   currentLevel++;
   levelElement.textContent = `Уровень: ${currentLevel}`;
   generateMaze(gridSize);
}

function startLevelTimer() {
   levelTimer = setInterval(() => {
      levelTime--;
      levelTimerElement.textContent = `Level Time: ${levelTime}`;
      if (levelTime <= 0) {
         endGame();
      }
   }, 1000);
}

function startTotalTimer() {
   totalTimer = setInterval(() => {
      totalTime++;
      totalTimerElement.textContent = `Total Time: ${totalTime}`;
   }, 1000);
}

function endGame() {
   if (!gameOver) {
      clearInterval(levelTimer);
      clearInterval(totalTimer);
      gameOver = true;
      resultText.innerHTML = `Game Over!<br>You reached Level ${currentLevel} in ${totalTime} seconds.`;
      resultScreen.style.display = 'flex';
   }
}

function restartGame() {
   location.reload();
}

function startGame() {
   generateMaze(gridSize);
   startTotalTimer(); // Start total timer at the beginning of the game
}

startGame();