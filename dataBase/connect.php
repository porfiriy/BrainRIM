<?php
$DRIVER = 'mysql';
$DBLOGIN = 'porf201v_db';
$DBPASS = 'o2gd13%I';
$DBHOST = 'localhost';
$DBDATA = 'porf201v_db';
$CHARSET = 'utf8';
$options = [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC];

try{
   $pdo = new PDO("$DRIVER:host=$DBHOST;dbname=$DBDATA;charset=$CHARSET",$DBLOGIN,$DBPASS,$options
   );
}catch(PDOException $i){
   die("Ошибка подключения к бд");
}
?>