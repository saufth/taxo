// Components
import NextLink from 'next/link'
// Types
import { LinkProps } from '../../types/navigation'
// Styles
import styles from '../../styles/navigation/Link.module.css'

/**
 * Used to navigate between pages
 * @returns Link component
 */
const Link = ({ children, href }: LinkProps) => {
  return (
    <NextLink href={href}>
      <div className={styles.link}>
        {children}
      </div>
    </NextLink>
  )
}

export default Link
