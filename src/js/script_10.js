const button1 = document.querySelector('.ten_ans_1'); 
const elementsGroup1 = document.querySelectorAll('.ten_ans_1, .ten_circul_1, .a_1, .press, .ready'); 
 
button1.addEventListener('click', () => {
  elementsGroup1.forEach(el => {
    el.classList.toggle('active');
  });
});

const button2 = document.querySelector('.ten_ans_2'); 
const elementsGroup2 = document.querySelectorAll('.ten_ans_2, .ten_circul_2, .a_2, .press, .ready'); 
 
button2.addEventListener('click', () => {
  elementsGroup2.forEach(el => {
    el.classList.toggle('active');
  });
});

const button3 = document.querySelector('.ten_ans_3'); 
const elementsGroup3 = document.querySelectorAll('.ten_ans_3, .ten_circul_3, .a_3, .press, .ready'); 
 
button3.addEventListener('click', () => {
  elementsGroup3.forEach(el => {
    el.classList.toggle('active');
  });
});