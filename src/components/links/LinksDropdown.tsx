import { animate, stagger } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'

import { RootStore } from '../../redux/Store'

import { motion } from 'framer-motion'
import InputComponent from '../common/InputComponent'
import Loader from '../common/Loader'
import SvgButton from '../common/button/SvgButton'
import AddNewLinkDialog from './AddNewLinkDialog'
import LinkComponent from './LinkComponent'

const LinksDropdown: React.FC<any> = ({ openDialog, setOpenDialog }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  const LinksDataRedux: any = useSelector(
    (state: RootStore) => state.userLinkData
  )

  const inputRef: any = useRef()

  const linksLocalStorageData: any = localStorage.getItem('links')
  const linksLocalStorage: any = JSON.parse(linksLocalStorageData)
  const LINKS = linksLocalStorage || LinksDataRedux

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  useEffect(() => {
    if (openDialog)
      animate(
        '.dropdown-menu',
        { y: 10, fillOpacity: 1 },
        {
          delay: stagger(0.1),
          type: 'spring',
          damping: 15,
          stiffness: 500
        }
      )
    if (inputRef && openDialog)
      setTimeout(() => inputRef?.current?.focus(), 500)
  }, [openDialog])

  return (
    <div className="inline-block mb-4 relative">
      <div onClick={() => setOpenDialog(!openDialog)}>
        <SvgButton type="link" position="top-0 left-0" cta="Links" />
      </div>
      {openDialog && (
        <div className="dropdown-menu ml-4 mt-12 pt-4 text-white">
          <ul className="rounded-t-[18px] bg-black">
            <div className="align-center flex justify-center">
              <div className="px-3 my-1 w-full">
                <InputComponent
                  ref={inputRef}
                  onChange={(e: any) => setSearchValue(e.target.value)}
                  value={searchValue}
                  style={{
                    minWidth: '92%'
                  }}
                  type="text"
                  placeholder="Search links"
                />
              </div>
            </div>
            <div
              style={{
                minWidth: '24rem',
                minHeight: '10rem',
                maxHeight: '65vh',
                overflowY: 'auto',
                overflowX: 'hidden'
              }}
              className="no-scrollbar w-full"
            >
              {LINKS.data ? (
                LINKS.data
                  .filter((value: any) => {
                    if (searchValue === '') {
                      return value
                    } else if (
                      value.data.linkTitle
                        .toLocaleLowerCase()
                        .includes(searchValue.toLocaleLowerCase())
                    ) {
                      return value
                    }
                  })
                  .sort(function (a: any, b: any) {
                    let textA = a?.data?.linkTitle?.toUpperCase()
                    let textB = b?.data?.linkTitle?.toUpperCase()
                    return textA < textB ? -1 : textA > textB ? 1 : 0
                  })
                  .map((link: any) => {
                    return (
                      <motion.li
                        key={link.id}
                        initial={{ y: 0, opacity: 0, x: 120 }}
                        animate={{ y: 0, opacity: 1, x: -5 }}
                        exit={{ y: 10, opacity: 0 }}
                        transition={{ duration: 0.6, ease: 'backInOut' }}
                      >
                        <LinkComponent
                          id={link.id}
                          url={link.data.links}
                          title={link.data.linkTitle}
                          type={link.data.type}
                        />
                      </motion.li>
                    )
                  })
              ) : (
                <div className="mt-5">
                  <Loader />
                </div>
              )}

              {LINKS && LINKS.data.length === 0 && (
                <div className="div flex h-full items-center justify-center">
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <h1 className="font-2x font-bold my-auto text-white">
                    No links found. Add new link...
                  </h1>
                </div>
              )}
            </div>
          </ul>
          <div
            onClick={() => openModal()}
            className="absolute w-full cursor-pointer flex py-3 px-2 rounded-b-[18px] bg-grey2 hover:bg-grey1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 mx-3 my-auto text-white w-5 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                clipRule="evenodd"
              />
            </svg>
            <h1 className="font-bold p-1 text-white">
              {' '}
              Add a new link or folder
            </h1>
          </div>
        </div>
      )}
      {/* dialog box for adding new link */}
      <AddNewLinkDialog
        isOpen={isOpen}
        openModal={openModal}
        closeModal={closeModal}
      />
    </div>
  )
}

export default LinksDropdown
