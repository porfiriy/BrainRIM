<?php
   include("C:\ospanel\domains\mem.com\dataBase\db.php");
   
   $errorMsg = '';
   

   if($_SERVER['REQUEST_METHOD'] === 'POST'){
         $login = trim($_POST['login']);
         $email = trim($_POST['email']);
         $pass = trim($_POST['pass']);
         $admin = 0; 

         if($login === '' || $pass === '' || $email === ''){
            $errorMsg = "Не все поля заполнены";
         }else if(mb_strlen($login, 'UTF8') < 2){
            $errorMsg = 'Логин должен быть длиннее двух символов';
         }else if(mb_strlen($login, 'UTF8') < 2){
            $errorMsg = 'Логин должен быть длиннее двух символов';
         }else{
            $existence = selectOne('users', ['email' => $email]);
            if($existence['email'] == $email){
               $errorMsg = 'Пользователь с этой почтой уже есть';
            }else{
               $pass = password_hash($pass, PASSWORD_DEFAULT);
               $post = [
                  'admin' => $admin,
                  'login' => $login,
                  'pass' => $pass,
                  'email' => $email
               ];
               $id = insert('users',$post);
               $user =selectOne('users', ['user_id' => $id]);

               $_SESSION['user_id'] = $user['user_id'];
               $_SESSION['login'] = $user['login'];
               $_SESSION['admin'] = $user['admin'];
               
               header('location: /index.php');
            }
         }
   }else{
      echo 'GET';
      $login = '';
      $email = '';
   }

     
      
     
?>