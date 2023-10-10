import { Popconfirm, Popover } from 'antd'
import Svg from 'components/common/Svg'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { mutateDataHandler } from 'utils/demoapp.utils'
import EditLinkDialog from './EditLinkDialog'
import { linkDeleteHandler } from './utils'

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
    <Popover
      content={
        <div>
          <h6
            onClick={(e) => {
              e.stopPropagation()
              openModal()
            }}
            className="font-bold cursor-pointer hover:bg-grey2 py-1 px-2 rounded-lg text-white"
          >
            Edit
          </h6>
          <Popconfirm
            title="Are you sure to delete this link/folder?"
            onConfirm={(e: any) => {
              e.stopPropagation()
              mutateDataHandler(() => linkDeleteHandler(id, dispatch))
            }}
            okText="Yes"
            cancelText="No"
          >
            <h1 className="font-bold cursor-pointer hover:bg-grey2 py-1 px-2 rounded-lg text-white">
              Delete
            </h1>
          </Popconfirm>
          <EditLinkDialog
            isOpen={isOpen}
            id={id}
            linkTitle={title}
            links={url}
            type={type}
            closeModal={closeModal}
            openModal={openModal}
          />
        </div>
      }
      trigger="hover"
    >
      <button className="focus:outline-none mx-1 mt-1 text-white">
        <Svg type="dot-dot" />
      </button>
    </Popover>
  )
}

export default EditDeleteLink
