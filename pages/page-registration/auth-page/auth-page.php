<?php  
       
      include("C:\ospanel\domains\BrainRIM\dataBase\controllers\users.php"); 
?>

      

<!DOCTYPE html>
<html lang="en">
<head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width">
      <link rel="stylesheet" href="\pages\page-registration\auth-page\css\authorithation-page.css">
      <link href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans&display=swap" rel="stylesheet">
      <title>authorithation-page</title>
</head>

<body>
      
      <div class="pg-authoris-container">
            <header>
                  <a href="/index.php" class="scip-pg-registr">Пропустить</a>
            </header>
            <div class="pg-registr-title"><ion-icon class="reg-icon" name="id-card-outline"></ion-icon>Авторизация</div>
            <div class="alerts-container err">
                  <p><?=$errorMsg?></p>
            </div>
            <main>
            <div class="form signin">
				<form action="auth-page.php" method="post">
				<h2>Авторизация</h2>
				<div class="alerts-container err">
					<p>
						<?=$errorMsg?>
					</p>
				</div>
				<div class="inputBox">
					<input type="email" value="<?=$email?>" class="form-control" name="email" id="email" placeholder="Почта">
					<i class="fa-regular fa-user"></i>
					<span>Логин</span>
				</div>
				<div class="inputBox">
					<input type="password" value="" class="form-control" id="pass" name="pass" placeholder="Пароль">
					<i class="fa-sharp fa-solid fa-lock"></i>
					<span>Пароль</span>
				</div>
				<div class="inputBox">
					<input type="submit" value="Вход">
				</div>
			</form>
				<p>Не зарегистрированы? <a href="/pages/page-registration/registration-page.php" class="create">Создать
						аккаунт</a></p>
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
            </main>
      </div>
      
</body>
<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>


</html>