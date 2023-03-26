<?php  
    include($_SERVER['DOCUMENT_ROOT']."/dataBase/controllers/users.php"); 
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
            <div class="form signin">
                    <div class="alerts-container err">
                            <p><?=$errorMsg?></p>
                        </div>
                        <form action="auth-page.php" method="post">
						<h2>Авторизация</h2>
                        <div class="inputBox">
                            <input type="email" value="<?=$email?>" required="required" class="form-control" name="email" id="emailLog">
                            <i class="fa-regular fa-user"></i>
                            <span>Почта</span>
                        </div>
                        <div class="inputBox">
                        <input type="password" required="required" value = "" class="form-control" id="passLog" name="pass">
                            <i class="fa-sharp fa-solid fa-lock"></i>
                            <span>Пароль</span>
                        </div>
                        <div class="inputBox">
                        <button type="submit" name="button-log" class="btn btn-send">Войти</button>
                        </div>
                        </form>
                        <p>Не зарегистрированы? <a href="/pages/page-registration/registration-page.php" class="create">Создать аккаунт</a></p>
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