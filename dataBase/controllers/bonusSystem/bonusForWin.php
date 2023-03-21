<?php
include $_SERVER['DOCUMENT_ROOT']."/dataBase/surencyAndScore.php";
// This is the server-side script.

// Set the content type.
header('Content-Type: text/plain');

// Send the data back.
$sumIQ = ['sum_iq' => $IQscore['sum_iq']+30];
updateTo('IQscore',$_SESSION['id'],$sumIQ);
?>