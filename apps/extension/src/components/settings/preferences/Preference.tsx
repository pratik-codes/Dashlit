import { useDispatch, useSelector } from 'react-redux'

import { updateUserDetailsService } from '../../../firebase/functions/UserDetailsActions'
import { getSettingsList } from '../../../redux/Actions/User.actions'
import { RootStore } from '../../../redux/Store'
import Loader from '../../common/Loader'
import PreferenceToggleContent from './components/PreferenceToggleContent'

const Preference = () => {
  const dispatch: any = useDispatch()

  const SettingsDataRedux: any = useSelector(
    (state: RootStore) => state.userSettingsData
  )

  const settingsLocalStorage = JSON.parse(
    localStorage.getItem('user-settings') || ''
  )

  let settingsData =
    JSON.parse(settingsLocalStorage?.settings) ||
    (SettingsDataRedux.data && JSON.parse(SettingsDataRedux.data.settings))

  const changePreference = async (
    preferenceType: string,
    status: boolean,
    name = '',
    description = ''
  ) => {
    console.log({ preferenceType, status, name, description })
    const obj = settingsData?.find((obj: any) => obj.type === preferenceType)
    const objIndex = settingsData?.findIndex(
      (obj: any) => obj.type === preferenceType
    )
    const data: any = SettingsDataRedux.data
    if (obj) {
      settingsData[objIndex].isToggled = status
      data.settings = JSON.stringify(settingsData)
      updateUserDetailsService(data)
    } else {
      const data = {
        name,
        description,
        type: preferenceType,
        isToggled: true
      }
      console.log({ data })
      settingsData.push(data)
      const newData = {
        ...SettingsDataRedux?.data,
        settings: JSON.stringify(settingsData)
      }
      updateUserDetailsService(newData)
    }
    dispatch(getSettingsList())
  }

  const checkIfPresentInSettings = (key: any) => {
    const data = settingsLocalStorage
      ? JSON.parse(settingsLocalStorage.settings)
      : SettingsDataRedux?.settings
    return data?.find((obj: any) => obj.type === key)
  }

  return (
    <div className="h-full">
      <div className="gap-4 grid grid-cols-2 mb-12">
        {settingsData ? (
          settingsData.map((setting: any) => {
            return (
              <div key={setting.type}>
                <PreferenceToggleContent
                  preferenceType={setting.type}
                  isToggled={setting.isToggled}
                  title={setting.name}
                  description={setting.description}
                  changePreference={changePreference}
                />
              </div>
            )
          })
        ) : (
          <div>
            <Loader />
          </div>
        )}
      </div>
    </div>
  )
}

export default Preference