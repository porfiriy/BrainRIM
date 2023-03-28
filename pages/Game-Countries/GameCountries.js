'use strict'
let audioStart = new Audio('/sound/start-game.mp3');

//правильные-неправильные ответы
let rightAnswer = 0;
let wrongAnswer = 0;
// переменные с кнопками 
let button1 = document.querySelector('.button-count__1');
let button2 = document.querySelector('.button-count__2');
let button3 = document.querySelector('.button-count__3');
let button4 = document.querySelector('.button-count__4');
let button5 = document.querySelector('.button-count__5');
let button6 = document.querySelector('.button-count__6');
let arrButtons = [button1, button2, button3, button4, button5, button6];
let numbrButtnsForMode;



//переменные с иконками флагов изи мод
let SwitzerlandImg = "/pages/Game-Countries/img/easy-mode/ch.png";
let ArmeniaImg = "/pages/Game-Countries/img/easy-mode/am.png";
let AustriaImg = "/pages/Game-Countries/img/easy-mode/at.png";
let BrazilImg = "/pages/Game-Countries/img/easy-mode/br.png";
let NorwayImg = "/pages/Game-Countries/img/easy-mode/no.png";
let BelarusImg = "/pages/Game-Countries/img/easy-mode/by.png";
let ChinaImg = "/pages/Game-Countries/img/easy-mode/cn.png";
let GermanyImg = "/pages/Game-Countries/img/easy-mode/de.png";
let DenmarkImg = "/pages/Game-Countries/img/easy-mode/dk.png";
let EstoniaImg = "/pages/Game-Countries/img/easy-mode/ee.png";
let FinlandImg = "/pages/Game-Countries/img/easy-mode/fi.png";
let FranceImg = "/pages/Game-Countries/img/easy-mode/fr.png";
let BritishImg = "/pages/Game-Countries/img/easy-mode/gb.png";
let GreeceImg = "/pages/Game-Countries/img/easy-mode/gr.png";
let IsrailImg = "/pages/Game-Countries/img/easy-mode/il.png";
let IndiaImg = "/pages/Game-Countries/img/easy-mode/in.png";
let ItalyImg = "/pages/Game-Countries/img/easy-mode/it.png";
let JapanImg = "/pages/Game-Countries/img/easy-mode/jp.png";
let KoreaImg = "/pages/Game-Countries/img/easy-mode/kr.png";
let KZImg = "/pages/Game-Countries/img/easy-mode/kz.png";
let LatviaImg = "/pages/Game-Countries/img/easy-mode/lv.png";
let NewZilandImg = "/pages/Game-Countries/img/easy-mode/nz.png";
let PolandImg = "/pages/Game-Countries/img/easy-mode/pl.png";
let PortugalImg = "/pages/Game-Countries/img/easy-mode/pt.png";
let RussianImg = "/pages/Game-Countries/img/easy-mode/ru.png";
let SwedenImg = "/pages/Game-Countries/img/easy-mode/se.png";
let SyriaImg = "/pages/Game-Countries/img/easy-mode/sy.png";
let TurkeyImg = "/pages/Game-Countries/img/easy-mode/tr.png";
let USAImg = "/pages/Game-Countries/img/easy-mode/um.png";
let CanadaImg = "/pages/Game-Countries/img/easy-mode/ca.png";
let AustraliaImg = "/pages/Game-Countries/img/easy-mode/hm.png";
let IraqImg = "/pages/Game-Countries/img/easy-mode/iq.png";
let IranImg = "/pages/Game-Countries/img/easy-mode/ir.png";
let SerbiaImg = "/pages/Game-Countries/img/easy-mode/rs.png";

let arrCounrysImgEasy = [SwitzerlandImg, ArmeniaImg, AustriaImg, BrazilImg, NorwayImg, BelarusImg, ChinaImg, GermanyImg, DenmarkImg, EstoniaImg, FinlandImg, FranceImg, BritishImg, GreeceImg, IsrailImg, IndiaImg, ItalyImg, JapanImg, KoreaImg, KZImg, LatviaImg, NewZilandImg, PolandImg, PortugalImg, RussianImg, SwedenImg, SyriaImg, TurkeyImg, USAImg, CanadaImg, AustraliaImg, IraqImg, IranImg, SerbiaImg];
let arrCounrysTextEasy = ['Швейцария', 'Армения', 'Австрия', 'Бразилия', 'Норвегия', 'Беларусь', 'Китай', 'Германия', 'Дания', 'Эстония', 'Финляндия', 'Франция', 'Британия', 'Греция', 'Израиль', 'Индия', 'Италия', 'Япония', 'Корея', 'Казахстан', 'Латвия', 'Нов.Зеландия', 'Польша', 'Португалия', 'Россия', 'Швеция', 'Сирия', 'Турция', 'США', 'Канада', 'Австралия', 'Ирак', 'Иран', 'Сербия'];




