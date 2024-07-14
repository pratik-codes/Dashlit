import Button from 'components/common/button/button'
import React from 'react'
import CategoryButtons from './components/CategoryButtons'

import Svg from 'components/common/Svg'
import { logoutHandler } from 'firebase/functions/AuthActions'
import { mutateDataHandler } from 'utils/demoapp.utils'
interface Props {
  setView: any
  view: string
}

const Sidebar: React.FC<Props> = ({ setView, view }) => {
  return (
    <div className="p-4 flex flex-col justify-between  h-full">
      <div>
        <CategoryButtons name="Preferences" setView={setView} view={view} />
        <CategoryButtons name="Background" setView={setView} view={view} />
        <CategoryButtons name="Quotes" setView={setView} view={view} />
        <CategoryButtons name="Keymaps" setView={setView} view={view} />
        <CategoryButtons name="Contact us" setView={setView} view={view} />
      </div>

      <div className="absolute bottom-0 left-0">
        <Button
          type="text"
          className="focus:outline-none flex space-x-1 w-26 m-6 align-center items-center"
          onClick={() =>
            mutateDataHandler(() => {
              logoutHandler()
              window.location.reload()
            })
          }
        >
          <Svg type="logout" /> <span>Logout</span>
        </Button>
      </div>
    </div>
  )
}

export default Sidebar
