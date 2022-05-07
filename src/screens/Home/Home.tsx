import React, { useEffect, useState } from "react";
import axios from "axios";
import SvgButton from "../../components/button/SvgButton";
import { getUserDetailsService } from "../../firebase/functions/UserDetailsActions";
import { homedir } from "os";
import LinksDropdown from "../../components/links/LinksDropdown";
import { getUserLinksService } from "../../firebase/functions/LinksActions";
import {
  getLinksList,
  getSettingsList,
  getTodoList
} from "../../Redux/Actions/User.actions";
import { useDispatch, useSelector } from "react-redux";
import TodoDropdown from "../../components/todo/TodoDropdown";
import SettingsDropdown from "../../components/settings/SettingsDropdown";
import { RootStore } from "../../Redux/Store";
import Svg from "../../components/common/Svg";

import { startTime } from "./home.utils";

const Home = () => {
  const [clockTimer, setClockTimer] = useState("");
  const [date, setDate] = useState("");
  const [searchValue, setSearchValue] = useState("");

  // state of preference state
  const [preference, setPreference] = useState<any>([]);

  const dispatch = useDispatch();

  const SettingsDataRedux: any = useSelector(
    (state: RootStore) => state.userSettingsData
  );

  // fetching user settings
  const userData = async () => {
    const res: any = await dispatch(getSettingsList());
  };

  // fetching user links
  const getUserLinks = async () => {
    const res: any = await dispatch(getLinksList());
  };

  // fetching user todo
  const getUserTodo = async () => {
    const res: any = await dispatch(getTodoList());
  };

  const getPreferenceValue = (preferenceType: string) => {
    let truth;
    if (SettingsDataRedux.data) {
      const settingsData = JSON.parse(SettingsDataRedux.data.settings);
      truth = settingsData.find(
        (x: any) => x.type === preferenceType
      ).isToggled;
      return truth;
    } else return true;
  };

  // invoking the functions on home render
  useEffect(() => {
    startTime(setClockTimer, setDate);
    userData();
    getUserLinks();
    getUserTodo();
  }, []);

  // useEffect(() => {
  //   try {
  //     axios
  //       .get(
  //         `https://api.unsplash.com/photos/random?query=mountains&orientation=landscape&client_id=${process.env.REACT_APP_UNSPLASH_SECRET_ID}`
  //       )
  //       .then(response => {
  //         if (response.data.links) {
  //           console.log(response.data.links);
  //           console.log(response.data.links.download);
  //           console.log(response.data.links.html);
  //         }
  //       });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, []);

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1491613993002-8956ec08fddc?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb)`,
          backgroundSize: "cover"
        }}
        className="w-full h-screen">
        {/* div that renders the clock, date and the time */}
        <div className="clockdate-wrapper">
          {getPreferenceValue("clock-settings") === true && (
            <div id="clock">{clockTimer}</div>
          )}
          {getPreferenceValue("date-settings") === true && (
            <div id="date">{date}</div>
          )}
        </div>
        {/* rendering the qoutes at the bottom of the screen */}
        {getPreferenceValue("quotes-settings") === true && (
          <div className="qoutes-wrapper qoutes">
            “Enthusiasm is the great hill-climber.”{" "}
          </div>
        )}
        {getPreferenceValue("links-settings") === true && <LinksDropdown />}
        {/* search bar component */}
        <div className="flex">
          {" "}
          {/* <Svg type="search" /> */}
          {getPreferenceValue("search-settings") === true && (
            <input
              placeholder="Search"
              className=" text-white absolute top-0 left-0 ml-20 mt-3 p-2 bg-transparent border-b border-gray-500 hover:border-white focus:outline-none"
              onChange={(e: any) => setSearchValue(e.target.value)}
              onKeyPress={e =>
                e.key === "Enter" &&
                window.open(
                  `https://www.google.com/search?q=+ ${searchValue}`,
                  "_blank"
                )
              }
            />
          )}
        </div>
        {getPreferenceValue("todo-settings") === true && <TodoDropdown />}
        {getPreferenceValue("weather-settings") === true && (
          <SvgButton type="weather" position="top-0 right-0" />
        )}
        <SettingsDropdown />

        {/* <SvgButton type="todo" position="bottom-0 right-0" /> */}
      </div>
    </div>
  );
};

export default Home;