//переменные с иконками флагов нормал мод
let ArabEmiratesImg = "/pages/Game-Countries/img/normal-mode/ae.png";
let AfganistanImg = "/pages/Game-Countries/img/normal-mode/af.png";
let AngolaImg = "/pages/Game-Countries/img/normal-mode/ao.png";
let ArgentinImg = "/pages/Game-Countries/img/normal-mode/ar.png";
let AzerbaijanImg = "/pages/Game-Countries/img/normal-mode/az.png";
let KamerunImg = "/pages/Game-Countries/img/normal-mode/cm.png";
let BelgiumImg = "/pages/Game-Countries/img/normal-mode/be.png";
let BalgarImg = "/pages/Game-Countries/img/normal-mode/bg.png";
let BoliviaImg = "/pages/Game-Countries/img/normal-mode/bo.png";
let BagamesImg = "/pages/Game-Countries/img/normal-mode/bs.png";
let ChiliImg = "/pages/Game-Countries/img/normal-mode/cl.png";
let ColumbiaImg = "/pages/Game-Countries/img/normal-mode/co.png";
let CostaRicaImg = "/pages/Game-Countries/img/normal-mode/cr.png";
let CubaImg = "/pages/Game-Countries/img/normal-mode/cu.png";
let CyprImg = "/pages/Game-Countries/img/normal-mode/cy.png";
let ChehiaImg = "/pages/Game-Countries/img/normal-mode/cz.png";
let DominicanImg = "/pages/Game-Countries/img/normal-mode/do.png";
let AlgirImg = "/pages/Game-Countries/img/normal-mode/dz.png";
let EcuadorImg = "/pages/Game-Countries/img/normal-mode/ec.png";
let EgyptImg = "/pages/Game-Countries/img/normal-mode/eg.png";
let SpainImg = "/pages/Game-Countries/img/normal-mode/es.png";
let ScotlandImg = "/pages/Game-Countries/img/normal-mode/gb-sct.png";
let GruziaImg = "/pages/Game-Countries/img/normal-mode/ge.png";
let GrinlandImg = "/pages/Game-Countries/img/normal-mode/gl.png";
let HarvatImg = "/pages/Game-Countries/img/normal-mode/hr.png";
let KeniaImg = "/pages/Game-Countries/img/normal-mode/ke.png";
let MadagascarImg = "/pages/Game-Countries/img/normal-mode/mg.png";
let MakedonImg = "/pages/Game-Countries/img/normal-mode/mk.png";
let NigerImg = "/pages/Game-Countries/img/normal-mode/ng.png";
let NiderlandImg = "/pages/Game-Countries/img/normal-mode/nl.png";
let PanamaImg = "/pages/Game-Countries/img/normal-mode/pa.png";
let PacestanImg = "/pages/Game-Countries/img/normal-mode/pk.png";
let YemenImg = "/pages/Game-Countries/img/normal-mode/ye.png";

let arrCounrysImgNormal = [ArabEmiratesImg, AfganistanImg, AngolaImg, ArgentinImg, AzerbaijanImg, KamerunImg, BelgiumImg, BalgarImg, BoliviaImg, BagamesImg, ChiliImg, ColumbiaImg, CostaRicaImg, CubaImg, CyprImg, ChehiaImg, DominicanImg, AlgirImg, EcuadorImg, EgyptImg, SpainImg, ScotlandImg, GruziaImg, GrinlandImg, HarvatImg, KeniaImg, MadagascarImg, MakedonImg, NigerImg, NiderlandImg, PanamaImg, PacestanImg, YemenImg];
let arrCounrysTextNormal = ['Араб. Эмираты', 'Афганистан', 'Ангола', 'Аргентина', 'Азербайджан', ' Камерун', 'Бельгия', 'Балгария', 'Боливия', 'Багамские ост.', 'Чили', 'Колумбия', 'Коста-Рика', 'Куба', 'Кипр', 'Чехия', 'Доминикан', 'Алжир', 'Эквадор', 'Египет', 'Испания', 'Шотландия', 'Грузия', 'Гренландия', 'Харватия', 'Кения', 'Мадагаскар', 'Македония', 'Нигерия', 'Нидерланды', 'Панама', 'Пакистан', 'Емен'];



