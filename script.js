const dispNum = (num) => {
  if (Number(num) < 10) {
    return "0" + String(num);
  } else {
    return String(num);
  }
};

document.querySelector(".hand").style.transform = "rotate(180deg)";
const changeTime = () => {
  const hour = document.querySelector(".hour");
  const minutes = document.querySelector(".minutes");
  const seconds = document.querySelector(".seconds");

  const currentDate = new Date();
  const degree = (currentDate.getSeconds() / 60) * 360;

  document.querySelector(".hand").style.transform = `rotate(${degree - 90}deg)`;

  hour.textContent = dispNum(currentDate.getHours());
  minutes.textContent = dispNum(currentDate.getMinutes());
  seconds.textContent = dispNum(currentDate.getSeconds());
};

setInterval(changeTime, 1000);
