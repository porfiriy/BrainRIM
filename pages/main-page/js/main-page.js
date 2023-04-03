//звук 
// let audioClick = new Audio('/page-for-memory/pages/main-page/sounds/mixkit-modern-click-box-check-1120.wav');
let audioSwap = new Audio('');
// let audiomeme = new Audio('/page-for-memory/pages/main-page/sounds/dwayne-sound.mp3');
// let audioNavigClick = new Audio('/page-for-memory/pages/main-page/sounds/start-13691.mp3')


const list = document.querySelectorAll('.list')
const itemHomeNavigation = document.querySelector('.list-home');
const itemGamesNavigation = document.querySelector('.list-games');
const itemStoreNavigation = document.querySelector('.list-store');
const itemAnalyticNavigation = document.querySelector('.list-analytic');
const itemAchievmentsNavigation = document.querySelector('.list-achievements');
const containerGamesPage = document.querySelector('.page-games-container');
const containerAchievmentsPage = document.querySelector('.page-achievments-container');
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
const AchievmentsScrollButton = document.querySelector('.scroll');
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
const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');


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
  containerAchievmentsPage.style = 'display: none;';
  containerStorePage.style = 'display: none;';
  containerAnalyticPage.style = 'display:none;';
  audioNavigClick.play();
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
itemGamesNavigation.onclick = function () { //при нажатии на кнопку Games
  containerGamesPage.style = 'display: block;';
  containerAchievmentsPage.style = 'display: none;';
  containerStorePage.style = 'display: none;';
  containerAnalyticPage.style = 'display:none;';
  audioNavigClick.play();
}

//Достижения
itemAchievmentsNavigation.onclick = function () { //при нажатии на кнопку Achievments
  containerAchievmentsPage.style = 'display: block;';
  containerGamesPage.style = 'display: none;'; //убирает страницу игр
  containerStorePage.style = 'display: none;';
  containerAnalyticPage.style = 'display:none;';
  audioNavigClick.play();
}

//Скролл у ачивок
AchievmentsScrollButton.onclick = function scrollToDown() {
  document.getElementById('achievments-container').scrollTo(9999, 9999);
}
AchievmentsScrollButton.onclick = function scrollToTop() {
  document.getElementById('achievments-container').scrollTo(0, 0);
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
  containerAchievmentsPage.style = 'display: none;';
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
  containerAchievmentsPage.style = 'display: none;';
  containerStorePage.style = 'display: none;';
  audioNavigClick.play();
}

settingsButton.onclick = function () {
  audioClick.play();
}
Profile.onclick = function () {
  audiomeme.play();
}

function getSum(a, b) {
  if (a == b) {
    return a;
  }
  else if (a < 0) {
    while (b !== 0) {
      console.log(a += b--);
    }
  }
  else if (b < 0) {

    console.log(a + b);

  }
  else {
    console.log(a + b);
  }

}
getSum(511, 506);




// Салют
const rndColor = () => {
    const base  = Math.random() * 360 | 0;
    const color = (275 * (base / 200 | 0)) + base % 200;
    return fac => `hsl(${color}, ${(fac || 1) * 100}%, ${(fac || 1) * 60}%)`;
};

class Battery
{
    constructor(fireworks) {
        this.fireworks = fireworks;
        this.salve = [];
        this.x     = Math.random();
        this.t     = 0;
        this.tmod  = 20 + Math.random() * 20 | 0;
        this.tmax  = 500 + Math.random() * 1000;

        this._shot = salve => {
            //console.log(this.x * this.fireworks.width, salve.y); //Отображение координат фейрверка в консоль
            if (salve.y < salve.ym) {
                salve.cb = this._prepareExplosion;
            }

            salve.x += salve.mx;
            salve.y -= 0.01;

            const r = Math.atan2(-0.01, salve.mx);

            this.fireworks.engine.strokeStyle = salve.c(.7);
            this.fireworks.engine.beginPath();

            this.fireworks.engine.moveTo(
                (this.x + salve.x) * this.fireworks.width + Math.cos(r) * 4,
                salve.y * this.fireworks.height + Math.sin(r) * 4
            );

            this.fireworks.engine.lineTo(
                (this.x + salve.x) * this.fireworks.width + Math.cos(r + Math.PI) * 4,
                salve.y * this.fireworks.height + Math.sin(r + Math.PI) * 4
            );

            this.fireworks.engine.lineWidth = 3;
            this.fireworks.engine.stroke();

            // this.fireworks.engine.fillRect((this.x + salve.x) * this.fireworks.width, salve.y * this.fireworks.height, 10, 10);
        };

        this._prepareExplosion = salve => {
            salve.explosion = [];

            for (let i = 0, max = 32; i < max; i++) {
                salve.explosion.push({
                    r : 2 * i / Math.PI,
                    s : 0.5 + Math.random() * 0.5,
                    d : 0,
                    y : 0
                });
            }

            salve.cb = this._explode;
        };

        this._explode = salve => {

            this.fireworks.engine.fillStyle = salve.c();

            salve.explosion.forEach(explo => {

                explo.d += explo.s;
                explo.s *= 0.99;
                explo.y += 0.5;

                const alpha = explo.s * 2.5;
                this.fireworks.engine.globalAlpha = alpha;

                if (alpha < 0.05) {
                    salve.cb = null;
                }

                this.fireworks.engine.fillRect(
                    Math.cos(explo.r) * explo.d + (this.x + salve.x) * this.fireworks.width,
                    Math.sin(explo.r) * explo.d + explo.y + salve.y * this.fireworks.height,
                    3,
                    3
                );
            });

            this.fireworks.engine.globalAlpha = 1;
        }
    }

    pushSalve() {
        this.salve.push({
            x: 0,
            mx: -0.02 * Math.random() * 0.04,
            y: 1,
            ym: 0.05 + Math.random() * 0.5,
            c: rndColor(),
            cb: this._shot
        });
    };

    render() {

        this.t++;

        if (this.t < this.tmax && (this.t % this.tmod) === 0) {
            this.pushSalve();
        }

        let rendered = false;

        this.salve.forEach(salve => {

            if (salve.cb) {
                rendered = true;
                salve.cb(salve);
            }

        });

        if (this.t > this.tmax) {
            return rendered;
        }

        return true;
    }
}

class Fireworks
{
    constructor() {
        this.canvas = window.document.querySelector('canvas');
        this.engine = this.canvas.getContext('2d');
        this.stacks = new Map();

        this.resize();
    }

    resize() {
        this.width  = window.innerWidth;
        this.height = window.innerHeight;

        this.canvas.setAttribute('width', this.width);
        this.canvas.setAttribute('height', this.height);
    }

    clear() {
        this.engine.clearRect(0, 0, this.width, this.height);
        this.engine.fillStyle = '#ffffff00';
        this.engine.fillRect(0, 0, this.width, this.height);
    }

    addBattery() {
      const bat = new Battery(this);
      this.stacks.set(Date.now(), bat);  
    }
  
    render() {

        if (Math.random() < 0.05) {
          this.addBattery();
        }
      
        this.clear();

        this.stacks.forEach((scene, key) => {

            const rendered = scene.render();

            if (!rendered) {
                this.stacks.delete(key);
            }
        });

        requestAnimationFrame(this.render.bind(this));
    }

    run() {
        for(let i = 0; i < 5; i++) {
          this.addBattery();
        }
        window.addEventListener('resize', this.resize.bind(this));
        this.render();
    }
}

a = new Fireworks();
a.run();

//Ошибки системы лвл в консоль
console.log(expValue);





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