// меню результатов 
let menuResultsContainer = document.querySelector(".container-results-menu");
let menuResultsRedRectangle = document.querySelector(".box-informations-orange__rectangle-red");
let menuResultsGreenRectangle = document.querySelector(".box-informations-orange__rectangle-green");
let menuResultsCercleProcents = document.querySelector('.box-informations-orange__circle-procent-results');
let menuResultsTimer = document.querySelector(".box-informations-orange__time");

let settings = document.querySelector(".pop-up__container");
let comeback = document.querySelector(".pop-up__container2");
let restart = document.querySelector(".pop-up__container3");

let ModeTimeAnim;
let chosenGameMode; //в неё записываем режим после выбора режима пользователем
let arrGameMode;//в неё записываем массив с флагами
let arrTextGameMode;
let randomNumberBtn;
let arrAlredyExistNumbrs = [];
let conditionPress = false;//при нажатии на кнопку будет true
let countRightBody = document.querySelector(".count-right");
let countWrongBody = document.querySelector(".count-wrong");
let hardModeButtonsContainer = document.querySelector('.button-hardMode-container');
let arrayRandomNumbers = [];//массив рандобных чисел для блоков без повторения
let flagsBody = document.querySelector(".flags-body-img");
let deadeLine = document.getElementById("deadeLine");
let easyModeButton = document.querySelector('.easy-mode-button');
let normalModeButton = document.querySelector('.normal-mode-button');
let hardModeButton = document.querySelector('.hard-mode-button');
let crazyModeButton = document.querySelector('.crazy-mode-button');
let modeOptionsContainer = document.querySelector('.mode-options-container');
let gameMode = document.querySelector('.game-mode');
let gameModeStyleEasy = document.querySelector('.game-mode-style-easy');
const startButtonContainer = document.querySelector('.button-start-container');
const startButtonGameMode = document.querySelector('.start-menu__game-mode');
const victoryLooseScreenContainer = document.querySelector('.victory-loose-screen-container');
const victoryLooseScreenGameMode = document.querySelector('.victory-loose-screen__mode');
const victoryLooseScreenWinLooseText = document.querySelector('.victory-loose-screen__win-loose-text');
const victoryLooseScreenResultsButton = document.querySelector('.victory-loose-screen__results-button');
const resultsMenuContainer = document.querySelector('.results-menu-container');
const resultsMenuMode = document.querySelector('.results-menu__mode');
const resultsMenuWinLooseItem = document.querySelector('.items-container__win-loose-item');
const resultsMenuTimeItem = document.querySelector('.items-container__time-item');
const resultsMenuOpenedCardsItem = document.querySelector('.opened-cards');
const resultsMenuDoneCardsItem = document.querySelector('.items-container__done-cards-item');
const resultsMenuWinLooseIcon = document.querySelector('.items-container__win-loose-icon');
const resultsMenuTime = document.querySelector('.results-menu__time');
const resultsMenuIqItem = document.querySelector('.items-container__iq-item');
const resultsMenuExpItem = document.querySelector('.items-container__exp-item');


//z
//AJAX запрос на сервер для добавления в базу данных инфы
async function doAjaxLoose() {
   try {
      const url = await fetch('/dataBase/controllers/bonusSystem/bonusForLoose.php');
      const data = await url.text();
      console.log(data);
   } catch (error) {
      console.log('Error:' + error);
   }
}

//AJAX запрос на сервер для добавления в базу данных инфы при выйгрыше
async function doAjaxWin() {
   try {
      const url = await fetch('/dataBase/controllers/bonusSystem/bonusForWin.php');
      const data = await url.text();
      console.log(data);
   } catch (error) {
      console.log('Error:' + error);
   }
}
//z

//при нажатии на отмену вспл окна настройки 
document.querySelector('.pop-up__cancel').onclick = function () {
   settings.style = 'visibility:hidden;';

};
//при нажатии на иконку настроек
document.querySelector('.linkToTheSettings').onclick = function () {

   settings.style = 'visibility:visible;';

};

//при нажатии на отмену вспл окна назад
document.querySelector('.pop-up__cancel2').onclick = function () {
   comeback.style = 'visibility:hidden;';

};
//при нажатии на иконку назад
document.querySelector('.comeback-button').onclick = function () {

   comeback.style = 'visibility:visible;';

};

//при нажатии на отмену вспл окна рестарт
document.querySelector('.pop-up__cancel3').onclick = function () {
   restart.style = 'visibility:hidden;';

};
//при нажатии на иконку рестарт
document.querySelector('.linkToTheRestart').onclick = function () {

   restart.style = 'visibility:visible;';

};

