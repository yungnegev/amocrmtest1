const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {

    let timer = seconds;

    const timerId = setInterval(() => {

      const hours = Math.floor(timer / 3600);
      const minutes = Math.floor((timer - hours * 3600) / 60);
      const seconds = timer - hours * 3600 - minutes * 60;

      timerEl.textContent = `${hours}:${minutes}:${seconds}`;
      timer -= 1;

      if (timer < 0) {
        clearInterval(timerId);
      }
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  const value = inputEl.value;
  inputEl.value = value.replace(/\D/g, '');
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
