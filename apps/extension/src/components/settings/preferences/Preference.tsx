import { useDispatch, useSelector } from 'react-redux'
import {
     Home,
     Clock,
     Calendar,
     Quote,
     Link2,
     Zap,
     CheckSquare,
     Cloud,
     Search,
     Mail,
     Image
} from 'lucide-react'

import { updateUserDetailsService } from '../../../firebase/functions/UserDetailsActions'
import { getSettingsList } from '../../../redux/Actions/User.actions'
import { RootStore } from '../../../redux/Store'
import Loader from '../../common/Loader'
import { Switch } from '@/components/ui/switch'
import SettingsGroup from './components/SettingsGroup'
import SettingsItem from './components/SettingsItem'

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

     const getSettingStatus = (preferenceType: string) => {
          if (!settingsData) return false
          const setting = settingsData.find((obj: any) => obj.type === preferenceType)
          return setting ? setting.isToggled : false
     }

     if (!settingsData) {
          return (
               <div className="h-full flex items-center justify-center">
                    <Loader />
               </div>
          )
     }

     return (
          <div className="h-full">
               <div className="grid gap-8">
                    <SettingsGroup title="Display Preferences" icon={<Home size={18} />}>
                         <SettingsItem icon={<Clock size={18} />} label="Hide clock">
                              <Switch
                                   checked={getSettingStatus('clock-settings')}
                                   onCheckedChange={(status) => changePreference('clock-settings', status, 'Hide clock', 'Hide the clock from the dashboard')}
                              />
                         </SettingsItem>
                         <SettingsItem icon={<Calendar size={18} />} label="Hide date">
                              <Switch
                                   checked={getSettingStatus('date-settings')}
                                   onCheckedChange={(status) => changePreference('date-settings', status, 'Hide date', 'Hide the date from the dashboard')}
                              />
                         </SettingsItem>
                         <SettingsItem icon={<Quote size={18} />} label="Hide quotes">
                              <Switch
                                   checked={getSettingStatus('quotes-settings')}
                                   onCheckedChange={(status) => changePreference('quotes-settings', status, 'Hide quotes', 'Hide quotes from the dashboard')}
                              />
                         </SettingsItem>
                         <SettingsItem icon={<Link2 size={18} />} label="Hide links">
                              <Switch
                                   checked={getSettingStatus('links-settings')}
                                   onCheckedChange={(status) => changePreference('links-settings', status, 'Hide links', 'Hide links from the dashboard')}
                              />
                         </SettingsItem>
                    </SettingsGroup>

                    <SettingsGroup title="Features & Widgets" icon={<Zap size={18} />}>
                         <SettingsItem icon={<CheckSquare size={18} />} label="Hide todo">
                              <Switch
                                   checked={getSettingStatus('todo-settings')}
                                   onCheckedChange={(status) => changePreference('todo-settings', status, 'Hide todo', 'Hide todo from the dashboard')}
                              />
                         </SettingsItem>
                         <SettingsItem icon={<Cloud size={18} />} label="Hide weather">
                              <Switch
                                   checked={getSettingStatus('weather-settings')}
                                   onCheckedChange={(status) => changePreference('weather-settings', status, 'Hide weather', 'Hide weather from the dashboard')}
                              />
                         </SettingsItem>
                         <SettingsItem icon={<Search size={18} />} label="Hide search">
                              <Switch
                                   checked={getSettingStatus('search-settings')}
                                   onCheckedChange={(status) => changePreference('search-settings', status, 'Hide search', 'Hide search from the dashboard')}
                              />
                         </SettingsItem>
                         <SettingsItem icon={<Mail size={18} />} label="Hide emails">
                              <Switch
                                   checked={getSettingStatus('email-settings')}
                                   onCheckedChange={(status) => changePreference('email-settings', status, 'Hide emails', 'Hide emails from the dashboard')}
                              />
                         </SettingsItem>
                    </SettingsGroup>

                    <SettingsGroup title="Additional Settings" icon={<Image size={18} />}>
                         <SettingsItem
                              icon={<Image size={18} />}
                              label="Public pictures"
                              description="Stop receiving public pictures"
                         >
                              <Switch
                                   checked={getSettingStatus('picture-source-settings')}
                                   onCheckedChange={(status) => changePreference('picture-source-settings', status, 'Public pictures', 'Stop receiving public pictures')}
                              />
                         </SettingsItem>
                         <SettingsItem
                              icon={<Home size={18} />}
                              label="Minimal layout"
                              description="Stop using minimal layout"
                         >
                              <Switch
                                   checked={getSettingStatus('minimal-home-settings')}
                                   onCheckedChange={(status) => changePreference('minimal-home-settings', status, 'Minimal layout', 'Stop using minimal layout')}
                              />
                         </SettingsItem>
                    </SettingsGroup>
               </div>
          </div>
     )
}

export default Preference
