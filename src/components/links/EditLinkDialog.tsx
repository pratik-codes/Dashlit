import { Dialog } from '@headlessui/react'
import { Tooltip } from 'antd'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { updateUserLinksService } from '../../firebase/functions/LinksActions'
import { getLinksList } from '../../redux/Actions/User.actions'
import Button from '../common/button/button'
import InputComponent from '../common/InputComponent'
import triggerMessage from '../common/SnackBar'
import Svg from '../common/Svg'

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
    <div className="border-gray-900 glasshover shadow-xl inline-block w-full max-w-md overflow-hidden rounded-lg border-0 p-6 text-left align-middle transition-all">
      <Dialog.Title
        as="h3"
        className="text-gray-900 mb-6 text-xl font-bold leading-6 text-white"
      >
        Edit link
      </Dialog.Title>
      <div className="mt-2">
        <InputComponent
          value={title}
          type="text"
          onChange={(e: any) => setTitle(e.target.value)}
          placeholder="Link title"
          className="border-gray-900 placeholder:text-gray-900 text-gray-900 relative mb-1 mt-3 w-full border bg-transparent p-1 px-3 py-2 text-lg font-bold outline-none placeholder:text-opacity-50 focus:outline-none focus:ring"
        />
        {urls.map((link: any) => {
          return (
            <div key={link.id}>
              <div className="text-gray-100 relative my-2 flex w-full rounded border-purple bg-transparent text-lg font-bold text-white placeholder:text-white placeholder:text-opacity-50 focus:outline-none">
                <div
                  className="flex w-10/12"
                  onClick={() => window.open(`https://${link.link}`, '_blank')}
                >
                  <img
                    style={{ borderRadius: '100%' }}
                    className="my-auto ml-3 h-5 w-5"
                    src={`https://s2.googleusercontent.com/s2/favicons?domain_url=https://${link.link}`}
                    alt="favicon"
                  />
                  <Tooltip title={link.link} placement="top">
                    <h1 className="placeholder:text-blueGray-300 text-blueGray-600 relative w-full cursor-pointer break-all rounded border border-none border-opacity-50 px-3 py-2 text-base font-bold text-white outline-none hover:text-purple hover:underline focus:outline-none focus:ring">
                      {link.link.length > 20
                        ? `${link.link.substring(0, 20)}...`
                        : link.link}
                    </h1>
                  </Tooltip>
                </div>
                <Button
                  kind="elevated"
                  className="w-2/12"
                  onClick={() => linksDeleteHandler(link.id)}
                >
                  <Svg type="deleteWhite" />
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
                className="div mb-1 flex justify-between rounded border-purple"
              >
                <div className="w-10/12">
                  <input
                    type="text"
                    placeholder="add new link"
                    onChange={(e) =>
                      inputOnchangeHandler(link.id, e.target.value)
                    }
                    className="text-gray-100 relative flex w-full bg-transparent px-3 py-2 text-lg font-bold text-white placeholder:text-white placeholder:text-opacity-50 focus:outline-none"
                  />
                </div>
                <Button
                  className="w-2/12"
                  kind="elevated"
                  onClick={() => inputDeleteHandler(link.id)}
                >
                  <Svg type="deleteWhite" />
                </Button>
              </div>
            )
          })}

        <div className="div flex justify-end">
          <Button
            kind="elevated"
            className="mr-1 focus:outline-none"
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

      <div className="mt-4 flex">
        <div className="mr-2 outline-none">
          <Button
            kind="elevated"
            className="mr-4 focus:outline-none"
            onClick={() => {
              editHandler()
              closeModal()
            }}
          >
            Add
          </Button>
        </div>
        <div>
          <Button
            kind="elevated"
            className="focus:outline-none"
            onClick={closeModal}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  )
}

export default EditLinkDialog

EditLinkDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.any,
  openModal: PropTypes.any,
  id: PropTypes.string.isRequired,
  links: PropTypes.any.isRequired,
  linkTitle: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}
