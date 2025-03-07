const button1 = document.querySelector('.seven_ans_1'); 
const elementsGroup1 = document.querySelectorAll('.seven_ans_1, .seven_circul_1, .a_1, .press, .ready'); 
 
button1.addEventListener('click', () => {
  elementsGroup1.forEach(el => {
    el.classList.toggle('active');
  });
});

const button2 = document.querySelector('.seven_ans_2'); 
const elementsGroup2 = document.querySelectorAll('.seven_ans_2, .seven_circul_2, .a_2, .press, .ready'); 
 
button2.addEventListener('click', () => {
  elementsGroup2.forEach(el => {
    el.classList.toggle('active');
  });
});

const button3 = document.querySelector('.seven_ans_3'); 
const elementsGroup3 = document.querySelectorAll('.seven_ans_3, .seven_circul_3, .a_3, .press, .ready'); 
 
button3.addEventListener('click', () => {
  elementsGroup3.forEach(el => {
    el.classList.toggle('active');
  });
});

const button4 = document.querySelector('.seven_ans_4'); 
const elementsGroup4 = document.querySelectorAll('.seven_ans_4, .seven_circul_4, .a_4, .press, .ready'); 
 
button4.addEventListener('click', () => {
  elementsGroup4.forEach(el => {
    el.classList.toggle('active');
  });
});

const button5 = document.querySelector('.seven_ans_5'); 
const elementsGroup5 = document.querySelectorAll('.seven_ans_5, .seven_circul_5, .a_5, .press, .ready'); 
 
button5.addEventListener('click', () => {
  elementsGroup5.forEach(el => {
    el.classList.toggle('active');
  });
});

const button6 = document.querySelector('.seven_ans_6'); 
const elementsGroup6 = document.querySelectorAll('.seven_ans_6, .seven_circul_6, .a_6, .press, .ready'); 
 
button6.addEventListener('click', () => {
  elementsGroup6.forEach(el => {
    el.classList.toggle('active');
  });
});