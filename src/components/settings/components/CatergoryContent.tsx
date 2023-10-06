import React from 'react'

import Background from '../background/Background'
import Preference from '../preferences/Preference'
import Quotes from '../quotes/Quotes'
import Help from './Help'
import Keymaps from './Keymaps'

interface Props {
  contentId: string
}

const CatergoryContent: React.FC<Props> = ({ contentId }) => {
  return (
    <div style={{ marginBottom: '12rem' }} className="flex p-4 text-gray-900 ">
      {contentId === '1' && <Preference />}
      {contentId === '3' && <Quotes />}
      {contentId === '2' && <Background />}
      {contentId === '5' && <Help />}
      {contentId === '4' && <Keymaps />}
    </div>
  )
}

export default CatergoryContent
