<?php
   $login = filter_var(trim($_POST['login']),
   FILTER_SANITIZE_STRING);
   $name = filter_var(trim($_POST['name']),
   FILTER_SANITIZE_STRING);
   $pass = filter_var(trim($_POST['pass']),
   FILTER_SANITIZE_STRING);
   if(mb_strlen($login) < 4 || mb_strlen($login) > 15) {
      echo 'недопустимая длинна';
      exit();
   };
   if(mb_strlen($name) < 4 || mb_strlen($name) > 15) {
      echo 'недопустимая длинна';
      exit();
   };
   if(mb_strlen($pass) < 4 || mb_strlen($pass) > 15) {
      echo 'недопустимая длинна';
      exit();
   };

   $mysql = new mysqli('localhost','root','','register-db');
   $mysql->query("INSERT INTO `users` (`login`, `pass`, `name`)
   VALUES('$login' ,'$pass' ,'$name')");
   
   $mysql->close();

   header('Location: /');
   exit();
?>