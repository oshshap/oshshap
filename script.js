'use strict';

const btnCalcDiscount = document.querySelector('.btn_calcDiscount');
const myPrice = document.querySelector('.my_price');
const myPercentage = document.querySelector('.my_percentage');
const result = document.querySelector('.my_result');
const messageMPrice = document.querySelector('.messageMPr');
const messageMPercentage = document.querySelector('.messageMPer');

const btnCalcDPUnit = document.querySelector('.btn_calcDPU');
const myNOFUnites = document.querySelector('.my_NumberOfUnites');
const myDPrice = document.querySelector('.my_DiscountPrice');
const myUnits = document.querySelector('.my_UPrice');
let messageNOfUnites = document.querySelector('.messageNOFU');
const messageDPrice = document.querySelector('.messageDP');

const btnReset = document.querySelector('.btn_reset');
btnCalcDiscount.addEventListener('click', function () {
  if (myPrice.value === '') {
    messageMPrice.textContent = '!!לא הוכנס מספר';
    messageMPrice.style.color = 'rgb(245, 8, 8)';
  } else {
    if (myPercentage.value === '') {
      messageMPercentage.textContent = '!!לא הוכנס מספר';
      messageMPercentage.style.color = 'rgb(245, 8, 8)';
    } else {
      const fin = myPrice.value * (1 - myPercentage.value / 100).toFixed(2);
      result.textContent = fin;
      myPrice.value = myPercentage.value = '';
      messageMPrice.textContent = ' מחיר לפני הנחה';
      messageMPrice.style.color = 'rgb(17, 15, 15)';
      messageMPercentage.textContent = ' אחוז הנחה';
      messageMPercentage.style.color = 'rgb(17, 15, 15)';
    }
  }
});

btnCalcDPUnit.addEventListener('click', function () {
  if (myDPrice.value === '') {
    messageDPrice.textContent = '!!לא הוכנס מספר';
    messageDPrice.style.color = 'rgb(245, 8, 8)';
  } else {
    if (myNOFUnites.value === '') {
      messageNOfUnites.textContent = '!!לא הוכנס מספר';
      messageNOfUnites.style.color = 'rgb(245, 8, 8)';
    } else {
      const res = (myDPrice.value / myNOFUnites.value).toFixed(2);

      myUnits.textContent = res;
      myDPrice.value = myNOFUnites.value = '';
      messageDPrice.textContent = 'מחיר המבצע';
      messageDPrice.style.color = 'rgb(17, 15, 15)';
      messageNOfUnites.textContent = messageNOfUnites.textContent;
      messageNOfUnites.style.color = 'rgb(17, 15, 15)';
    }
  }
});

btnReset.addEventListener('click', function () {
  myPrice.value = myPercentage.value = '';
  myDPrice.value = myNOFUnites.value = '';
  messageMPrice.textContent = ' מחיר לפני הנחה';
  messageMPrice.style.color = 'rgb(17, 15, 15)';
  messageMPercentage.textContent = ' אחוז הנחה';
  messageMPercentage.style.color = 'rgb(17, 15, 15)';
  messageDPrice.textContent = 'מחיר המבצע';
  messageDPrice.style.color = 'rgb(17, 15, 15)';
  messageNOfUnites.textContent = messageNOfUnites.textContent;
  messageNOfUnites.style.color = 'rgb(17, 15, 15)';
  result.textContent = 'תוצאה';
  myUnits.textContent = 'תוצאה';
});
