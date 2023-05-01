//звук 
let audioClick = new Audio('/pages/main-page/sounds/mixkit-modern-click-box-check-1120.wav');
let audioNavigClick = new Audio('/pages/main-page/sounds/start-13691.mp3');


const list = document.querySelectorAll('.list');
const canvas = document.querySelector('.canvas');
const itemHomeNavigation = document.querySelector('.list-home');
const itemGamesNavigation = document.querySelector('.list-games');
const itemStoreNavigation = document.querySelector('.list-store');
const itemAnalyticNavigation = document.querySelector('.list-analytic');
const itemImproveNavigation = document.querySelector('.list-improve');
const containerGamesPage = document.querySelector('.page-games-container');
const containerImprovePage = document.querySelector('.page-improve-container');
const containerStorePage = document.querySelector('.page-store-container');
const containerEverydayTasks = document.querySelector('.everyday-tasks-container');
const containerAnalyticPage = document.querySelector('.analytic-container');
const containerGrayBackground = document.querySelector('.gray-background-container');
const everydayTasksButton = document.querySelector('.everyday-tasks-button');
const everydayTasksCloseButton = document.querySelector('.every-day-tasks-close-button');
const wordDayContainer = document.querySelector('.day-word-container');
const wordDayCloseButton = document.querySelector('.word-day-close-button');
const wordDayButton = document.querySelector('.everyday-word-button');
const settingsButton = document.querySelector('.settings')
const everydayWordButton = document.querySelector('.everyday_day-word-container');
const everydayWord = document.querySelector('.everyday_word');
const Profile = document.querySelector('.profile')
const everydayWordCloseButton = document.querySelector('.everyday_day-word-close-button');
const everydayDateButton = document.querySelector('.everyday_date-container');
const everydayDateCloseButton = document.querySelector('.everyday_date-close-button');
const everydayNewWordButton = document.querySelector('.everyday_new-word-container');
const everydayNewWordCloseButton = document.querySelector('.everyday_new-word-close-button');
const dayHistoryButton = document.querySelector('.day_history');
const newWordButton = document.querySelector('.new_word');
const ImproveScrollButton = document.querySelector('.scroll');
const InfoForTasks = document.querySelector('.info-button-body');
const InfoWordDayButton = document.querySelector('.word-day-info-button');
const InfoTasksButton = document.querySelector('.tasks-info-button');
const CloseInfoForTasks = document.querySelector('.close-every-day-tasks-info');
const EverydayInfoButton = document.querySelector('.everyday-info-button-body');
const CloseInfoForEverydayWords = document.querySelector('.close-everyday-info-button-body');
const AllLevelsButton = document.querySelector('.player-level');
const AllLevels = document.querySelector('.all-lvls-container');
const CloseAllLevels = document.querySelector('.close-levels-container');
const ConvertCurrencyButton = document.querySelector('.convert-currency-button');
const ConvertCurrencyBody = document.querySelector('.convert-currency-body');
const CloseConvertCurrency = document.querySelector('.close-currency-body');
const Offers = document.querySelector('.special-offers');
const Growth = document.querySelector('.growth-body');
const Chill = document.querySelector('.chill-body');
const GrowthButton = document.querySelector('.growth-up');
const ChillButton = document.querySelector('.chillout');
const BackFromGrowth = document.querySelector('.back-from-growth');
const BackFromChill = document.querySelector('.back-from-chill');
const MemoryContainer = document.querySelector('.memory-games-container');
const ReactionContainer = document.querySelector('.reaction-games-container');
const AttentionContainer = document.querySelector('.attention-games-container');
const IQContainer = document.querySelector('.iq-games-container');
const MemoryButton = document.querySelector('.memory-button');
const ReactionButton = document.querySelector('.reaction-button');
const AttentionButton = document.querySelector('.attention-button');
const IQButton = document.querySelector('.iq-button');
const BackFromMemory = document.querySelector('.back-from-memory');
const BackFromReaction = document.querySelector('.back-from-reaction');
const BackFromAttention = document.querySelector('.back-from-attention');
const BackFromIQ = document.querySelector('.back-from-iq');
const nextLvlValueContainer = document.querySelector('.nextLvl-value');
const bodyForExpValue = document.querySelector('.expValueFromDB');
const bodyForNextExpValue = document.querySelector('.nextLvl-value');
const buttonLevelUp = document.querySelector('.level-up');
const playerLvlCounterBody = document.querySelector('.playerLvlCounterBody');
const BonusContainer = document.querySelector('.bonus_container');
const BonusContainerContinue = document.querySelector('.bonus_container_continue');
const shopMemoneyValueBody = document.querySelector('.count-memoney');
const homeMemoneyValueBody = document.querySelector('.home-memony-body');
const homeHintsValueBody = document.querySelector('.home-hints-body');
const homeIqValueBody = document.querySelector('.home-iq-body');
const shopHintsValueBody = document.querySelector('.count-hints');

