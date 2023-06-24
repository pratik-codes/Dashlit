import React from 'react'

import Background from '../background/Background'
import Preference from '../preferences/Preference'
import Quotes from '../quotes/Quotes'
import Help from './Help'
import Keymaps from './Keymaps'

interface Props {
  type: string
}

const CatergoryContent: React.FC<Props> = ({ type }) => {
  console.log({ type })
  return (
    <div style={{ marginBottom: '12rem' }} className="flex p-4 text-gray-900 ">
      {type === 'Preferences' && <Preference />}
      {type === 'Quotes' && <Quotes />}
      {type === 'Background' && <Background />}
      {type === 'Contact us' && <Help />}
      {type === 'Keymaps' && <Keymaps />}
    </div>
  )
}

export default CatergoryContent
