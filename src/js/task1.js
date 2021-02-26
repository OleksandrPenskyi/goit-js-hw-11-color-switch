const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');

// id для нашего интревала, определяем id чтобы можно біло удалить такую задачу
let itervalId = null;
// базовое значение активной кнопки. Т.е.: кнопка активна?
let activeBtn = true;

// ф-я генератора случайного числа
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// ф-я смены цвета
function changebodyColor() {
  // меняем inline стиль у body
  document.body.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length - 1)];
}

// ф-я старта интервала для смены цвета
function startInterval() {
  if (activeBtn === false) return; //
  activeBtn = false; // делаем кнопку start неактивной
  itervalId = setInterval(changebodyColor, 1000); // ставим интервал
}

// ф-я остановки интервала для смены цвета
function stopInterval() {
  clearInterval(itervalId); // отключаем интервал
  activeBtn = true; // делаем кнопку start активной,чтобы можно было продолжить менять цвета
}

startBtn.addEventListener('click', startInterval);
stopBtn.addEventListener('click', stopInterval);
