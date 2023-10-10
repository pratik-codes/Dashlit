import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import DateTime from 'components/Home/DateTIme'
import MinimalHomeLinks from 'components/Home/MinimalHomeLinks'
import SetBodyStyle from 'components/theme/SetBodyStyle'
import Focus from '../components/focus/Focus'
import Google from '../components/google/Google'
import LinksDropdown from '../components/links/LinksDropdown'
import SearchBar from '../components/searchbar/Searchbar'
import SettingsDropdown from '../components/settings/SettingsDropdown'
import TodoDropdown from '../components/todo/TodoDropdown'

import { getLiveDetails } from '../firebase/functions/UserDetailsActions'
import { getUserActiveData } from '../firebase/functions/UsersActiveData'
import {
  getLinksList,
  getSettingsList,
  getTodoList
} from '../redux/Actions/User.actions'
import { RootStore } from '../redux/Store'
import { handleKeyBindings } from 'utils/home.utils'

const Home = () => {
  const [liveData, setLiveData] = useState<any>([])
  const [activeUserData, setActiveUserData] = useState<any>([])
  const [openDialog, setOpenDialog] = useState(false)
  const [openSearchBar, setOpenSearchBar] = useState(false)
  const [openSettings, setOpenSettings] = useState(false)
const [openTasks, setOpenTasks] = useState(false)
  const [userSettings, setUserSettings] = useState<any>()

  const dispatch: any = useDispatch()

  // gather all the data
  const userData = () => dispatch(getSettingsList())
  const getUserLinks = () => dispatch(getLinksList())
  const getUserTodo = () => dispatch(getTodoList())
  const getLiveData = async () => {
    const liveData: any = await getLiveDetails()
    setLiveData(liveData)
  }
  const getActiveData = async () => {
    const activeData: any = await getUserActiveData()
    setActiveUserData(activeData?.data)
  }

  const SettingsDataRedux: any = useSelector(
    (state: RootStore) => state.userSettingsData
  )

  const getPreferenceValue = (preferenceType: string): Boolean => {
    let truth
    if (userSettings?.settings) {
      const settingsData = JSON.parse(userSettings?.settings)
      truth = settingsData?.find((x: any) => x.type === preferenceType)
        ?.isToggled
      return truth
    } else return true
  }

  // const minimalHomeSetting = getPreferenceValue('minimal-home-settings');
  // WIP: Minimal mode
  const MINIMAL_HOME = false

  const handleKeypress = (e: KeyboardEvent) => {
    e.stopPropagation()
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

    document.addEventListener('keydown', handleKeypress)

    return () => {
      document.removeEventListener('keydown', handleKeypress)
    }
  }, [])

  return (
    <div>
      <SetBodyStyle
        fileUrlLocalStorage={file_url_local_storage}
        fileUrl={file_url}
        isMinimalMode={MINIMAL_HOME}
      />
      <DateTime
        getPreferenceValue={getPreferenceValue}
        isMinimalHome={MINIMAL_HOME}
      />
      <div className="h-screen w-full">
        {getPreferenceValue('focus-settings') === true && !MINIMAL_HOME && (
          <Focus />
        )}
        {getPreferenceValue('links-settings') === true && !MINIMAL_HOME && (
          <LinksDropdown
            openDialog={openDialog}
            setOpenDialog={setOpenDialog}
          />
        )}
        {getPreferenceValue('todo-settings') === true && (
          <TodoDropdown setOpenTasks={setOpenTasks} openTasks={openTasks} />
        )}
        {getPreferenceValue('quotes-settings') === true &&
          !MINIMAL_HOME &&
          local_storage_quote && (
            <div className="qoutes qoutes-wrapper group">
              <p>"{local_storage_quote || quote}"</p>
              <p className="text-sm ml-4 opacity-0 group-hover:mb-2 group-hover:opacity-100 transition-all duration-300 delay-200">
                {' '}
                - {local_storage_author_name || author_name}
              </p>
            </div>
          )}

        {MINIMAL_HOME && <MinimalHomeLinks />}
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
          isMinimalMode={MINIMAL_HOME}
        />
        {openSearchBar && <SearchBar setOpenSearchBar={setOpenSearchBar} />}
      </div>
    </div>
  )
}

export default Home