let memoneyRealtime = memoneyValue;
let eyeHintsRealtime = hintsValue;
const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');




//AJAX запрос обнуление опыта
function doAjaxExperienceDowngradeAndLevelUp() {
  $.ajax({
    url: '/dataBase/controllers/antiBonusSystem/minusExp.php',
    type: 'POST',
    dataType: "json",
    data: {

    },
    success: function (data) {
      console.log(data.expUpForModeAjax);
    },
    error: function () {
      console.log('ERROR');
    }
  })
}
//AJAX запрос на добавления подарка
function doAjaxGift() {
  let justPlug = true;
  $.ajax({
    url: '/dataBase/controllers/bonusSystem/registrGifts.php',
    type: 'POST',
    dataType: "json",
    data: {
      justPlug: justPlug,
    },
    success: function (data) {
      console.log(data);
    },
    error: function () {
      console.log('ERRORчик');
    }
  })
}

console.log(expValue);
console.log(nextLvlExpValue);
if (expValue >= nextLvlExpValue && expValue !== 0) {//если лвл достиг нужн знач.
  buttonLevelUp.style = 'display:flex;';
}
buttonLevelUp.onclick = function () {
  ShowFireworks();
  doAjaxExperienceDowngradeAndLevelUp();
  bodyForExpValue.innerHTML = 0;
  progress.style.width = 0 + "%";//обнуляет линию
  buttonLevelUp.style = 'display:none;';
  playerLvlCounterBody.innerHTML = levelValue += 1;
  bodyForNextExpValue.innerHTML = nextLvlExpValue += 50;
}
bodyForExpValue.innerHTML = expValue;//добавляют динамич знач на экран из базы данных
bodyForNextExpValue.innerHTML = nextLvlExpValue;
playerLvlCounterBody.innerHTML = levelValue;

let bar = document.querySelector("#loading-bar");
let progress = document.querySelector("#progress");

let oneProcent = nextLvlExpValue / 100;
let i = expValue / oneProcent;
progress.style.width = i + "%";//выводит линию по опыту

//отвечает за конвертаци в магазине,вывод расчётов 
let inputConvert;
function trackInput() {
  inputConvert = document.getElementById('myInput').value;
  let output = document.getElementById('output');
  output.innerHTML = inputConvert *= 8;

}

document.querySelector(".convert-button").onclick = function () {//конвертирует монеты пользователя в подсказки
  if (memoneyRealtime >= inputConvert / 8) {
    memoneyRealtime -= inputConvert / 8;
    eyeHintsRealtime += inputConvert;
  }
  shopMemoneyValueBody.innerHTML = `${memoneyRealtime}`;//динамически обновляет валюту на странице
  homeMemoneyValueBody.innerHTML = `${memoneyRealtime}`;
  shopHintsValueBody.innerHTML = `${eyeHintsRealtime}`;
  homeHintsValueBody.innerHTML = `${eyeHintsRealtime}`;
  let currencyValue = inputConvert;
  $.ajax({
    url: '/dataBase/controllers/convertCurrency/convertHints.php',
    type: 'POST',
    dataType: "json",
    data: {
      currencyValue: currencyValue,
    },
    success: function (data) {
      console.log(data);
    },
    error: function () {
      console.log('ERROR');
    }
  })
}



