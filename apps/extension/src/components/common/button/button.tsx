import { Button as AntButton } from 'antd'

import { mutateDataHandler } from 'utils/demoapp.utils'
import '../../../styles/AntdStyles/Button.css'

const Button = (props: any) => {
  const {
    onClick,
    checkForDemoApp = false,
    children,
    loading,
    type = 'primary',
    size = 'large',
    icon
  } = props

  const handleClick = () => {
    console.log('checkForDemoApp', checkForDemoApp)
    if (checkForDemoApp) mutateDataHandler(onClick)
    else onClick()
    // onClick()
  }

  return (
    <AntButton
      {...props}
      loading={loading}
      type={type}
      size={size}
      icon={icon}
      onClick={handleClick}
    >
      {children}
    </AntButton>
  )
}

export default Button
