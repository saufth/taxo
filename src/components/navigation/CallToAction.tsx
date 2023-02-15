// Components
import NextLink from 'next/link'
// Types
import { Themeable } from '../../types/theme'
// Styles
import styles from '../../styles/navigation/CallToAction.module.css'
import { callToActionConfig } from '../../modules/navigation/config'

/**
 * The primary call to actions of the application
 * @see {@link Themeable} for props specification
 * @param Themeable The component props
 * @returns The CallToAction component
 */
const CallToAction = ({ theme = 'primary' }: Themeable) => {
  // Styles
  const themeStyle = theme === 'secondary' ? styles.actionSecondary : ''
  const actionStyle = `${styles.action} ${themeStyle}`

  return (
    <NextLink href={callToActionConfig.href}>
      <div className={actionStyle}>
        {callToActionConfig.children}
      </div>
    </NextLink>
  )
}

export default CallToAction
