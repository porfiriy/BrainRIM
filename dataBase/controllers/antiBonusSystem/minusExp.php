<?php

$expForDowngrade['expForDowngrade'] = $_POST['expForDowngrade'];

echo json_encode($expForDowngrade);

if ($expForDowngrade == true){
   $experienceDawngradeValue = ['experience' => $experienc['experience']=0];
   updateTo('usersLvl',$_SESSION['id'],$experienceDawngradeValue);
}

?>