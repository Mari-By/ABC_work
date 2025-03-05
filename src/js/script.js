// const box = document.querySelector('.main_one_answer_one');

// box.addEventListener('click', () => {
//     box.classList.toggle('active');
//   });

  const button = document.querySelector('.main_one_answer_one'); // Элемент, на который нажимаем
const elementsToChange = document.querySelectorAll('.main_one_answer_one_text, main_one_answer_one_round, .main_one_answer_one'); // Элементы, которые меняем

button.addEventListener('click', () => {
  elementsToChange.forEach(el => {
    el.classList.toggle('active'); // Добавляем/убираем класс
  });
});