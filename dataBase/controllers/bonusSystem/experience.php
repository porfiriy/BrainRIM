<?php
include ( $_SERVER['DOCUMENT_ROOT'] . "/dataBase/surencyAndScore.php");
// This is the server-side script.

// Set the content type.
header('Content-Type: text/plain');

$ajaxValue['expUpForModeAjax'] = $_POST['expUpForModeAjax'];


echo json_encode($ajaxValue);
// Send the data back.
$experienceValue = ['experience' => $experienc['experience']+$ajaxValue['expUpForModeAjax']];
updateTo('usersLvl',$_SESSION['id'],$experienceValue);
?>