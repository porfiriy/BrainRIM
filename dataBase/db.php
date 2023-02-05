<?php 

require('connect.php');

function tt($value){
   echo '<pre>';
   print_r($value);
   echo '</pre>';
}

//Проверка выполнения запроса к БД
function dbCheckError($query){
   $errorInfo = $query->errorInfo();
   if($errorInfo[0] !== PDO::ERR_NONE) {
      echo $errorInfo[2];
      exit();
   }
   return true;
}

//Запрос на получение данных одной таблицы
function selectAll($table){
   global $pdo;
   $sql = "SELECT * FROM $table";
   $query = $pdo->prepare($sql);
   $query->execute();
   
   dbCheckError($query);
   return $query->fetchAll();
}

//Запрос на получение одной строки с выбранной таблицы
function selectOne($table){
   global $pdo;
   $sql = "SELECT * FROM $table";
   $query = $pdo->prepare($sql);
   $query->execute();
   //$sql = $sql . "LIMIT 1";

   dbCheckError($query);
   return $query->fetch();
}

tt(selectOne('users'));

