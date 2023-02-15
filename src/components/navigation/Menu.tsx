// Components
import CallToAction from './CallToAction'
import NextLink from 'next/link'
// Hooks
import useDimensions from '../../modules/sizing/hooks/useDimensions'
// Animation
import { motion } from 'framer-motion'
// Config
import { navigationConfig } from '../../modules/navigation/config'
// Types
import { MenuProps } from '../../types/navigation'
// Styles
import styles from '../../styles/navigation/Menu.module.css'

/** Background animation variants */
const backgroundVariants = {
  open: (width = 1366) => ({
    clipPath: `circle(${width * 2}px at 100% 0px)`,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: 'circle(0px at 100% 0px)',
    opacity: 1,
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  }
}

/** Nav animation variants */
const navVariants = {
  open: {
    opacity: 1,
    height: '100vh',
    transition: {
      delay: 0.3
    }
  },
  closed: {
    opacity: 0,
    height: 0
  }
}

/**
 * The main menu of application
 * @returns Menu component
 */
const Menu = ({ isOpen, action }: MenuProps) => {
  // Animation
  const { width } = useDimensions()

  return (
    <motion.div
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={width}
    >
      <motion.nav
        aria-label='Keyperspot directorio'
        className={styles.nav}
        variants={navVariants}
      >
        <span className={styles.label}>Menu</span>

        {navigationConfig.map((option, key) => (
          <div className={styles.option} onClick={action} key={key}>
            <NextLink href={option.href}>
              {option.children}
            </NextLink>
          </div>
        ))}

        <div className={styles.action} onClick={action}>
          <CallToAction theme='secondary' />
        </div>
      </motion.nav>

      <motion.div
        className={styles.background}
        variants={backgroundVariants}
      />
    </motion.div>
  )
}

export default Menu
