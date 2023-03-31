<?php

   $level = selectOne('usersLvl', ['user_id' => $_SESSION['id']]);
   $experienc = selectOne('usersLvl', ['user_id' => $_SESSION['id']]);

?>