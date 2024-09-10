import React from 'react'
import BookmarkIcons from './BookmarkIcons'

interface LinkItem {
  title: string
  url: string | string[]
  type: string
}

interface LinkComponentProps {
  links: LinkItem[]
}

const LinkComponent: React.FC<LinkComponentProps> = ({ links }) => {
  return (
    <div className="space-y-2">
      {links.map((link, index) => (
        <div key={index} className="mx-3">
          <div className="cursor-pointer flex glasslink p-2 w-full rounded-[8px]">
            <div className="flex w-full mx-1">
              <BookmarkIcons 
                url={Array.isArray(link.url) ? link.url[0] : link.url} 
                type={link.type} 
              />
              <a 
                href={Array.isArray(link.url) ? link.url[0] : link.url}
                className="block font-bold my-auto px-4 py-auto text-white text-l w-full whitespace-nowrap hover:text-purple-500 truncate"
              >
                {link.title}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default LinkComponent