function ShowFireworks() {
  if (expValue >= nextLvlExpValue) { //условие вызывает фейерверк при новом левеле


    const duration = 5 * 1000,
      animationEnd = Date.now() + duration,
      defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      // since particles fall down, start a bit higher than random
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        })
      );
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        })
      );
    }, 250);

  }
}

function activeLink() {
  list.forEach((item) =>
    item.classList.remove('active'));
  this.classList.add('active');
}
list.forEach((item) =>
  item.addEventListener('click', activeLink));


//Дом
itemHomeNavigation.onclick = function () {//при нажатии на элем home в меню навигац
  containerGamesPage.style = 'display: none;'; //убирает страницу игр
  Growth.style = 'display: none;';
  Chill.style = 'display: none;';
  MemoryContainer.style = 'display: none;';
  ReactionContainer.style = 'display: none;';
  AttentionContainer.style = 'display: none;';
  IQContainer.style = 'display: none;';
  containerImprovePage.style = 'display: none;';
  containerStorePage.style = 'display: none;';
  containerAnalyticPage.style = 'display:none;';
  audioNavigClick.play();
}

//Бонус при регистрации
if (receiveGiftValue == 0) {//проверка на получение подарка и вывод на экран окна с подарком
  BonusContainer.style = 'display: flex;'
  containerGrayBackground.style = 'display: flex;'
}
BonusContainerContinue.onclick = function () { //при закрытии Бонуса
  shopMemoneyValueBody.innerHTML = `10`;
  homeIqValueBody.innerHTML = '10';
  shopHintsValueBody.innerHTML = `20`;
  homeMemoneyValueBody.innerHTML = `10`;
  homeHintsValueBody.innerHTML = `20`;
  BonusContainer.style = 'display: none;';
  containerGrayBackground.style = 'display: none;';
  doAjaxGift();

}

//Ежедневки
everydayTasksButton.onclick = function () { //при нажатии на кнопку ежедневных заданий
  containerEverydayTasks.style = 'display: block;';
  containerGrayBackground.style = 'display: block;';
  audioClick.play();
}
everydayTasksCloseButton.onclick = function () { //при закрытии ежедневных заданий
  containerEverydayTasks.style = 'display: none;';
  containerGrayBackground.style = 'display: none;';
  wordDayContainer.style = 'display: none;';
  audioClick.play();
}
InfoTasksButton.onclick = function () { //при нажатии на кнопку инфы ежедневных заданий
  InfoForTasks.style = 'display: flex; z-index:6;';
  containerGrayBackground.style = 'display: block; z-index:5;';
}
CloseInfoForTasks.onclick = function () { //при закрытии инфы ежедневных заданий
  InfoForTasks.style = 'display: none;';
  containerGrayBackground.style = 'display: block; z-index: 3;';
  audioClick.play();
}
wordDayButton.onclick = function () { //при нажатии на кнопку ежедневных фактов
  wordDayContainer.style = 'display: block; z-index: 4;';
  containerGrayBackground.style = 'display: block;';
  audioClick.play();
}
wordDayCloseButton.onclick = function () { //при закрытии ежедневных фактов
  containerGrayBackground.style = 'display: none;';
  wordDayContainer.style = 'display: none;';
  audioClick.play();
}
InfoWordDayButton.onclick = function () { //при нажатии на кнопку инфы ежедневных фактов
  EverydayInfoButton.style = 'display: flex; z-index: 6;';
  containerGrayBackground.style = 'display: block; z-index: 5;';
  wordDayContainer.style = 'display: block;';
  audioClick.play();
}
CloseInfoForEverydayWords.onclick = function () { //при закрытии инфы ежедневных фактов
  EverydayInfoButton.style = 'display: none;';
  containerGrayBackground.style = 'display: block; z-index: 3;';
  wordDayContainer.style = 'display: block; z-index: 4;';
  audioClick.play();
}
everydayWord.onclick = function () { //при нажатии на кнопку слова дня
  containerGrayBackground.style = 'display: block;';
  everydayWordButton.style = 'display: block; z-index: 4;';
}
everydayWordCloseButton.onclick = function () { //при закрытии слова дня
  everydayWordButton.style = 'display: none';
}

