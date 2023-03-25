const hr = document.querySelector(".hr");
const mn = document.querySelector(".mn");
const sc = document.querySelector(".sc");

setInterval(() => {
  let day = new Date();
  let hrs = day.getHours() * 30;
  let min = day.getMinutes() * 6;
  let sec = day.getSeconds() * 6;

  hr.style.transform = `rotateZ(${hrs + min / 12}deg)`;
  mn.style.transform = `rotateZ(${min}deg)`;
  sc.style.transform = `rotateZ(${sec}deg)`;
});
