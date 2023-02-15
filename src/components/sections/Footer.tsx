// Components
import CallToAction from '../navigation/CallToAction'
import Image from 'next/image'
import NextLink from 'next/link'
// Config
import { navigationConfig, callToActionConfig } from '../../modules/navigation/config'
// Styles
import styles from '../../styles/sections/Footer.module.css'

/**
 * The footer section of application
 * @returns Footer section component
 */
const Footer = () => {
  return (
    <footer className={styles.section}>
      <div className={styles.foot}>
        <div className={styles.footMail}>
          <NextLink
            href='mailto:info@keyperspot.com'
            target='_blank'
            rel='noreferrer'
          >
            info@keyperspot.com
          </NextLink>
        </div>
        <div className={styles.footAction}>
          <CallToAction theme='secondary' />
        </div>
        <div className={styles.rights}>
          <NextLink href='/'>
            <Image
              src='/images/logo-vertical.svg'
              alt='Keyperspot logotype'
              width={175}
              height={32}
            />
          </NextLink>
          Copyright 2023 Keyperspot. All rights reserved.
        </div>
      </div>
      <nav className={styles.nav}>
        {navigationConfig.map((option, key) => (
          <NextLink href={option.href} key={key}>
            {option.children}
          </NextLink>
        ))}
        <NextLink className={styles.navAction} href={callToActionConfig.href}>
          {callToActionConfig.children}
        </NextLink>
      </nav>
    </footer>
  )
}

export default Footer
