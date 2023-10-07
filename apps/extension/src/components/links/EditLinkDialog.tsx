import { Tooltip } from 'antd'
import ModalComponent from 'components/common/Modal'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { updateUserLinksService } from '../../firebase/functions/LinksActions'
import { getLinksList } from '../../redux/Actions/User.actions'
import InputComponent from '../common/InputComponent'
import triggerMessage from '../common/SnackBar'
import Svg from '../common/Svg'
import Button from '../common/button/button'

interface Props {
  isOpen: boolean
  closeModal: any
  openModal: any
  id: string
  linkTitle: string
  links: any
  type: string
}

export interface links {
  link: string
  id: string
}

const EditLinkDialog: React.FC<Props> = ({
  isOpen,
  closeModal,
  openModal,
  linkTitle,
  links,
  type,
  id
}) => {
  const [title, setTitle] = useState('')
  const [urls, setUrls] = useState([])
  const [linkAdded, setLinkAdded] = useState<any>([])
  const [linksCount, setLinksCount] = useState(1)

  const dispatch = useDispatch()

  const editHandler = async () => {
    const data = {
      linkTitle: title,
      links: [...urls, ...linkAdded],
      type: [...urls, ...linkAdded].length > 1 ? 'folder' : 'link'
    }
    const res = await updateUserLinksService(id, data)
    if (res.success === true) {
      triggerMessage('Link edited successfully', 'success')
      await dispatch(getLinksList())
    } else {
      triggerMessage(res.error, 'fail')
    }
  }

  const inputOnchangeHandler = (inputId: string, value: string) => {
    linkAdded
      .filter((url: any) => url.id == inputId)
      .forEach((link: any) => (link.link = value.replace(/(^\w+:|^)\/\//, '')))
  }

  const inputDeleteHandler = (inputId: string) => {
    const newLinks = linkAdded.filter((link: any) => link.id !== inputId)
    setLinkAdded(newLinks)
  }

  const linksDeleteHandler = (inputId: string) => {
    const newLinks = urls.filter((link: any) => link.id !== inputId)
    setUrls(newLinks)
  }

  useEffect(() => {
    setTitle(linkTitle)
    setUrls(links)
  }, [])

  return (
    <ModalComponent isOpen={isOpen} onClose={closeModal} title="Edit link">
      <div className="border-gray-900 shadow-xl inline-block w-full overflow-hidden rounded-[15px] border-0 text-left align-middle transition-all">
        <div className="mt-2">
          <InputComponent
            value={title}
            type="text"
            onChange={(e: any) => setTitle(e.target.value)}
            placeholder="Link title"
          />
          {urls.map((link: any) => {
            return (
              <div key={link.id}>
                <div className="bg-grey2 relative my-2 py-1 flex w-full rounded-[15px] border-purple text-lg font-bold text-white placeholder:text-white placeholder:text-opacity-50 focus:outline-none">
                  <div
                    className="flex justify-center items-center w-11/12"
                    onClick={() =>
                      window.open(`https://${link.link}`, '_blank')
                    }
                  >
                    <img
                      style={{ borderRadius: '100%' }}
                      className="my-auto ml-3 h-5 w-5"
                      src={`https://s2.googleusercontent.com/s2/favicons?domain_url=https://${link.link}`}
                      alt="favicon"
                    />
                    <Tooltip title={link.link} placement="top">
                      <h1 className="placeholder:text-blueGray-300 text-blueGray-600 relative w-full cursor-pointer break-all rounded border border-none border-opacity-50 px-3 py-1 text-base font-bold text-white outline-none hover:text-purple hover:underline focus:outline-none focus:ring">
                        {link.link.length > 35
                          ? `${link.link.substring(0, 20)}...`
                          : link.link}
                      </h1>
                    </Tooltip>
                  </div>
                  <Button
                    type="secondary"
                    className="mr-1"
                    onClick={() => linksDeleteHandler(link.id)}
                  >
                    <Svg type="close" classNames="p-1" />
                  </Button>
                </div>
              </div>
            )
          })}
          {linkAdded.length !== 0 &&
            linkAdded.map((link: any) => {
              return (
                <div
                  key={link.id}
                  className="bg-grey2 rounded-[15px] focus:outline-none font-bold my-2 placeholder-white placeholder-opacity-50 py-1 relative text-gray-100 text-lg text-white border-purple w-full flex justify-between"
                >
                  <div className="w-11/12">
                    <input
                      type="text"
                      placeholder="add new link"
                      onChange={(e) =>
                        inputOnchangeHandler(link.id, e.target.value)
                      }
                      className="text-gray-100 relative flex w-full bg-transparent px-3 py-1 text-lg font-bold text-white placeholder:text-white placeholder:text-opacity-50 focus:outline-none"
                    />
                  </div>
                  <Button
                    type="secondary"
                    className="mr-1"
                    onClick={() => inputDeleteHandler(link.id)}
                  >
                    <Svg type="close" classNames="p-1" />
                  </Button>
                </div>
              )
            })}

          <div className="div flex justify-end">
            <Button
              className="focus:outline-none mr-1"
              onClick={() => {
                setLinksCount(linksCount + 1)
                setLinkAdded([...linkAdded, { link: '', id: uuidv4() }])
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="my-auto h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </Button>
          </div>
        </div>

        <div className="mt-2 flex">
          <div className="outline-none">
            <Button
              kind="elevated"
              className="mr-2 focus:outline-none"
              onClick={(e: any) => {
                e.stopPropogration();
                editHandler()
                closeModal()
              }}
              checkForDemoApp={true}
            >
              Edit
            </Button>
          </div>
          <div>
            <Button
              type="secondary"
              className="focus:outline-none"
              onClick={closeModal}
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </ModalComponent>
  )
}

export default EditLinkDialog
