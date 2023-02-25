<?php 

include 'C:\ospanel\domains\mem.com\dataBase\connect.php';

include("C:\ospanel\domains\mem.com\dataBase\controllers\users.php");


//Запрос на получение одной строки с выбранной таблицы
function select($table,$params = []){
   global $pdo;
   $sql = "SELECT * FROM $table";

   if(!empty($params)){
      $i = 0;
      foreach($params as $key => $value){
         if(!is_numeric($value)){
            $value = "'".$value."'";
         }
         if($i === 0){
            $sql = $sql . " WHERE $key = $value";
         }else{
            $sql = $sql . " AND $key = $value";
         }
         $i++;
      }
   }
   $query = $pdo->prepare($sql);
   $query->execute();

   dbCheckError($query);
   return $query->fetch();
}
//Обновление данных в таблице
function updateTo($table, $id ,$params){
   global $pdo;
   $i = 0;
   $str ='';
   foreach($params as $key => $value){
      if($i === 0){
         $str = $str.$key." = '".$value. "'";
      }else{
      
         $str = $str. ", ".$key." = '".$value."'";
      }
      $i++;
   }

   $sql = "UPDATE $table SET $str WHERE user_id = $id;";
   $query = $pdo->prepare($sql);
   $query->execute($params);
   dbCheckError($query);
}

$memany = select('Memany', ['user_id' => $_SESSION['id']]);
$IQscore = select('IQscore', ['user_id' => $_SESSION['id']]);
$EyeScore = select('hintEye', ['user_id' => $_SESSION['id']]);

//код на логику добавления денег
//$sumIQ = ['sum_iq' => $IQscore['sum_iq']+10];



?>