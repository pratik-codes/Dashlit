import { Button as AntButton } from 'antd'

import '../../../styles/AntdStyles/Button.css'

const Button = (props: any) => {
  const { children, loading, type = 'primary', size = 'large', icon } = props

  return (
    <AntButton loading={loading} type={type} size={size} icon={icon} {...props}>
      {children}
    </AntButton>
  )
}

export default Button
