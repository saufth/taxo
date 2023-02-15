// Components
import Image from 'next/image'
// React
import { useEffect, useState } from 'react'
// Router
import { useRouter } from 'next/router'
// Styles
import styles from '../../styles/feedback/Loading.module.css'

/**
* Provide the first feedback to the user that the page is actually loading
* @returns The Loading component
*/
const Loading = () => {
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const handleStart = () => {
      setIsLoading(true)
    }

    const handleComplete = () => {
      setTimeout(() => { setIsLoading(false) }, 1000)
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  })

  return isLoading
    ? (
      <div className={styles.loading}>
        <Image
          src='/images/logomark.svg'
          alt='Keyperspot logo'
          width={240}
          height={240}
        />
      </div>
      )
    : null
}

export default Loading
