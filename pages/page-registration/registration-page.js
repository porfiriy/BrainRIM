'use strict'

const buttonAuthorisation = document.querySelector('.bttn-authorisation');
const buttonRegistration = document.querySelector('.bttn-registr');
const pgRegistrContainer = document.querySelector('.pg-registr-container');
const pgAuthorisContainer = document.querySelector('.pg-authoris-container');

//pop-up alert
const googleButton = document.querySelectorAll('.another-variants');
const alertContainer = document.querySelector('.pop-up-alert-container');

googleButton.forEach(element => {
   element.addEventListener('click', popUpAlert);
});

function popUpAlert() {
   alertContainer.style = 'display: flex;';
   setTimeout(() => {
      alertContainer.style = 'display: none;';
   }, 2000);
}

//pop-up alert