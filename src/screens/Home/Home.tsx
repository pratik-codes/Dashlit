import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import SvgButton from "../../components/button/SvgButton";
import {
  getLiveDetails,
  getUserDetailsService
} from "../../firebase/functions/UserDetailsActions";
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
import { getUserActiveData } from "../../firebase/functions/UsersActiveData";
import dummyHome from "../../assets/images/dummyHome.jpg";

const Home = () => {
  const [clockTimer, setClockTimer] = useState("");
  const [date, setDate] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [preference, setPreference] = useState([]);
  const [liveData, setLiveData] = useState<any>([]);
  const [activeUserData, setActiveUserData] = useState<any>([]);
  const [openDialog, setOpenDialog] = useState(false);

  const dispatch = useDispatch();

  const SettingsDataRedux: any = useSelector(
    (state: RootStore) => state.userSettingsData
  );
  const userData = async () => {
    const res: any = dispatch(getSettingsList());
  };
  const getUserLinks = async () => {
    const res: any = dispatch(getLinksList());
  };
  const getUserTodo = async () => {
    const res: any = dispatch(getTodoList());
  };
  const getLiveData = async () => {
    const liveData: any = await getLiveDetails();
    setLiveData(liveData);
  };
  const getActiveData = async () => {
    const activeData: any = await getUserActiveData();
    setActiveUserData(activeData?.data);
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

  useEffect(() => {
    startTime(setClockTimer, setDate);
    userData();
    getActiveData();
    getUserLinks();
    getUserTodo();
    getLiveData();
  }, []);

  const get_live_picture = getPreferenceValue("picture-source-settings");

  const file_url_local_storage = localStorage.getItem("latest_file_url");

  const file_url: string = get_live_picture
    ? liveData?.data?.background_url
    : activeUserData?.background_url;

  const get_live_quote = getPreferenceValue("quotes-source-settings");
  const local_storage_quote = localStorage.getItem("latest_quote");
  const quote = get_live_quote ? liveData?.data?.quote : activeUserData?.quote;

  const local_storage_author_name = localStorage.getItem("latest_author");
  const author_name = get_live_quote
    ? liveData?.data?.author_name
    : activeUserData?.author_name;

  useEffect(() => {
    if (file_url) localStorage.setItem("latest_file_url", file_url);
  }, [file_url]);

  useEffect(() => {
    if (quote) localStorage.setItem("latest_quote", quote);
  }, [quote]);

  useEffect(() => {
    if (author_name) localStorage.setItem("latest_author", author_name);
  }, [author_name]);

  useEffect(() => {
    document.addEventListener("keydown", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const handleClick = (e: any) => {
    if (e.key === "l") {
      setOpenDialog(true);
    }
  };

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${file_url_local_storage || file_url})`,
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
        {getPreferenceValue("quotes-settings") === true && quote && (
          <div>
            <div className="qoutes-wrapper qoutes">
              <p>"{local_storage_quote || quote}"</p>
              <p className="text-sm">
                {" "}
                - {local_storage_author_name || author_name}
              </p>
            </div>
          </div>
        )}
        {getPreferenceValue("links-settings") === true && (
          <LinksDropdown
            openDialog={openDialog}
            setOpenDialog={setOpenDialog}
          />
        )}
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
