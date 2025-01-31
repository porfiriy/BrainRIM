<?php
   
   include $_SERVER['DOCUMENT_ROOT']."/dataBase/surencyAndScore.php";
?>
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
	<link href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="/pages/Profile-page/Profile.css">
	<link rel="canonical" href="https://brainrim.site">
   <link rel="icon" href="/img/app_icon_with_larger_area_1024x1024.ico" type="image/x-icon">
	<title>Профиль</title>
</head>

<body>
	<!-- alert -->
	<div class="pop-up-alert-container"><div class="alert-text">Функция в разработке!</div></div></div>
	<div class="gray-background-container"></div>
	<!-- alert -->
	<header>
		<a class="comeback-button" href="/index.php">
		<ion-icon name="arrow-back-outline"></ion-icon></a>
		<div class="profile-title-container">
			<span class="page-name">Профиль</span>
			<div class="change-name"><ion-icon name="pencil-outline"></ion-icon></div>
		</div>
		<ion-icon name="mail-outline" class="mail"></ion-icon>
	</header>
	<main>
		
			<div class="profile_first"> 
				<div class="profile-picture"><img class="Profilesvg" src="/img/Menu/brain.svg" alt=""></div>	
				<div class="name-container">
					<span class="profile-name">
						<?php if(isset($_SESSION['id'])): ?>
						<?php echo $_SESSION['login'];?>
						<?php else: ?>
						Логин
						<?php endif;?>
					</span>
				</div>	
			</div>
				<div class="rank-container">
					<span class="rank">Новичок</span>
				</div>
				<div class="container">
				<a href="/pages/Achievements-Page/Achievements.php" class="button button-achievments">Достижения</a>
					<div class="icon"><ion-icon name="ribbon-outline"></ion-icon></div>
				</div>
					<div class="container">
					<a href="#" class="button statistic-page">Статистика</a>
					<div class="icon"><ion-icon name="stats-chart"></ion-icon></div>
					</div>
					<div class="container">
					<a href="#" class="button add-friend">Добавить друга</a>
					<div class="icon"><ion-icon name="person-add-outline"></ion-icon></div>
					</div>
					<div class="leave-btn">
					<a href="<?php echo "/dataBase/logOut.php";?>" class="button leave">Выйти из аккаунта</a>
					</div>
			
	</main>

	<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
	<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
	<script src="/pages/Profile-page/Profile.js"></script>
</body>

</html>