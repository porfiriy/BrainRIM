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
$dateForComparison = select('dateForComparison',['user_id' => $_SESSION['id']]);
$rusDayWord = selectAll('rusWords');
$historyFacts = selectAll('historyFacts');
$engDayWord = selectAll('engWords');

$hintsValue = $EyeScore['sum_eye_hint'];
$memoneyValue = $memany['sum_memany'];
$eyeValue = $EyeScore['sum_eye_hint'];
$levelValue = $level['Level'];
$expValue = $level['experience'];
$nextLvlExpValue = $level['nextLvlExp'];
$receiveGiftValue = $userInfo['recevedGift'];
$insertRusWord;
$rusWordsCount = $dateForComparison['rusWordsCount'];

$historyFactsCount = $dateForComparison['historyFactsCount'];
$engWordsCount = $dateForComparison['engWordsCount'];

foreach ($rusDayWord as $row) {//выбираю из массива конкретное новое слово по числу в переменной из бд которая постоянно увеличиваеться
   if ($row['id'] == $rusWordsCount) {
      $arrayInsertRusWord = $row;
    }
}
foreach ($historyFacts as $row) {//выбираю из массива конкретное новое слово по числу в переменной из бд которая постоянно увеличиваеться
   if ($row['id'] == $historyFactsCount) {
      $arrayInsertHistoryFact = $row;
    }
}
foreach ($engDayWord as $row) {//выбираю из массива конкретное новое слово по числу в переменной из бд которая постоянно увеличиваеться
   if ($row['id'] == $engWordsCount) {
      $arrayInsertEngWord = $row;
    }
}
$insertRusWord = $arrayInsertRusWord['word'];//записываю новое слово из бд

$insertHistoryFact = $arrayInsertHistoryFact['fact'];
$insertEngWord = $arrayInsertEngWord['word'];

//ежедневное изменение слов дня и т.д
// Получаем текущую дату и время
$currentDateTime = date('Y-m-d H:i:s');

// Получаем последнюю сохраненную дату и время (из базы данных или файла)
$lastDateTime = $dateForComparison['lastSaveDate']; // Пример последней сохраненной даты
// Преобразуем даты в объекты DateTime для сравнения
$current = new DateTime($currentDateTime);
$last = new DateTime($lastDateTime);

// Вычисляем разницу во времени между текущей и последней датами
$interval = $current->diff($last);

// Проверяем, прошло ли 24 часа с момента последней сохраненной даты
if ($interval->h >= 24 || $interval->d >= 1) {
    //  условие выполняется, прошло более 24 часов
    $lastDateTime = $current->format('Y-m-d');// Сохраняем текущую дату и время для будущего сравнения
    $dateParams = [
      'lastSaveDate' => $lastDateTime,
    ];
    update('dateForComparison', $_SESSION['id'],$dateParams);

    if($rusWordsCount < $historyFactsCount && $historyFactsCount < $engWordsCount){//выполняю код один за другим
      $dateVarRusWordsCountUpdate = [
         'rusWordsCount' => $rusWordsCount+1,
       ];
       update('dateForComparison', $_SESSION['id'],$dateVarRusWordsCountUpdate);//увеличиваем переменную в бд
    }else if($historyFactsCount == $rusWordsCount && $historyFactsCount < $engWordsCount) {
      $dateVarHistoryFactsCountUpdate = [
         'historyFactsCount' => $historyFactsCount + 1,
       ];
       update('dateForComparison', $_SESSION['id'],$dateVarHistoryFactsCountUpdate);//увеличиваем переменную в бд
    }else {
      $dateVarEngWordsCountUpdate = [
         'engWordsCount' => $engWordsCount+1,
       ];
       update('dateForComparison', $_SESSION['id'],$dateVarEngWordsCountUpdate);//увеличиваем переменную в бд
    }
    

}else{

}
?>