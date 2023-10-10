import { useEffect } from 'react'

const SetBodyStyle = ({
  fileUrlLocalStorage,
  fileUrl,
  isMinimalMode = false
}: {
  fileUrlLocalStorage: string | null
  fileUrl: string
  isMinimalMode: Boolean
}) => {
  useEffect(() => {
    const body: any = document.body
    const setBodyStyle = () => {
      body.style.backgroundImage = `url(${fileUrlLocalStorage || fileUrl})`
      body.style.backgroundSize = '100% 100%'
      body.style.backgroundRepeat = 'no-repeat'
      body.style.backgroundPosition = 'center center'
    }

    setBodyStyle()

    if (isMinimalMode) {
      body.style.backgroundImage = undefined
    }

    return () => {
      // Cleanup function
      // Reset body style when the component is unmounted
      body.style.backgroundImage = ''
      body.style.backgroundSize = ''
      body.style.backgroundRepeat = ''
      body.style.backgroundPosition = ''
    }
  }, [fileUrlLocalStorage, fileUrl])

  return null
}

export default SetBodyStyle
