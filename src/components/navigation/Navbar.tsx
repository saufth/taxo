// Components
import CallToAction from './CallToAction'
import Image from 'next/image'
import NextLink from 'next/link'
import Menu from './Menu'
import MenuButton from '../input/MenuButton'
// React
import { useState } from 'react'
// Animation
import { useCycle, useMotionValueEvent, useScroll } from 'framer-motion'
// Config
import { navigationConfig } from '../../modules/navigation/config'
// Styles
import styles from '../../styles/navigation/Navbar.module.css'

/**
 * The main navbar of application
 * @returns Navbar component
 */
const Navbar = () => {
  // Scroll animation
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, 'change', (latestScrollY) => {
    setIsScrolled(latestScrollY > 1)
  })
  const navbarStyle = `${styles.navbar} ${isScrolled ? styles.navbarScrolled : ''}`
  // Menu animation
  const [isOpen, toggle] = useCycle(false, true)
  /** Handle the Menu state */
  const handleToggle = () => { toggle() }
  /** Close the Menu but not open */
  const closeToggle = () => { isOpen && toggle() }

  return (
    <>
      <header className={navbarStyle}>
        <div className={styles.content}>
          <NextLink href={navigationConfig[0].href} onClick={closeToggle}>
            <Image
              src='/images/logo-white.svg'
              alt='Keyperspot logotype'
              width={275}
              height={64}
              priority
              className={styles.logo}
            />
          </NextLink>

          <NextLink className={styles.link} href={navigationConfig[1].href}>
            {navigationConfig[1].children}
          </NextLink>

          <NextLink className={styles.link} href={navigationConfig[2].href}>
            {navigationConfig[2].children}
          </NextLink>

          <NextLink className={styles.link} href={navigationConfig[3].href}>
            {navigationConfig[3].children}
          </NextLink>

          <div className={styles.action}>
            <CallToAction />
          </div>

          {isOpen
            ? <div className={styles.close} onClick={handleToggle}>X</div>
            : <MenuButton action={handleToggle} />}
        </div>
      </header>
      <Menu isOpen={isOpen} action={handleToggle} />
    </>
  )
}

export default Navbar
