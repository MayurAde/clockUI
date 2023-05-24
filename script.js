let currMode = "light";

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
  const hoursDegree = (currentDate.getHours() / 12) * 360;
  const minutesDegree = (currentDate.getMinutes() / 60) * 360;

  document.querySelector(".hand").style.transform = `rotate(${degree - 90}deg)`;
  document.querySelector(".minutesHand").style.transform = `rotate(${
    minutesDegree - 90
  }deg)`;
  document.querySelector(".hourHand").style.transform = `rotate(${
    hoursDegree - 90
  }deg)`;

  hour.textContent = dispNum(currentDate.getHours());
  minutes.textContent = dispNum(currentDate.getMinutes());
  seconds.textContent = dispNum(currentDate.getSeconds());
};

setInterval(changeTime, 1000);

document.querySelector(".mode").addEventListener("click", () => {
  if (currMode === "light") {
    document.querySelector("body").style.backgroundColor = " rgb(23, 23, 23)";
    document.querySelector(".digitalClock").style.color = "white";
    // document.querySelector(".analogClock").style.boxShadow =
    //   "5px 5px 15px  black";

    document.querySelector(".fas").classList.toggle("hide");
    document.querySelector(".fad").classList.toggle("hide");
    currMode = "dark";
  } else {
    document.querySelector("body").style.backgroundColor = "white";
    document.querySelector(".digitalClock").style.color = "black";
    console.log("else");
    document.querySelector(".fas").classList.toggle("hide");
    document.querySelector(".fad").classList.toggle("hide");
    currMode = "light";
  }
});
