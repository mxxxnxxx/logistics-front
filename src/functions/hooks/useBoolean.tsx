import { useMemo } from 'react'

export const useBoolean = () => {
  /**
   * 判定系のロジックを格納するhooks
   */
  const isLocalhost = useMemo(() => {
    const hostName = document.location.hostname
    return hostName === 'localhost'
  }, [])

  const isResponsive = useMemo(() => {
    return window.innerWidth <= 576
  }, [])

  return { isLocalhost, isResponsive }
}
