<?php
include ( $_SERVER['DOCUMENT_ROOT'] . "/dataBase/surencyAndScore.php");
// This is the server-side script.

// Set the content type.
header('Content-Type: text/plain');

// Send the data back.
$experienceValue = ['experience' => $experienc['experience']+5];
updateTo('usersLvl',$_SESSION['id'],$experienceValue);
?>