dayHistoryButton.onclick = function () { //при нажатии на кнопку исторической даты
  containerGrayBackground.style = 'display: block;';
  everydayDateButton.style = 'display: block; z-index: 4;';
}
everydayDateCloseButton.onclick = function () { //при закрытии инфы исторической даты
  everydayDateButton.style = 'display: none';
}

newWordButton.onclick = function () { //при нажатии на кнопку нового английского слова
  containerGrayBackground.style = 'display: block;';
  everydayNewWordButton.style = 'display: block; z-index: 4;';
}
everydayNewWordCloseButton.onclick = function () { //при закрытии нового английского слова
  everydayNewWordButton.style = 'display: none';
}

//Игры
GrowthButton.onclick = function () { //при нажатии на кнопку развития
  Growth.style = 'display: block;';
}
ChillButton.onclick = function () { //при нажатии на кнопку отдыха
  Chill.style = 'display: block;';
}
BackFromGrowth.onclick = function () { //Кнопка назад в развитии
  Chill.style = 'display:none;';
  Growth.style = 'display:none;';
}
BackFromChill.onclick = function () { //Кнопка назад в отдыхе
  Chill.style = 'display:none;';
}

MemoryButton.onclick = function () { //Кнопка игр Памяти
  MemoryContainer.style = 'display:block;';
}
ReactionButton.onclick = function () { //Кнопка игр Реакции
  ReactionContainer.style = 'display:block;';
}
AttentionButton.onclick = function () { //Кнопка игр Внимательности
  AttentionContainer.style = 'display:block;';
}
IQButton.onclick = function () { //Кнопка игр Интеллекта
  IQContainer.style = 'display:block;';
}

BackFromMemory.onclick = function () { //Кнопка назад в играх Памяти
  MemoryContainer.style = 'display:none;';
}
BackFromReaction.onclick = function () { //Кнопка назад в играх Реакции
  ReactionContainer.style = 'display:none;';
}
BackFromAttention.onclick = function () { //Кнопка назад в играх Внимательности
  AttentionContainer.style = 'display:none;';
}
BackFromIQ.onclick = function () { //Кнопка назад в играх Интеллекта
  IQContainer.style = 'display:none;';
}

itemGamesNavigation.onclick = function () { //при нажатии на кнопку Games
  containerGamesPage.style = 'display: block;';
  containerImprovePage.style = 'display: none;';
  containerStorePage.style = 'display: none;';
  containerAnalyticPage.style = 'display:none;';
  //audioNavigClick.play();
}

//Достижения
itemImproveNavigation.onclick = function () { //при нажатии на кнопку Improve
  containerImprovePage.style = 'display: block;';
  containerGamesPage.style = 'display: none;'; //убирает страницу игр
  containerStorePage.style = 'display: none;';
  containerAnalyticPage.style = 'display:none;';
  audioNavigClick.play();
}

