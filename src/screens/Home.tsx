import React, { useEffect, useState } from "react";
import axios from "axios";
import dummyHomeImage from "../assets/images/dummyHome.jpg";
import SvgButton from "../components/button/SvgButton";
import Svg from "../components/Svg";

const Home = () => {
  const [randomPicture, setrandomPicture] = useState<any>({});

  function startTime() {
    const today = new Date();
    let hr = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    const ap = hr < 12 ? "<span>AM</span>" : "<span>PM</span>";
    hr = hr == 0 ? 12 : hr;
    hr = hr > 12 ? hr - 12 : hr;
    //Add a zero in front of numbers<10
    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("clock").innerHTML =
      hr + ":" + min + ":" + sec + " ";

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
    document.getElementById("date").innerHTML = date;

    const time = setTimeout(function () {
      startTime();
    }, 500);
  }
  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  useEffect(() => {
    startTime();

    axios
      .get(
        "https://api.unsplash.com/photos/random?orientation=landscape&client_id=-FiJtZ2AHNo45X-FaoImcgRk3e47zqQNyIghyZZrtso"
      )
      .then(response => console.log(response.data.links.download));
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(https://unsplash.com/photos/mfrU4DrMs1E/download?ixid=MnwyODI1MTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MzkyOTk0MzY)`
      }}
      className="w-full h-screen">
      <div className="clockdate-wrapper">
        <div id="clock"></div>
        <div id="date"></div>
      </div>

      <div className="qoutes-wrapper qoutes">
        “Enthusiasm is the great hill-climber.”{" "}
      </div>

      <SvgButton type="link" position="top-0 left-0" />
      <div>
        <input
          placeholder="Search"
          className="p-1 text-gray-400 absolute top-0 left-0 ml-20 mt-3 bg-transparent border-b border-gray-400 focus:outline-none"
        />
      </div>
      <SvgButton type="settings" position="bottom-0 left-0" />
      <SvgButton type="weather" position="top-0 right-0" />
      <SvgButton type="todo" position="bottom-0 right-0" />
    </div>
  );
};

export default Home;
