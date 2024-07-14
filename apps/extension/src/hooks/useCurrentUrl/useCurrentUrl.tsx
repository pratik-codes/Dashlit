import { useLocation } from 'react-router-dom'

/**
 * useCurrentUrl
 */
const useCurrentUrl = () => {
  const { pathname, search } = useLocation()

  return {
    currentUrl: pathname + search,
    pathname,
    search
  }
}

export default useCurrentUrl
