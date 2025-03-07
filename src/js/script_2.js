const button3 = document.querySelector('.main_two_answer_one'); 
const elementsGroup3 = document.querySelectorAll('.main_two_answer_one, .p_two_circul_one, .a_1, .press_2, .ready_2'); 
 
button3.addEventListener('click', () => {
  elementsGroup3.forEach(el => {
    el.classList.toggle('active');
  });
});

const button2 = document.querySelector('.main_two_answer_two'); 
const elementsGroup2 = document.querySelectorAll('.main_two_answer_two, .p_two_circul_two, .a_2, .press_2, .ready_2'); 
 
button2.addEventListener('click', () => {
  elementsGroup2.forEach(el => {
    el.classList.toggle('active');
  });
});

const button1 = document.querySelector('.main_two_answer_three'); 
const elementsGroup1 = document.querySelectorAll('.main_two_answer_three, .p_two_circul_three, .a_3, .press_2, .ready_2'); 
 
button1.addEventListener('click', () => {
  elementsGroup1.forEach(el => {
    el.classList.toggle('active');
  });
});

const button4 = document.querySelector('.main_two_answer_four'); 
const elementsGroup4 = document.querySelectorAll('.main_two_answer_four, .p_two_circul_four, .a_4, .press_2, .ready_2'); 
 
button4.addEventListener('click', () => {
  elementsGroup4.forEach(el => {
    el.classList.toggle('active');
  });
});