import { useEffect } from 'react'

const SetBodyStyle = ({
  fileUrlLocalStorage,
  fileUrl
}: {
  fileUrlLocalStorage: string | null
  fileUrl: string
}) => {
  useEffect(() => {
    const setBodyStyle = () => {
      document.body.style.backgroundImage = `url(${
        fileUrlLocalStorage || fileUrl
      })`
      document.body.style.backgroundSize = '100% 100%'
      document.body.style.backgroundRepeat = 'no-repeat'
      document.body.style.backgroundPosition = 'center center'
      document.body.style.zoom = '80%'
    }

    setBodyStyle()

    return () => {
      // Cleanup function
      // Reset body style when the component is unmounted
      document.body.style.backgroundImage = ''
      document.body.style.backgroundSize = ''
      document.body.style.backgroundRepeat = ''
      document.body.style.backgroundPosition = ''
    }
  }, [fileUrlLocalStorage, fileUrl])

  return null
}

export default SetBodyStyle
