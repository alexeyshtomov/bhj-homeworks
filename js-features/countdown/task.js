
const timerElement = document.getElementById("timer");


let secondsRemaining = timerElement.getAttribute("data-timer") || 59;


function updateTimer() {
  // Уменьшаем значение таймера на 1 секунду
  secondsRemaining--;

  // Обновляем текст таймера на странице
  timerElement.textContent = secondsRemaining;

  
  if (secondsRemaining <= 0) {
    clearInterval(intervalId); // Останавливаем таймер
    alert("Вы победили в конкурсе!");
  }
}


const intervalId = setInterval(updateTimer, 1000);
