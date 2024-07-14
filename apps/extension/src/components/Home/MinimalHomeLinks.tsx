import BookmarkIcons from 'components/common/BookmarkIcons'
import InputComponent from 'components/common/InputComponent'
import EditDeleteLink from 'components/links/EditDeleteLink'
import { LinkClickHandler } from 'components/links/utils'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootStore } from 'redux/Store'

const MinimalHomeLinks = () => {
  const LinksDataRedux: any = useSelector(
    (state: RootStore) => state.userLinkData
  )
  const [searchString, setSearchString] = useState('')

  const linksLocalStorageData: any = localStorage.getItem('links')
  const linksLocalStorage: any = JSON.parse(linksLocalStorageData)
  const LINKS = linksLocalStorage || LinksDataRedux

  console.log('LINKS', LINKS)

  return (
    <div className="">
      <div className="mx-14 my-4 w-4/12">
        <InputComponent
          inputType="primary"
          onChange={(e: any) => {
            e.stopPropagation()
            setSearchString(e.target.value)
          }}
          placeholder="Search Links..."
        />
      </div>
      <div
        style={{ width: '125%', height: '100ch' }}
        className="grid grid-cols-4 w-screen h-full overflow-scroll p-16 gap-y-4 gap-x-8 fading-shadow scroll-smooth"
      >
        {LINKS.data &&
          LINKS.data
            .filter((x: any) => {
              if (searchString === '') {
                return x
              } else if (
                x?.data?.linkTitle
                  ?.toLowerCase()
                  ?.includes(searchString.toLowerCase())
              ) {
                return x
              }
            })
            .map(({ data, id }: any) => (
              <motion.div
                key={id}
                animate={{ y: -30 }}
                transition={{ ease: 'easeOut', duration: 1 }}
              >
                <a
                  onClick={() => LinkClickHandler(data.type, data.links)}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white text-lg bg-grey2 rounded-common w-full flex justify-between p-8 hover:bg-grey2 hover:text-white hover:border-2 m-2 items-center space-x-4 transition-all duration-100 delay-100 animate-border"
                >
                  <div className="space-x-2 flex">
                    <BookmarkIcons url={data.links} type={data.type} />
                    <div className="text-white text-lg font-bold">
                      {data.linkTitle}
                    </div>
                  </div>
                  <div>
                    <EditDeleteLink
                      link={{
                        title: data.linkTitle,
                        url: data.links,
                        type: data.type,
                        id
                      }}
                    />
                  </div>
                </a>
              </motion.div>
            ))}
      </div>
    </div>
  )
}

export default MinimalHomeLinks
