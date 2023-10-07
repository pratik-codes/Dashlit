import { useState } from 'react'

import TabsComponent from 'components/common/TabsComponent'
import CustomDrawer from 'components/common/CustomDrawer'
import CatergoryContent from './components/CatergoryContent'

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
        <div className="mb-8">
          <TabsComponent
            tabs={tabsComponentData}
            onClick={(data: string) => setCurrentTab(data)}
          />
        </div>
        <CatergoryContent contentId={currentTab} />
      </div>
    </CustomDrawer>
  )
}

export default SettingsPanel
