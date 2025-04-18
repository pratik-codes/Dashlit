import { useState } from 'react'

import TabsComponent from 'components/common/TabsComponent'
import CustomDrawer from 'components/common/CustomDrawer'
import CatergoryContent from './components/CatergoryContent'
import Button from 'components/common/button/button'
import Svg from 'components/common/Svg'
import { mutateDataHandler } from 'utils/demoapp.utils'
import { logoutHandler } from 'firebase/functions/AuthActions'

const SettingsPanel: React.FC<{
     openSettings: boolean
     setOpenSettings: any
}> = ({ openSettings, setOpenSettings }) => {
     const [currentTab, setCurrentTab] = useState('1')

     const tabsComponentData = [
          {
               id: '1',
               label: 'Preference'
          },
          {
               id: '2',
               label: 'Background'
          },
          {
               id: '3',
               label: 'Quotes'
          },
          {
               id: '4',
               label: 'Keymaps'
          },
          {
               id: '5',
               label: 'Contact us'
          }
     ]

     return (
          <CustomDrawer
               width="45%"
               headerTitle="Settings"
               onClose={() => setOpenSettings(false)}
               open={openSettings}
          >
               <div className="space-y-4">
                    <div className="mb-8 flex justify-between items-center">
                         <TabsComponent
                              tabs={tabsComponentData}
                              onClick={(data: string) => setCurrentTab(data)}
                         />
                         <Button
                              type="shadow"
                              onClick={() =>
                                   mutateDataHandler(() => {
                                        logoutHandler()
                                        window.location.reload()
                                   })
                              }
                              className="flex space-x-2 items-center mb-2"
                         >
                              <Svg type="logout" />
                              Logout
                         </Button>
                    </div>
                    <CatergoryContent contentId={currentTab} />
               </div>
          </CustomDrawer>
     )
}

export default SettingsPanel
