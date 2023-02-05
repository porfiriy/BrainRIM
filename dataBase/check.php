<?php

   $DRIVER = 'mysql';
   $DBLOGIN = 'root';
   $DBPASS = '';
   $DBHOST = 'localhost';
   $DBDATA = 'register-db';
   $CHARSET = 'utf8';
   $options = [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION];

   try{
      $pdo = new PDO("$DRIVER:host=$DBHOST;dbname=$DBDATA;charset=$CHARSET",$DBLOGIN,$DBPASS,$options
      );
   }catch(PDOException $i){
      die("Ошибка подключения к бд");
   }
   $login = filter_var(trim($_POST['login']),
   FILTER_SANITIZE_STRING);
   $name = filter_var(trim($_POST['name']),
   FILTER_SANITIZE_STRING);
   $pass = filter_var(trim($_POST['pass']),
   FILTER_SANITIZE_STRING);
   if(mb_strlen($login) < 4 || mb_strlen($login) > 20) {
      echo 'недопустимая длинна';
      exit();
   };
   if(mb_strlen($name) < 4 || mb_strlen($name) > 20) {
      echo 'недопустимая длинна';
      exit();
   };
   if(mb_strlen($pass) < 4 || mb_strlen($pass) > 20) {
      echo 'недопустимая длинна';
      exit();
   };

   
   
   
   

   $result = $mysql->query("SELECT * FROM  `users` WHERE `login` = '$login'");
   $user = $result -> fetch_assoc();
   if(count($user) == 0) {
      echo 'вы зарегистрированны';
      $mysql->query("INSERT INTO `users` (`login`, `pass`, `name`)
   VALUES('$login' ,'$pass' ,'$name')");
   }
   else {
      echo "Такой логин существует";
      exit();
   }

   $mysql->close();
   header('Location: /');
   exit();
?>