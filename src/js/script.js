


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




