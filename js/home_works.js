// HW 2
// Получаем родительский элемент и малый блок

const childBlock = document.querySelector('.child_block');


let positionX = 0;
let positionY = 0;
let counter = 0;


const moveChild = () => {
  if (positionX <= 449 && positionY === 0) {
    positionX++;
    childBlock.style.left = positionX + 'px';
    setTimeout(moveChild, 10);
  } else if (positionX === 450 && positionY <= 449) {
    positionY++;
    childBlock.style.top = positionY + 'px';
    setTimeout(moveChild, 10);
  } else if (positionX >= 1 && positionY === 450) {
    positionX--;
    childBlock.style.left = positionX + 'px';
    setTimeout(moveChild, 10);
  } else if (positionX === 0 && positionY >= 1) {
    positionY--;
    childBlock.style.top = positionY + 'px';
    setTimeout(moveChild, 10);
  }

  if (positionX === 0 && positionY === 0) {
    counter++;
    const minutes = Math.floor(counter / 60);
    console.log("Elapsed time:", minutes, "minute(s)");
  }
};

moveChild();


// Получаем элементы со страницы
let counterElement = document.getElementById('seconds');
let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');
let resetButton = document.getElementById('reset');

// Инициализируем счетчик
let counter1 = 0;
let intervalId; // Идентификатор интервала

// Функция для обновления счетчика на странице
const updateCounter = () => {
  counterElement.innerHTML = counter1;
}

// Функция для увеличения счетчика на 1
const incrementCounter = () => {
  counter1++;
  updateCounter();
}

// Функция для запуска счетчика
const startCounter = () => {
  // Проверяем не запущен ли уже счетчик
  if (intervalId) {
    return; // Если уже запущен, то ничего не делаем
  }

  // Запускаем интервал с функцией увеличения счетчика
  intervalId = setInterval(incrementCounter, 1000);
}

// Функция для остановки счетчика
const stopCounter = () =>  {
  // Проверяем запущен ли счетчик
  if (intervalId) {
    clearInterval(intervalId); // Останавливаем интервал
    intervalId = null; // Сбрасываем идентификатор интервала
  }
}

// Функция для сброса счетчика
const resetCounter = () => {
  stopCounter(); // Останавливаем счетчик
  counter1 = 0; // Сбрасываем счетчик
  updateCounter();
}

// Назначаем обработчики событий на кнопки
startButton.addEventListener('click', startCounter);
stopButton.addEventListener('click', stopCounter);
resetButton.addEventListener('click', resetCounter);

//         let hours = Math.floor(elapsedTime / (60 * 60 * 1000));
//         let minutes = Math.floor((elapsedTime / (60 * 1000)) % 60);
//         let seconds = Math.floor((elapsedTime / 1000) % 60);


