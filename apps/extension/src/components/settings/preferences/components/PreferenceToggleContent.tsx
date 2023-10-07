import React, { useState } from 'react'
import { mutateDataHandler } from 'utils/demoapp.utils'
import Svg from '../../../common/Svg'
import SwitchComponent from './SwitchComponent'

interface Props {
  preferenceType: string
  title: string
  description: string
  isToggled: boolean
  changePreference: any
}

const PreferenceToggleContent: React.FC<Props> = ({
  preferenceType,
  title,
  description,
  isToggled,
  changePreference
}) => {
  const [isToggle, setIsToggle] = useState(isToggled)

  const changeToggle = (status: boolean) => {
    setIsToggle(status)
    changePreference(preferenceType, status, title, description)
  }

  return (
    <div className="bg-grey2 rounded-common h-full p-4 flex items-center border-2 hover:border-purple">
      <div className="flex justify-between items-center">
        <div className="flex justify-between space-x-2 items-center">
          <div className="font-xl text-white mr-2 border p-2 rounded-xl border-grey1">
            <Svg type={preferenceType} />
          </div>
          <p className="font-medium text-white text-[1rem]">{description}</p>
        </div>
        <div className="flex align-center">
          <SwitchComponent
            enabled={isToggle}
            setEnabled={() => mutateDataHandler(() => changeToggle(!isToggle))}
          />
        </div>
      </div>
    </div>
  )
}

export default PreferenceToggleContent
