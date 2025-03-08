const button1 = document.querySelector('.nine_ans_1'); 
const elementsGroup1 = document.querySelectorAll('.nine_ans_1, .nine_circul_1, .a_1, .press, .ready'); 
 
button1.addEventListener('click', () => {
  elementsGroup1.forEach(el => {
    el.classList.toggle('active');
  });
});

const button2 = document.querySelector('.nine_ans_2'); 
const elementsGroup2 = document.querySelectorAll('.nine_ans_2, .nine_circul_2, .a_2, .press, .ready'); 
 
button2.addEventListener('click', () => {
  elementsGroup2.forEach(el => {
    el.classList.toggle('active');
  });
});

const button3 = document.querySelector('.nine_ans_3'); 
const elementsGroup3 = document.querySelectorAll('.nine_ans_3, .nine_circul_3, .a_3, .press, .ready'); 
 
button3.addEventListener('click', () => {
  elementsGroup3.forEach(el => {
    el.classList.toggle('active');
  });
});


