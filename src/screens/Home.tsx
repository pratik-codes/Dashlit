import React, { useEffect, useState } from "react";
import axios from "axios";
import SvgButton from "../components/button/SvgButton";
import { getUserDetailsService } from "../firebase/functions/UserDetailsActions";
import { homedir } from "os";
import LinksDropdown from "../components/links/LinksDropdown";
import { getUserLinksService } from "../firebase/functions/LinksActions";
import { getLinksList } from "../Redux/Actions/User.actions";
import { useDispatch } from "react-redux";
import TodoDropdown from "../components/todo/TodoDropdown";

const Home = () => {
  const [clockTimer, setClockTimer] = useState("");
  const [date, setDate] = useState("");
  const [searchValue, setSearchValue] = useState("");

  function startTime() {
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
      startTime();
    }, 500);
  }
  function checkTime(i: any) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  const userData = async () => {
    // const res = await getUserDetailsService();
    const res = localStorage.getItem("user_settings");
    if (res) {
      console.log(JSON.parse(res));
    }
  };

  const dispatch = useDispatch();

  const getUserLinks = async () => {
    const res: any = await dispatch(getLinksList());
    console.log(res);
  };

  useEffect(() => {
    startTime();
    userData();
    getUserLinks();

    // axios
    //   .get(
    //     `https://api.unsplash.com/photos/random?query=landscape&orientation=landscape&client_id=${process.env.REACT_APP_UNSPLASH_SECRET_ID}`
    //   )
    //   .then(response => console.log(response.data));
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(https://unsplash.com/photos/qfmd9bu7IgA/download?ixid=MnwyODI1MTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE2Mzk5MTc0OTU)`,
        backgroundSize: "cover"
      }}
      className="w-full h-screen">
      <div className="clockdate-wrapper">
        <div id="clock">{clockTimer}</div>
        <div id="date">{date}</div>
      </div>
      <div className="qoutes-wrapper qoutes">
        “Enthusiasm is the great hill-climber.”{" "}
      </div>
      <LinksDropdown />
      <div>
        <input
          placeholder="Search"
          className=" text-white absolute top-0 left-0 ml-20 mt-3 p-2 bg-transparent border-b border-gray-500 hover:border-white focus:outline-none"
          onChange={(e: any) => setSearchValue(e.target.value)}
          onKeyPress={e =>
            e.key === "Enter" &&
            window.open(
              `http://www.google.com/search?q=' + ${searchValue}`,
              "_blank"
            )
          }
        />
      </div>
      <TodoDropdown />
      <SvgButton type="settings" position="bottom-0 left-0" />
      <SvgButton type="weather" position="top-0 right-0" />
      {/* <SvgButton type="todo" position="bottom-0 right-0" /> */}
    </div>
  );
};

export default Home;