//Скролл у ачивок
ImproveScrollButton.onclick = function scrollToDown() {
  document.getElementById('Improve-container').scrollTo(9999, 9999);
}
ImproveScrollButton.onclick = function scrollToTop() {
  document.getElementById('Improve-container').scrollTo(0, 0);
};
//Уровни
AllLevelsButton.onclick = function () { // Открыть уровни
  AllLevels.style = 'display: flex;';
  audioClick.play();
}
CloseAllLevels.onclick = function () { //Закрыть уровни
  AllLevels.style = 'display: none;';
  audioClick.play();
}

ConvertCurrencyButton.onclick = function () { //Кнопка конверт валюты
  audioClick.play();
}

//Магазин
itemStoreNavigation.onclick = function () { //при нажатии на кнопку Store
  containerStorePage.style = 'display: block;';
  containerGamesPage.style = 'display: none;'; //убирает страницу игр
  containerImprovePage.style = 'display: none;';
  containerAnalyticPage.style = 'display:none;';
  audioNavigClick.play();
}
setInterval(() => { //время
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;
  hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;
})

ConvertCurrencyButton.onclick = function () { //Конвертировать валюту - при нажатии на кнопку
  ConvertCurrencyBody.style = 'display: flex; z-index:4;';
  containerGrayBackground.style = 'display: block; z-index:3;';
}
CloseConvertCurrency.onclick = function () { //Конвертировать валюту - при закрытии
  ConvertCurrencyBody.style = 'display: none;';
  containerGrayBackground.style = 'display: none;';
}
Offers.onclick = function scrollToDown() { //Скролл до спец предложений
  containerStorePage.scrollTo(9999, 9999);
}

//Аналитика
itemAnalyticNavigation.onclick = function () {
  containerAnalyticPage.style = 'display: block;';
  containerGamesPage.style = 'display: none;'; //убирает страницу игр
  containerImprovePage.style = 'display: none;';
  containerStorePage.style = 'display: none;';
  audioNavigClick.play();
}

settingsButton.onclick = function () {
  audioClick.play();
}
Profile.onclick = function () {
  audiomeme.play();
}







// //Платёжка Google
// function onGooglePayLoaded() {
// 	const googlePayClient =
// 	new google.payments.api.PaymentsClient({
// 	  environment:'TEST'
// 	});
// }

// const clientConfiguration = {
// 	apiVersion: 2,
// 	apiVersionMinor: 0,
// 	allowedPaymentMethods: [cardPaymentMethod]
// };

// googlePayClient.isReadyToPay(clientConfiguration)
//  .then(function(response) {
//   if(response.result) {
// //Добавляет гугл пэй кнопку
//   }
// }).catch(function(err) {
//  //Ошибка в консоль разрабов
// });

// googlePayClient.createButton({
// 	// defaults to black if default or omitted
// 	buttonColor:'default',
// 	// defaults to long if omitted
// 	buttonType:'long',
// 	onClick: onGooglePaymentsButtonClicked
// });

// const paymentDataRequest = Object.assign({},
// 	clientConfiguration);

// 	paymentDataRequest.transactionInfo = {
// 		totalPriceStatus:'FINAL',
// 		totalPrice:'123.45',
// 		currencyCode:'USD',
// 	};
// 	paymentDataRequest.merchantInfo = {
// 		merchantId:'BCR2DN4T7LDKXGJW',
// 		merchantName:'SFH Company'
// 	};

// 	//Информация при оплате
// 	const cardPaymentMethod = {
// 		type: 'CARD',
// 		tokenizationSpecification: tokenizationSpec,
// 		parameters: {
// 			allowedCardNetworks: ['VISA','AMEX'],
// 			allowedAuthMethods: ['PAN_ONLY','CRYPTOGRAM_3DS'],
// 			billingAddressRequired: true,
// 			billingAddressParameters: {
// 				format: 'FULL',
// 				phoneNumberRequired: true
// 			}
// 		}
// 	};


// googlePayClient
// .loadPaymentData(paymentDataRequest)
// .then(function(paymentData) {
// 	processPayment(paymentData);
// }).catch(function(err) {
// 	//Ошибка в консоль разрабов
//    });
