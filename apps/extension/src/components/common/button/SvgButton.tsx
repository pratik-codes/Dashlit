import PropTypes from 'prop-types'
import React, { useState } from 'react'
import Svg from '../Svg'
import Button from './button'

interface Props {
  type: string
  position: string
  cta?: string
  style?: string
}

const SvgButton: React.FC<Props> = ({ type, position, cta, style }) => {
  const [mouseEntered, setMouseEntered] = useState(false)

  return (
    <Button
      type="secondary"
      className={`absolute group ${position} z-10 rounded-lg border-none shadow-lg text-sm font-bold p-3 m-4 focus:outline-none text-white hover:text-purple hover:border-purple flex justify-between items-center ${style}`}
    >
      <Svg type={type} />
      <div className="transition-all duration-300 delay-200 hidden group-hover:block mx-2">
        {cta}
      </div>
    </Button>
  )
}

export default SvgButton

SvgButton.propTypes = {
  type: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired
}
