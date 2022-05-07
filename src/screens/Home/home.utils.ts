// function that runs the clock
export function startTime(setClockTimer: any, setDate: any) {
  const today = new Date();
  let hr = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();
  hr = hr === 0 ? 12 : hr;
  hr = hr > 12 ? hr - 12 : hr;
  //Add a zero in front of numbers<10
  hr = checkTime(hr);
  min = checkTime(min);
  sec = checkTime(sec);
  setClockTimer(hr + ":" + min + ":" + sec + " ");

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const curWeekDay = days[today.getDay()];
  const curDay = today.getDate();
  const curMonth = months[today.getMonth()];
  const curYear = today.getFullYear();
  const date = curWeekDay + ", " + curDay + " " + curMonth + " " + curYear;
  setDate(date);

  setTimeout(function () {
    startTime(setClockTimer, setDate);
  }, 500);
}

function checkTime(i: any) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
