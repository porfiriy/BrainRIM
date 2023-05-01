<?php
include $_SERVER['DOCUMENT_ROOT']."/dataBase/surencyAndScore.php";

header('Content-Type: text/plain');

$ajaxValue['justPlug'] = $_POST['justPlug'];

echo json_encode($ajaxValue);

function updateUserTable($table, $id ,$params){
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

   $sql = "UPDATE $table SET $str WHERE id = $id;";
   $query = $pdo->prepare($sql);
   $query->execute($params);
   dbCheckError($query);
}

$sumIQ = ['sum_iq' => $IQscore['sum_iq']+10];
updateTo('IQscore',$_SESSION['id'],$sumIQ);

$sumEye = ['sum_eye_hint' => $IQscore['sum_eye_hint']+20];
updateTo('hintEye',$_SESSION['id'],$sumEye);

$sumMemoney = ['sum_memany' => $IQscore['sum_memany']+10];
updateTo('Memany',$_SESSION['id'],$sumMemoney);

$markRecevedGift = ['recevedGift' => 1];
updateUserTable('users',$_SESSION['id'],$markRecevedGift);
?>

