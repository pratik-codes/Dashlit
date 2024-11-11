import React, { useState } from 'react'
import { mutateDataHandler } from 'utils/demoapp.utils'
import Svg from '../../../common/Svg'
import { Switch } from '@/components/ui/switch'

const preferenceDesc: any = {
  "clock-settings": "Hide clock",
  "date-settings": "Hide date",
  "quotes-settings": "Hide quotes",
  "links-settings": "Hide links",
  "todo-settings": "Hide todo",
  "weather-settings": "Hide weather",
  "search-settings": "Hide search",
  "picture-source-settings": "Stop receiving public pictures",
  "quotes-source-settings": "Stop receiving public quotes",
  "focus-settings": "Remove focus mode",
  "calendar-setting": "Hide Google Calendar",
  "email-settings": "Hide emails",
  "minimal-home-settings": "Stop using minimal layout"
}

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
  console.log({ preferenceType, title, description, isToggled })
  const [isToggle, setIsToggle] = useState(isToggled)

  const changeToggle = (status: boolean) => {
    setIsToggle(status)
    changePreference(preferenceType, status, title, description)
  }

  const desc: any = preferenceDesc[preferenceType] || title;

  return (
    <div className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full h-full p-4 flex items-center">
      <div className="flex justify-between items-center w-full">
        <div className="flex justify-between space-x-2 items-center">
          <div className="font-xl mr-2 bg-gray-300 rounded-full px-2 py-2 rounded-full border-gray-600">
            <Svg type={preferenceType} />
          </div>
          <p className="font-medium text-lg">
            {desc}
          </p>
        </div>
        <div className="flex align-end">
          <Switch
            className="mr-4"
            checked={isToggle}
            onCheckedChange={() => mutateDataHandler(() => changeToggle(!isToggle))}
          />
        </div>
      </div>
    </div>
  )
}

export default PreferenceToggleContent
