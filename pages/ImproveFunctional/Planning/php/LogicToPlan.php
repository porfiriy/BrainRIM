<?php
   
   include($_SERVER['DOCUMENT_ROOT']."/dataBase/controllers/users.php"); 

   //код для нового плана
   if($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['button-new-plan'])){
      $planNumber = htmlspecialchars($_POST['planNumber']);
      $planText = htmlspecialchars($_POST['planTextArea']);
      $planDate = htmlspecialchars($_POST['planDateValue']);
      $submitData = [
         'planNumber' => $planNumber,
         'user_id' => $_SESSION['id'],
         'planText' => $planText,
         'planDate' => $planDate
      ];
      insert('userListPlans',$submitData);
   }
      
   $userPlanFromDB = selectAll('userListPlans', ['user_id' => $_SESSION['id']]);
   $planDateFromDB = $userPlanFromDB['planDate'];
   
   $planNumberFromDB = $userPlanFromDB['planNumber'];



?>
