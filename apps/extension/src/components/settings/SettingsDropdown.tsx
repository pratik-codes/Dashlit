import SvgButton from '../common/button/SvgButton'
import SettingsPanel from './SettingsPanel'

const SettingsDropdown = ({
  setOpenSettings,
  openSettings,
}: {
  setOpenSettings: any
  openSettings: boolean
  isMinimalMode: Boolean
}) => {

  return (
    <div>
      <div onClick={() => setOpenSettings(!openSettings)}>
      </div>
      <SettingsPanel
        openSettings={openSettings}
        setOpenSettings={setOpenSettings}
      />
    </div>
  )
}

export default SettingsDropdown
