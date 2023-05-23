import PropTypes from 'prop-types'
import React, { useState } from 'react'
import Svg from '../Svg'
import Button from './button'

interface Props {
  type: string
  position: string
  cta?: string
}

const SvgButton: React.FC<Props> = ({ type, position, cta }) => {
  const [mouseEntered, setMouseEntered] = useState(false)

  return (
    <Button
      type="secondary"
      onMouseEnter={(e: any) => setMouseEntered(true)}
      onMouseLeave={(e: any) => setMouseEntered(false)}
      className={`absolute ${position} rounded-lg border-none text-white border-none shadow-lg text-sm font-bold p-3 m-4 focus:outline-none text-white hover:text-purple hover:border-purple flex justify-between items-center`}
    >
      <Svg type={type} />
      {mouseEntered && <div className="mx-2 ">{cta}</div>}
    </Button>
  )
}

export default SvgButton

SvgButton.propTypes = {
  type: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired
}