easyModeButton.onclick = function () {//при нажатии на изи кнопку сложности
   chosenGameMode = 'easy';
   modeOptionsContainer.style = 'display: none;';
   gameMode.innerHTML = 'Легко';
   gameMode.classList.add('game-mode-style-easy');
   ModeTimeAnim = '30';
   startButtonContainer.style = 'display: block;'
   startButtonGameMode.innerHTML = 'Легко';
   startButtonGameMode.classList.add('start-menu__easy-game-mode');
   victoryLooseScreenGameMode.classList.add('victory-loose-screen__easy-mode');
   victoryLooseScreenGameMode.innerHTML = 'Легко';
   resultsMenuMode.classList.add('results-menu__easy-mode');
   resultsMenuMode.innerHTML = 'Легко';
   numbrButtnsForMode = 3;
}
normalModeButton.onclick = function () {
   chosenGameMode = 'normal';
   modeOptionsContainer.style = 'display: none;';
   gameMode.innerHTML = 'Нормально';
   gameMode.classList.add('game-mode-style-normal');
   ModeTimeAnim = '25';
   startButtonContainer.style = 'display: block;'
   startButtonGameMode.innerHTML = 'Нормально';
   startButtonGameMode.classList.add('start-menu__normal-game-mode');
   victoryLooseScreenGameMode.classList.add('victory-loose-screen__normal-mode');
   victoryLooseScreenGameMode.innerHTML = 'Нормально';
   resultsMenuMode.classList.add('results-menu__normal-mode');
   resultsMenuMode.innerHTML = 'Нормально';
   numbrButtnsForMode = 3;
}
hardModeButton.onclick = function () {
   chosenGameMode = 'hard';
   modeOptionsContainer.style = 'display: none;';
   gameMode.innerHTML = 'Сложно';
   gameMode.classList.add('game-mode-style-hard');
   ModeTimeAnim = '22';
   startButtonContainer.style = 'display: block;'
   startButtonGameMode.innerHTML = 'Сложно';
   startButtonGameMode.classList.add('start-menu__hard-game-mode');
   victoryLooseScreenGameMode.classList.add('victory-loose-screen__hard-mode');
   victoryLooseScreenGameMode.innerHTML = 'Сложно';
   resultsMenuMode.classList.add('results-menu__hard-mode');
   resultsMenuMode.innerHTML = 'Сложно';
   hardModeButtonsContainer.style = "display:flex;";
   numbrButtnsForMode = 5;
}
crazyModeButton.onclick = function () {
   chosenGameMode = 'crazy';
   modeOptionsContainer.style = 'display: none;';
   gameMode.innerHTML = 'Безумно';
   gameMode.classList.add('game-mode-style-crazy');
   ModeTimeAnim = '20';
   startButtonContainer.style = 'display: block;'
   startButtonGameMode.innerHTML = 'Безумно';
   startButtonGameMode.classList.add('start-menu__crazy-game-mode');
   victoryLooseScreenGameMode.classList.add('victory-loose-screen__crazy-mode');
   victoryLooseScreenGameMode.innerHTML = 'Безумно';
   resultsMenuMode.classList.add('results-menu__crazy-mode');
   resultsMenuMode.innerHTML = 'Безумно';
   hardModeButtonsContainer.style = "display:flex;";
   numbrButtnsForMode = 5;
}
victoryLooseScreenResultsButton.onclick = function () {
   resultsMenuContainer.style = 'display:block;'
}

function checkPressButton(numberButton) {
   if (arrButtons[randomNumberBtn] == numberButton) {
      rightAnswer += 1;
      countRightBody.innerHTML = rightAnswer;
      if (wrongAnswer > 0 && rightAnswer + wrongAnswer == 10) {
         showLooseMessage();
      }
      if (rightAnswer == 10) {
         showWinMessage();
      }
   } else {
      wrongAnswer += 1;
      countWrongBody.innerHTML = wrongAnswer;
      if (wrongAnswer > 0 && rightAnswer + wrongAnswer == 10) {
         showLooseMessage();
      }
      if (rightAnswer == 10) {
         showLooseMessage();
      }
   }
   showFlags();
}

button1.onclick = function () {
   conditionPress = true;
   checkPressButton(button1);

}
button2.onclick = function () {
   conditionPress = true;
   checkPressButton(button2);
}
button3.onclick = function () {
   conditionPress = true;
   checkPressButton(button3);
}
button4.onclick = function () {
   conditionPress = true;
   checkPressButton(button4);
}
button5.onclick = function () {
   conditionPress = true;
   checkPressButton(button5);
}
button6.onclick = function () {
   conditionPress = true;
   checkPressButton(button6);
}

