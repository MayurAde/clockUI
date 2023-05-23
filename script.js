// function rotateHand() {
//   const hand = document.querySelector(".hand");
//   const now = new Date();
//   const seconds = now.getSeconds();
//   const degrees = (seconds / 60) * 360;
//   hand.style.transform = `rotate(${degrees}deg)`;
// }

// setInterval(rotateHand, 1000);

setInterval(() => {
  const currentDate = new Date();
  const seconds = currentDate.getSeconds();
  const degree = (seconds / 60) * 360;
  document.querySelector(".hand").style.transform = `rotate(${degree}deg)`;
}, 100);

const changeTime = () => {
  const hour = document.querySelector(".hour");
  const minutes = document.querySelector(".minutes");
  const seconds = document.querySelector(".seconds");

  const currentDate = new Date();
  hour.textContent = currentDate.getHours();
  minutes.textContent = currentDate.getMinutes();
  seconds.textContent = currentDate.getSeconds();
};

setInterval(changeTime, 100);
