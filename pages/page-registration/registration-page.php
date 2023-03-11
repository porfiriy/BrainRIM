<?php  
       
      include("C:\ospanel\domains\BrainRIM\dataBase\controllers\users.php"); 
      
?>

                 

<!-- <!DOCTYPE html>
<html lang="en">
<head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width">
      <link rel="stylesheet" href=" /pages/page-registration/css/registration-page.css">
      <link href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans&display=swap" rel="stylesheet">
      <title>registration-page</title>
</head>

<body>
      
      <div class="pg-registr-container">
            <header>
                  <a href="/index.php" class="scip-pg-registr">Пропустить</a>
            </header>
            <div class="pg-registr-title"><ion-icon class="reg-icon" name="id-card-outline"></ion-icon>Регистрация</div>
            <div class="alerts-container err">
                  <p><?=$errorMsg?></p>
            </div>
            <main>

                  <form action="registration-page.php" method="post">
                        <input type="text" value="<?=$login?>" class="form-control" name="login" id="login" placeholder="Логин">
                        <input type="email" value="<?=$email?>"  class="form-control" name="email" id="email" placeholder="Почта">
                        <input type="password" class="form-control" id="pass" name="pass" placeholder="Пароль">
                        <button type="submit" name="button-reg" class="btn btn-send">Отправить</button>
                  </form>

                  <a href="/pages/page-registration/auth-page/auth-page.php" class="bttn-authorisation">Авторизация</a>
            </main>
           
            </main>
      </div>
      
</body>
<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
<script src=" /pages/page-registration/registration-page.js"></script>

</html> -->

<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width">
	<link rel="stylesheet" href="/pages/page-registration/css/registration-page.css">
	<link href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans&display=swap" rel="stylesheet">
	<title>registration-page</title>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
		integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ=="
		crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<body>
	<header>
		<a class="skip-button" href="/index.php">Пропустить</a>
	</header>
		<div class="container">
			<div class="form signup">
                        <form action="registration-page.php" method="post">
				<h2>Регистрация</h2>
				<div class="inputBox">
                        <input type="text" value="<?=$login?>" class="form-control" name="login" id="login" placeholder="Логин">
					<i class="fa-regular fa-user"></i>
					<span>Логин</span>
				</div>
				<div class="inputBox">
                        <input type="email" value="<?=$email?>"  class="form-control" name="email" id="email" placeholder="Почта">
					<i class="fa-regular fa-envelope"></i>
					<span>Почта</span>
				</div>
				<div class="inputBox">
                        <input type="password" class="form-control" id="pass" name="pass" placeholder="Пароль">
					<i class="fa-sharp fa-solid fa-lock"></i>
					<span>Пароль</span>
				</div>
				<div class="inputBox">
                              <button type="submit" name="button-reg" class="btn btn-send">Зарегистрироваться</button>
				</div>
                        </form>
				<p>Есть аккаунт? <a href="/pages/page-registration/auth-page/auth-page.php" class="login">Войти</a></p>
			</div>
		</div>
		<footer>
			<a class="Support" href="https://vk.com/topic-217095388_49215306">Поддержка</a>
		</footer>
		<script>
			let login = document.querySelector('.login');
			let create = document.querySelector('.create');
			let container = document.querySelector('.container');

			login.onclick = function () {
				container.classList.add('signinForm');
			}

			create.onclick = function () {
				container.classList.remove('signinForm');
			}
		</script>
		<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
		<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
		<script src="/pages/page-registration/registration-page.js"></script>
</body>

</html>