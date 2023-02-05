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

//Запись в БД
function insert($table,$params){
   global $pdo;
   $i = 0;
   $coll ='';
   $mask = '';
   foreach($params as $key => $value){
      if($i === 0){
         $coll = $coll."$key";
      $mask = $mask."'"."$value"."'";
      }else{
      $coll = $coll." ,$key";
      $mask = $mask.", '"."$value"."'";
      }
      $i++;
   }

   $sql = "INSERT INTO $table ($coll) VALUES ($mask);";

   //  tt($sql);
   //  exit();

   $query = $pdo->prepare($sql);
   $query->execute($params);
   dbCheckError($query);
}

$arrData = [
   'login' => 'galina',
   'pass'  => '2389uxx37r873r',
   'name'  => 'lisa'

];

insert('users',$arrData);