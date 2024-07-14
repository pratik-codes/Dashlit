import { Drawer } from 'antd'
import Svg from './Svg'

import '../../styles/AntdStyles/Drawer.css'

const CustomDrawer: React.FC<{
  onClose: any
  open: boolean
  children: any
  headerTitle: string
  width: string
}> = ({ onClose, open, children, headerTitle, width }) => {
  return (
    <Drawer
      width={width}
      size={'large'}
      title="Basic Drawer"
      placement="right"
      onClose={onClose}
      open={open}
    >
      {headerTitle && (
        <div className="sticky bg-black text-white flex justify-between items-center p-6">
          <div className="bg-black text-xl font-bold">{headerTitle}</div>
          <div onClick={() => onClose()}>
            <Svg
              type="close"
              classNames="cursor-pointer my-auto rounded-md hover:bg-grey1 p-1 text-white"
            />
          </div>
        </div>
      )}
      <div className="p-6">{children}</div>
    </Drawer>
  )
}

export default CustomDrawer
