import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Focus from '../components/focus/Focus'
import Google from '../components/google/Google'
import LinksDropdown from '../components/links/LinksDropdown'
import SearchBar from '../components/searchbar/Searchbar'
import SettingsDropdown from '../components/settings/SettingsDropdown'
import TodoDropdown from '../components/todo/TodoDropdown'

import SetBodyStyle from 'components/theme/SetBodyStyle'
import { getLiveDetails } from '../firebase/functions/UserDetailsActions'
import { getUserActiveData } from '../firebase/functions/UsersActiveData'
import {
  getLinksList,
  getSettingsList,
  getTodoList
} from '../redux/Actions/User.actions'
import { RootStore } from '../redux/Store'
import { startTime } from '../utils/home.utils'

const Home = () => {
  const SettingsDataRedux: any = useSelector(
    (state: RootStore) => state.userSettingsData
  )

  const [clockTimer, setClockTimer] = useState('')
  const [date, setDate] = useState('')
  const [liveData, setLiveData] = useState<any>([])
  const [activeUserData, setActiveUserData] = useState<any>([])
  const [openDialog, setOpenDialog] = useState(false)
  const [openSearchBar, setOpenSearchBar] = useState(false)
  const [openSettings, setOpenSettings] = useState(false)
  const [openTasks, setOpenTasks] = useState(false)
  const [userSettings, setUserSettings] = useState<any>()

  const dispatch = useDispatch()

  const userData = () => {
    dispatch(getSettingsList())
  }

  const getUserLinks = () => {
    dispatch(getLinksList())
  }

  const getUserTodo = () => {
    dispatch(getTodoList())
  }

  const getLiveData = async () => {
    const liveData: any = await getLiveDetails()
    setLiveData(liveData)
  }

  const getActiveData = async () => {
    const activeData: any = await getUserActiveData()
    setActiveUserData(activeData?.data)
  }

  const getPreferenceValue = (preferenceType: string) => {
    let truth
    if (userSettings?.settings) {
      const settingsData = JSON.parse(userSettings?.settings)
      truth = settingsData?.find(
        (x: any) => x.type === preferenceType
      )?.isToggled
      return truth
    } else return true
  }

  const handleKeyBindings = (
    keys: string[],
    KeyboardEvent: any,
    callbackFunction: any
  ) => {
    if (
      keys.includes(KeyboardEvent.key.toLowerCase()) &&
      (KeyboardEvent.metaKey || KeyboardEvent.ctrlKey || KeyboardEvent.shiftKey)
    ) {
      console.log('callback function excuted')
      callbackFunction()
    }
  }

  const handleKeypress = (e: any) => {
    handleKeyBindings(['k', 'p'], e, () => setOpenSearchBar(true))
    handleKeyBindings(['h'], e, () => setOpenDialog(true))
    handleKeyBindings(['m'], e, () => setOpenSettings(true))
    handleKeyBindings(['j'], e, () => setOpenTasks(true))
    if (e.key === 'Escape') {
      setOpenSearchBar(false)
      setOpenDialog(false)
      setOpenSettings(false)
      setOpenTasks(false)
    }
  }

  const get_live_picture = getPreferenceValue('picture-source-settings')

  const file_url_local_storage = localStorage.getItem('latest_file_url')

  const file_url: string = get_live_picture
    ? liveData?.data?.background_url
    : activeUserData?.background_url

  const get_live_quote = getPreferenceValue('quotes-source-settings')
  const local_storage_quote = localStorage.getItem('latest_quote')
  const quote = get_live_quote ? liveData?.data?.quote : activeUserData?.quote

  const local_storage_author_name = localStorage.getItem('latest_author')
  const author_name = get_live_quote
    ? liveData?.data?.author_name
    : activeUserData?.author_name

  useEffect(() => {
    setUserSettings(
      localStorage.getItem('user-settings')
        ? JSON.parse(localStorage.getItem('user-settings') || '')
        : SettingsDataRedux
    )
  }, [localStorage.getItem('user-settings'), localStorage])

  useEffect(() => {
    startTime(setClockTimer, setDate)
    userData()
    getUserLinks()
    getUserTodo()
    getLiveData()
  }, [])

  useEffect(() => {
    getActiveData()
  }, [SettingsDataRedux])

  useEffect(() => {
    if (file_url) localStorage.setItem('latest_file_url', file_url)
    if (author_name) localStorage.setItem('latest_author', author_name)
    if (quote) localStorage.setItem('latest_quote', quote)
  }, [file_url, author_name, quote])

  useEffect(() => {
    try {
      const bodyStyle: any = document.body.style
      bodyStyle.zoom = '80%'
    } catch (error) {
      console.log('error in zooming', error)
    }
  }, [])

  return (
    <div>
      <SetBodyStyle
        fileUrlLocalStorage={file_url_local_storage}
        fileUrl={file_url}
      />
      <div className="h-screen w-full">
        {/* div that renders the clock, date and the time */}
        <div className="clockdate-wrapper">
          {getPreferenceValue('clock-settings') === true && (
            <div id="clock">{clockTimer}</div>
          )}
          {getPreferenceValue('date-settings') === true && (
            <div id="date">{date}</div>
          )}
        </div>

        {getPreferenceValue('focus-settings') === true && <Focus />}

        {/* rendering the qoutes at the bottom of the screen */}
        {getPreferenceValue('quotes-settings') === true &&
          local_storage_quote && (
            <div>
              <div className="qoutes qoutes-wrapper">
                <p>"{local_storage_quote || quote}"</p>
                <p className="text-sm">
                  {' '}
                  - {local_storage_author_name || author_name}
                </p>
              </div>
            </div>
          )}

        {getPreferenceValue('links-settings') === true && (
          <LinksDropdown
            openDialog={openDialog}
            setOpenDialog={setOpenDialog}
          />
        )}

        {getPreferenceValue('todo-settings') === true && (
          <TodoDropdown setOpenTasks={setOpenTasks} openTasks={openTasks} />
        )}

        {/* {getPreferenceValue("weather-settings") === true && (
          <SvgButton type="weather" position="top-0 right-0" cta="Weather (coming soon)"/>
        )} */}

        <Google
          settingsData={userSettings}
          show={{
            calendar: getPreferenceValue('calendar-settings'),
            emails: getPreferenceValue('email-settings')
          }}
        />

        <SettingsDropdown
          setOpenSettings={setOpenSettings}
          openSettings={openSettings}
        />
        {openSearchBar && <SearchBar setOpenSearchBar={setOpenSearchBar} />}
      </div>
    </div>
  )
}

export default Home
