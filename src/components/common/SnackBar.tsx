import { message, notification } from 'antd'
import '../../styles/AntdStyles/Popover.css'

export const SnackBar = (
  message: string,
  description: string,
  type: string
) => {
  const config = {
    message: message,
    description: description,
    duration: 2
  }
  if (type === 'success') notification.success(config)
  if (type === 'fail') notification.error(config)
}

const triggerMessage = (text: string, type: string) => {
  if (type === 'success') message.success(text, 99999999999999)
  if (type === 'fail') message.error(text)
  if (type === 'info') message.info(text)
}

export default triggerMessage
