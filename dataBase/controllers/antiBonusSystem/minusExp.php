<?php
include ( $_SERVER['DOCUMENT_ROOT'] . "/dataBase/surencyAndScore.php");

header('Content-Type: text/plain');

$levelValue = ['Level' => $level['Level']+1];
updateTo('usersLvl',$_SESSION['id'],$levelValue);

$experienceValue = ['experience' => 0];

updateTo('usersLvl',$_SESSION['id'],$experienceValue);

$nextExpValue = ['nextLvlExp' => $level['nextLvlExp']+50];
updateTo('usersLvl',$_SESSION['id'],$nextExpValue);
?>