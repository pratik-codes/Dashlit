import EditDeleteLink from 'components/links/EditDeleteLink'
import BookmarkIcons from '../common/BookmarkIcons'

export const SearchItem = ({ linkTitle, links, type }: any) => {
  return (
    <div className="flex justify-between space-x-3 p-2 items-center text-white">
      <div className="flex space-x-2">
        <BookmarkIcons url={links} type={type} />
        <div className="text-white text-lg font-bold">{linkTitle}</div>
      </div>

      <div className="text-white flex justify-end">
        <EditDeleteLink link={{ title: linkTitle, url: links, type }} />
      </div>
    </div>
  )
}
