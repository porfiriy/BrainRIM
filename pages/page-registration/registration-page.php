<?php  
       
      include("C:\ospanel\domains\BrainRIM\dataBase\controllers\users.php"); 
      
?>

                 


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
	<div class="main">
		<div class="container">
			<div class="form signup">
                        <form action="registration-page.php" method="post">
				<h2>Регистрация</h2>
				<div class="alerts-container err">
                   <p><?=$errorMsg?></p>
             </div>
				<div class="inputBox">
                        <input type="text" required="required" value="<?=$login?>" class="form-control" name="login" id="login" >
					<i class="fa-regular fa-user"></i>
					<span>Логин</span>
				</div>
				<div class="inputBox">
                        <input type="email" required="required" value="<?=$email?>"  class="form-control" name="email" id="email" >
					<i class="fa-regular fa-envelope"></i>
					<span>Почта</span>
				</div>
				<div class="inputBox">
                        <input type="password" required="required" class="form-control" id="pass" name="pass" >
					<i class="fa-sharp fa-solid fa-lock"></i>
					<span>Пароль</span>
				</div>
				<div class="inputBox">
                              <input type="submit" name="button-reg" class="btn btn-send"></input>
				</div>
                        </form>
				<p>Есть аккаунт? <a href="/pages/page-registration/auth-page/auth-page.php" class="login">Войти</a></p>
			</div>
		</div>
		<footer>
			<a class="Support" href="https://vk.com/topic-217095388_49215306">Поддержка</a>
		</footer>
		<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
		<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
		<script src="/pages/page-registration/registration-page.js"></script>
		</div>
</body>

</html>