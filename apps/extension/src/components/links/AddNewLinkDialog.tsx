import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

import ModalComponent from 'components/common/Modal'
import InputComponent from '../common/InputComponent'
import triggerMessage from '../common/SnackBar'
import Svg from '../common/Svg'
import Button from '../common/button/button'

import { addLinksService } from '../../firebase/functions/LinksActions'
import { getLinksList } from '../../redux/Actions/User.actions'

interface Props {
  isOpen: boolean
  closeModal: any
  openModal: any
}

const AddNewLinkDialog: React.FC<Props> = ({
  isOpen,
  closeModal,
  openModal
}) => {
  const [linkTitle, setLinkTitle] = useState('')
  const [links, setLinks] = useState([{ link: '', id: uuidv4() }])

  const dispatch = useDispatch()

  const cleanUpHandler = () => {
    closeModal()
    setLinks([{ link: '', id: uuidv4() }])
    setLinkTitle('')
  }

  const addHandler = async () => {
    setLinkTitle('')
    addLinksService(linkTitle, links, `${links.length > 1 ? 'folder' : 'link'}`)
    triggerMessage('Link added successfully', 'success')
    cleanUpHandler()
    dispatch(getLinksList())
  }

  const inputOnchangeHandler = (inputId: string, value: string) => {
    links
      .filter((link) => link.id == inputId)
      .forEach((link) => (link.link = value.replace(/(^\w+:|^)\/\//, '')))
  }

  const inputDeleteHandler = (inputId: string) => {
    const newLinks = links.filter((link) => link.id !== inputId)
    setLinks(newLinks)
  }

  return (
    <>
      <ModalComponent isOpen={isOpen} onClose={closeModal} title="Add new link">
        <div className="mt-2">
          <InputComponent
            type="text"
            onChange={(e: any) => setLinkTitle(e.target.value)}
            placeholder="Link title"
          />
          <div className="flex justify-end"></div>
          {links.map((link) => {
            return (
              <div className="border-purple div flex justify-between mb-1 rounded-[15px] bg-grey2 py-1">
                <div key={link.id}>
                  <input
                    type="text"
                    placeholder="Add link here"
                    onChange={(e) =>
                      inputOnchangeHandler(
                        link.id,
                        e.target.value.toLowerCase()
                      )
                    }
                    className="bg-transparent flex focus:outline-none font-bold placeholder-white placeholder-opacity-50 px-3 py-2 relative text-gray-100 text-lg text-white w-full"
                  />
                </div>
                <Button
                  type="secondary"
                  className="focus:outline-none my-auto mr-1"
                  onClick={() => inputDeleteHandler(link.id)}
                >
                  <Svg type="close" classNames="p-1" />
                </Button>
              </div>
            )
          })}

          <div className="div flex justify-end">
            <Button
              kind="elevated"
              className="focus:outline-none mr-1 mt-2"
              onClick={() => {
                setLinks([...links, { link: '', id: uuidv4() }])
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 my-auto"
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

        <div className="flex mt-4 space-x-2">
          <Button
            disabled={!(linkTitle.length > 0 && links[0]?.link?.length > 0)}
            className="focus:outline-none"
            checkForDemoApp={true}
            onClick={() => {
              addHandler()
              cleanUpHandler()
            }}
          >
            Add
          </Button>
          <Button
            type="secondary"
            className="focus:outline-none"
            onClick={() => cleanUpHandler()}
          >
            Cancel
          </Button>
        </div>
      </ModalComponent>
    </>
  )
}

export default AddNewLinkDialog
