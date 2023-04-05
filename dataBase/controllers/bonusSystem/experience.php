<?php
include ( $_SERVER['DOCUMENT_ROOT'] . "/dataBase/surencyAndScore.php");
// This is the server-side script.

// Set the content type.
header('Content-Type: text/plain');

$ajaxValue['expUpForModeAjax'] = $_POST['expUpForModeAjax'];
$expForDowngrade['expForDowngrade'] = $_POST['expForDowngrade'];

echo json_encode($ajaxValue);
echo json_encode($expForDowngrade);

$experienceValue = ['experience' => $experienc['experience']+$ajaxValue['expUpForModeAjax']];
updateTo('usersLvl',$_SESSION['id'],$experienceValue);

if ($expForDowngrade = true){
   $experienceValue = ['experience' => $experienc['experience']=0];
   updateTo('usersLvl',$_SESSION['id'],$experienceValue);
}
// Send the data back.

?>