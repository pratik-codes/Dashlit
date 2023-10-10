import { Switch } from 'antd'
import React from 'react'

interface Props {
  enabled: boolean
  setEnabled: any
}

const SwitchComponent: React.FC<Props> = ({ enabled, setEnabled }) => {
  return (
    <div className="ml-2 p-2">
      <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in rounded-full">
        <Switch
          checked={enabled}
          onClick={() => setEnabled(!enabled)}
          defaultChecked
        />
      </div>
    </div>
  )
}

export default SwitchComponent
