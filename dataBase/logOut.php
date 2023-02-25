<?php
session_start();

   unset($_SESSION['id']);
   unset($_SESSION['login']);
   unset($_SESSION['admin']);

   header('location: /index.php');
?>