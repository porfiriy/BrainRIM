<?php  
       
      include("C:\ospanel\domains\mem.com\dataBase\controllers\users.php"); 
?>

      

<!DOCTYPE html>
<html lang="en">
<head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width">
      <link rel="stylesheet" href="/pages/page-registration/auth-page/css/authorithation-page.css">
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

                  <form action="auth-page.php" method="post">
                        <input type="email" value="<?=$email?>"  class="form-control" name="email" id="email" placeholder="Почта">
                        <input type="password" value = "" class="form-control" id="pass" name="pass" placeholder="Пароль">
                        <a href="#" class="forgot-pass">Забыли пароль?</a>
                        <button type="submit" name="button-log" class="btn btn-send">Отправить</button>
                  </form>

                  <a href = "/pages/page-registration/registration-page.php" class="bttn-registr">Регистрация</a>
            </main>
      </div>
      
</body>
<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>


</html>