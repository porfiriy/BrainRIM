<?php 
   include $_SERVER['DOCUMENT_ROOT']."/dataBase/controllers/users.php";

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

$level = selectOne('usersLvl', ['user_id' => $_SESSION['id']]);

$memany = select('Memany', ['user_id' => $_SESSION['id']]);
$IQscore = select('IQscore', ['user_id' => $_SESSION['id']]);
$EyeScore = select('hintEye', ['user_id' => $_SESSION['id']]);
$userInfo = select('users', ['id' => $_SESSION['id']]);

$hintsValue = $EyeScore['sum_eye_hint'];
$memoneyValue = $memany['sum_memany'];
$eyeValue = $EyeScore['sum_eye_hint'];
$levelValue = $level['Level'];
$expValue = $level['experience'];
$nextLvlExpValue = $level['nextLvlExp'];
$receiveGiftValue = $userInfo['recevedGift'];

// if($expValue == 100){
//    $LvlValue = ['Level' => $level['Level']+1];
//    updateTo('usersLvl',$_SESSION['id'],$LvlValue);
// }
//код на логику добавления денег
//$sumIQ = ['sum_iq' => $IQscore['sum_iq']+10];



?>