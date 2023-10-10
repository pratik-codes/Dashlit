import SvgButton from '../common/button/SvgButton'
import SettingsPanel from './SettingsPanel'

const SettingsDropdown = ({
  setOpenSettings,
  openSettings,
  isMinimalMode
}: {
  setOpenSettings: any
  openSettings: boolean
  isMinimalMode: Boolean
}) => {
  return (
    <div>
      <div onClick={() => setOpenSettings(!openSettings)}>
        <SvgButton
          type="settings"
          position={isMinimalMode ? 'bottom-0 left-0' : 'bottom-0 left-0'}
          cta="Settings"
        />
      </div>
      <SettingsPanel
        openSettings={openSettings}
        setOpenSettings={setOpenSettings}
      />
    </div>
  )
}

export default SettingsDropdown