function ChoiseGameModeArray() {

   if (chosenGameMode == 'easy') {
      arrGameMode = arrCounrysImgEasy;
      arrTextGameMode = arrCounrysTextEasy;
   } else if (chosenGameMode == 'normal') {
      arrGameMode = arrCounrysImgNormal;
      arrTextGameMode = arrCounrysTextNormal;
   }

}
function randomLoopForArr() {
   const range = 25;//до какого значения ранд числа
   const count = 15;      // кол-во требуемых чисел
   let m = {};

   for (let i = 0; i < count; ++i) {
      let r = Math.floor(Math.random() * (range - i));
      arrayRandomNumbers.push(((r in m) ? m[r] : r) + 1);
      let l = range - i - 1;
      m[r] = (l in m) ? m[l] : l;
   }
   console.log(arrayRandomNumbers);

}

function showFlags() {

   if (conditionPress == true) {
      arrayRandomNumbers = [];
      randomLoopForArr();
      for (let i = 0; i < arrAlredyExistNumbrs.length; i++) {
         if (arrayRandomNumbers[0] == arrAlredyExistNumbrs[i]) {
            arrayRandomNumbers = [];
            randomLoopForArr();
            console.log('уже есть ,нужен новый');
         }
      }
      conditionPress = false;
   }





   //анимация проигриша 
   function showLooseMessage() {
      deadeLine.style = "animation-play-state: paused ";
      victoryLooseScreenContainer.style = 'display:flex;';
      victoryLooseScreenWinLooseText.innerHTML = 'Поражение!'
      victoryLooseScreenWinLooseText.classList.add('loose-text-red');
      resultsMenuWinLooseItem.innerHTML = 'Поражение!';
      resultsMenuWinLooseItem.classList.add('items-container__win-loose-item-red');
      resultsMenuWinLooseIcon.innerHTML = '<ion-icon name="thumbs-down-outline"></ion-icon>';
      resultsMenuOpenedCardsItem.innerHTML = `${rightAnswer}`;
      resultsMenuDoneCardsItem.classList.add('items-container__done-cards-item-red');
      resultsMenuTimeItem.classList.add('items-container__time-item-red');
      doAjaxLoose();//z //вызов запроса в БД
   }
   function showWinMessage() {
      deadeLine.style = "animation-play-state: paused ";
      victoryLooseScreenContainer.style = 'display:flex;';
      victoryLooseScreenWinLooseText.innerHTML = 'Победа!'
      victoryLooseScreenWinLooseText.classList.add('victory-text-green');
      resultsMenuWinLooseItem.innerHTML = 'Победа!'
      resultsMenuWinLooseItem.classList.add('items-container__win-loose-item-green');
      resultsMenuWinLooseIcon.innerHTML = '<ion-icon name="thumbs-up-outline"></ion-icon>';
      resultsMenuOpenedCardsItem.innerHTML = '20';
      resultsMenuDoneCardsItem.classList.add('items-container__done-cards-item-green');
      resultsMenuTimeItem.classList.add('items-container__time-item-green');
      resultsMenuIqItem.innerHTML = '+50';
      resultsMenuExpItem.innerHTML = '+20';
      doAjaxWin();
   }
   deadeLine.addEventListener("animationend", showLooseMessage);


   flagsBody.innerHTML = `<img class="img-country" src="${arrGameMode[arrayRandomNumbers[0]]}">`;//добавляет флаг в html
   arrAlredyExistNumbrs.push(arrayRandomNumbers[0]);
   randomNumberBtn = Math.floor(Math.random() * numbrButtnsForMode);//рандомная кнопка с правильным ответом
   console.log(randomNumberBtn);
   let iterCount = 1;// нужно чтобы с каждой итерац менялся индекс массива
   for (let k = 0; k <= numbrButtnsForMode; k++) {
      arrButtons[k].innerHTML = arrTextGameMode[arrayRandomNumbers[iterCount]];
      iterCount++;
   }
   arrButtons[randomNumberBtn].innerHTML = arrTextGameMode[arrayRandomNumbers[0]];//вставляет правильный ответ текст в кнопку

}


function game() {
   randomLoopForArr();
   ChoiseGameModeArray();
   showFlags();
   deadeLine.style = `animation: deadeLine ${ModeTimeAnim}s linear `;//запуск анимации,c переменной под каждый мод игы
}

//активация кнопки старт при нажатии
const BUTTON_START = document.querySelector('.button-start');
BUTTON_START.onclick = function () {
   document.querySelector('.start-menu').classList.add('activated');
   BUTTON_START.classList.add('activated');
   if (BUTTON_START.classList.contains('activated')) {
      audioStart.play();
      //при нажатии кнопки старт запускается функция game и начинаеться игра
      game();
   }
}