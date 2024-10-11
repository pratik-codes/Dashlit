import { Popconfirm, Popover } from 'antd'
import Svg from 'components/common/Svg'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { mutateDataHandler } from 'utils/demoapp.utils'
import EditLinkDialog from './EditLinkDialog'
import { linkDeleteHandler } from './utils'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Delete, Settings2, Trash } from 'lucide-react'

const EditDeleteLink = ({ link }: any) => {
  console.log('link', link)
  const { id, title, url, type } = link
  const [isOpen, setIsOpen] = useState(false)

  const dispatch: any = useDispatch()

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <div className=''>
      <div className="focus:outline-none mx-1 mt-1 text-black dark:text-white flex justify-center items-center space-x-1">
        <Settings2
          onClick={(e) => {
            e.stopPropagation()
            openModal()
          }}
          className='hover:bg-gray-300 dark:hover-gray-900 rounded-full p-1' />
        <Trash
          onClick={(e: any) => {
            e.stopPropagation()
            mutateDataHandler(() => linkDeleteHandler(id, dispatch))
          }}

          className='hover:bg-gray-300 dark:hover-gray-900 rounded-full p-1' />
      </div>

      <EditLinkDialog
        isOpen={isOpen}
        id={id}
        linkTitle={title}
        links={url}
        type={type}
        closeModal={closeModal}
        openModal={openModal}
      />
    </div >
  )
}

export default EditDeleteLink
