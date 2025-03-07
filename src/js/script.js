


const button1 = document.querySelector('.main_one_answer_one');
const elementsGroup1 = document.querySelectorAll('.man, .circul_one, .main_one_answer_one, .press, .ready');

button1.addEventListener('click', () => {
  elementsGroup1.forEach(el => {
    el.classList.toggle('active');
  });
});


const button2 = document.querySelector('.main_one_answer_two'); 
const elementsGroup2 = document.querySelectorAll('.main_one_answer_two, .circul_two, .woman, .press, .ready'); 
 
button2.addEventListener('click', () => {
  elementsGroup2.forEach(el => {
    el.classList.toggle('active');
  });
});


// const button3 = document.querySelector('.main_two_answer_one'); 
// const elementsGroup3 = document.querySelectorAll('.main_two_answer_one, .p_two_circul_one, .a_1, .press_2, .ready_2'); 
 
// button3.addEventListener('click', () => {
//   elementsGroup3.forEach(el => {
//     el.classList.toggle('active');
//   });
// });

const box = document.querySelector('.main_two_btn');

box.addEventListener('click', () => {
  box.classList.toggle('active');
});

