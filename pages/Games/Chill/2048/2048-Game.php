<?php 
   include $_SERVER['DOCUMENT_ROOT']."/dataBase/games/logic2048Game.php";
   ?>

<?php

try {

    // SQL-запрос для получения лучших результатов
    $query = "
      SELECT 
			r.user_id, 
			u.login AS user_name, 
			MAX(r.score) AS best_score 
		FROM 
			game_2048_results r 
		JOIN 
			users u 
		ON 
			r.user_id = u.id 
		GROUP BY 
			r.user_id, u.login 
		ORDER BY 
			best_score DESC
		LIMIT 20;

    ";

    // Выполнение запроса
    $stmt = $pdo->prepare($query);
    $stmt->execute();
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
} catch (PDOException $e) {
    die("Ошибка подключения к базе данных: " . $e->getMessage());
}
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
	<meta name="viewport" content="width=device-width initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
	<title>2048</title>
	<link href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="/pages/Games/Chill/2048/css/2048-Game.css">    
	<link rel="canonical" href="https://brainrim.site">
	<link rel="icon" href="/img/app_icon_with_larger_area_1024x1024.ico" type="image/x-icon">
</head>
<body>
<?php include($_SERVER['DOCUMENT_ROOT']."/include/games-pop-up.php"); ?>
<div class="leaderboard-container">
	<div class="leaderboard__back-button"><img src="/img/left_arrow_b5hqu8dra3y4.svg" alt="кнопка назад" height = "30"></div>
	<h2>Лидеры</h2>
	<div class="leaderboard-list-container">
		<h3>2048</h3>
		
			<div class="leaderboard-items-container">
				<?php foreach ($results as $index => $row): ?>
						<div class="leaderboard-item">
							<div class="leaderboard-item__id"><?php echo $index + 1; ?></div>
							<div class="leaderboard-item__name"><?php echo htmlspecialchars($row['user_name']); ?></div>
							<div class="leaderboard-item__score"><?php echo htmlspecialchars($row['best_score']); ?></div>
							<div class="leaderboard-item__img"><ion-icon name="ribbon-outline"></ion-icon></div>
						</div>
				<?php endforeach; ?>
			</div>
	</div>
</div>
<div class="button-start-container">
   <div class="start-menu">
		<div class="leaderboard-button"><img src="/img/ranking_pe6ng5yn5vbm.svg" alt="Список лидеров"></div><!-- добавлять опционально, только если нужен список лидеров-->
		<div class="button-start">START</div>
		<div class="game-info-title">
			<span class="game-info-name">2048</span>
			<span class="game-info">В этой игре вам надо дойти до кубика с числом "2048"</span>
		</div>
   </div>
</div>
</div>
<div class="topButton-gameWords">
         <a class="comeback-button" href="#"><div class="comeback-button-body"><ion-icon name="arrow-back-outline"></ion-icon></div></a>
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