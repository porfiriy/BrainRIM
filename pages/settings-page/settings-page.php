<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans&display=swap" rel="stylesheet">
   <link rel="stylesheet" href="/pages/settings-page/css/settings-page.css">
   <title>settings-page</title>
</head>

<body>
   <div class="wrapper">
      <div class="gray-background-container"></div>
      <header class="header">
         <a class="comeback-button" href="/index.php">
            <ion-icon name="chevron-back-outline"></ion-icon></a>
         <div class="social-list">
            <a class="tik-tok settings-top-icon" href="https://www.tiktok.com/@brainrim_app"><ion-icon name="logo-tiktok"></ion-icon></a>
            <a href="https://vk.com/club217095388" class="linkiVK settings-top-icon"><ion-icon
                  name="logo-vk"></ion-icon></a>
         </div>
      </header>
      <main class="main">
         <form action="#" class="form">
            <div class="settings-main-item">

			<div class="item-body">
				<div class="mark"><ion-icon name="log-in-outline"></ion-icon></div>
               <div class="main-item connect">
                  <a class="sign-in" href="/pages/page-registration/registration-page.php">Войти</a>
                  <a href="/pages/page-registration/registration-page.php"><img
                        src="/img/Settings/PlayGamesGamepad.svg" alt="Gamepad" class="gamepad"></a>
               </div></div>

			   <div class="item-body">
				<div class="mark"><ion-icon name="chatbubble-ellipses-outline"></ion-icon></div>
               <div class="main-item support">Поддержка</div>
			   </div>
			   <div class="support-body">
				<textarea placeholder="Опишите свою проблему" class="input-trouble"></textarea>
				<button type="submit" name="button-reg" class="submit-button">Отправить</button>
				<div class="close-support"><ion-icon name="close-outline"></ion-icon></div>
			   </div>

			   <div class="item-body">
				<div class="mark"><ion-icon name="help-circle-outline"></ion-icon></div>
               <div class="main-item developers-button">Разработчики</div>
               <div class="developers-container_body">
                  <div class="Porfiriy">Porfiriy</div>
                  <div class="Aleksey">Aleksey</div>
                  <div class="close"><ion-icon name="close-outline"></ion-icon></div>
               </div></div>

			   <div class="item-body">
				<div class="mark"><ion-icon name="language-outline"></ion-icon></div>
               <div class="main-item language-button">Язык</div>
                 <div class="language-container">
                   <div class="EN language in-dev">Английский</div>
                   <div class="RU language">Русский</div>
                   <div class="EN language in-dev">中文</div>
                   <div class="EN language in-dev">español</div>
                   <div class="EN language in-dev">français</div>
                   <div class="close-language"><ion-icon name="close-outline"></ion-icon></div>
               </div></div>

			   <div class="item-body">
				<div class="mark"><ion-icon name="newspaper-outline"></ion-icon></div>
			   <div class="main-item news">Новости</div>
			   </div>
			   <div class="news-body">
				<h1 class="news-title">Масштабное обновление</h1>
				<ul class="news-text">
					<li>Открыт бета-тест</li>
					<li>Добавлена поддержка</li>
					<li>Добавлены новости</li>
					<li>Изменён профиль</li>
					<li>Обновлены все страницы</li>
					<li>Открыт бета-тест</li>
					<li>Сделан конвертер валют</li>
					<li>Изменён конвертер валют</li>
					<li>Обновлены игры</li>
					<li>И ещё очень много чего!</li>
					
				</ul>
				<span class="date">28.03.2023</span>
				<div class="close-news"><ion-icon name="close-outline"></ion-icon></div>
			   </div>
			   
			   <div class="item-body">
				<div class="mark"><ion-icon name="information-circle-outline"></ion-icon></div>
               <div class="main-item about">О нас</div></div>
               <div class="about-us-container">
                  <span class="text-about-us">Привет! Мы (два разработчика)
                     <br>Решили создать это приложение в недалёком 2021 году.
                     <br>Мы не программисты,просто интузиасты (инди разработчики).
                     <br>Мы будем поддерживать этот проект настолько долго, насколько долго будет жить наше комьюнити, не сомневайтесь в нас.
                     <br>*И да, мы не собираем данные наших пользователей.
                     <br><br><span class="lasttxt">Будьте здоровы!</span></span>
                  <div class="close-about-us"><ion-icon name="close-outline"></ion-icon></div>
                </div>
            </div>
         </form>
      </main>
      <footer class="footer">
         <span class="version">| Beta version 1.1</span>
		 <a href="/Privacy-Policy.php" class="privacy"><ion-icon name="shield-outline"></ion-icon></a>

      </footer>
   </div>
   <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
   <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
   <script src="/pages/settings-page/settings-page.js"></script>
</body>

</html>