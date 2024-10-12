import { FolderClosed, Layers } from "lucide-react";

const BookmarkIcons = ({ url, type }: { url: string; type: string }) => {
  console.log({ url, type })

  // const parsedUrl = new URL(url && url[0]?.link);


  return (
    <>
      {type === 'folder' ? (
        <Layers className="h-6 my-auto w-6" />
      ) : (
        <img
          style={{ borderRadius: '100%' }}
          className="h-5 my-auto w-5"
          // src={`https://logo.clearbit.com/${url[0].link}`}
          src={`https://s2.googleusercontent.com/s2/favicons?domain_url=https://${url[0].link}`}
          alt="favicon"
        />
      )}
    </>
  )
}

export default BookmarkIcons
