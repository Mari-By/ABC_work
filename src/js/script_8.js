const button1 = document.querySelector('.eight_ans-s_1'); 
const elementsGroup1 = document.querySelectorAll('.eight_ans-s_1, .press, .ready'); 
 
button1.addEventListener('click', () => {
  elementsGroup1.forEach(el => {
    el.classList.toggle('active');
  });
});

const button2 = document.querySelector('.eight_ans-s_2'); 
const elementsGroup2 = document.querySelectorAll('.eight_ans-s_2, .press, .ready'); 
 
button2.addEventListener('click', () => {
  elementsGroup2.forEach(el => {
    el.classList.toggle('active');
  });
});

const button3 = document.querySelector('.eight_ans-s_3'); 
const elementsGroup3 = document.querySelectorAll('.eight_ans-s_3, .press, .ready'); 
 
button3.addEventListener('click', () => {
  elementsGroup3.forEach(el => {
    el.classList.toggle('active');
  });
});

const button4 = document.querySelector('.eight_ans-s_4'); 
const elementsGroup4 = document.querySelectorAll('.eight_ans-s_4, .press, .ready'); 
 
button4.addEventListener('click', () => {
  elementsGroup4.forEach(el => {
    el.classList.toggle('active');
  });
});