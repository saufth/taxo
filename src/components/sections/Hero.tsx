// Components
import CallToAction from '../navigation/CallToAction'
import Link from '../navigation/Link'
// Config
import { navigationConfig } from '../../modules/navigation/config'
// Styles
import styles from '../../styles/sections/Hero.module.css'

/**
* The home page hero section component
* @returns The Hero component
*/
const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <header className={styles.header}>
            <h1 className={styles.heading}>
              Lorem <span>Ipsum</span> is <span>Dummy</span> text sit amet
            </h1>
            <p className={styles.description}>
              Potenciamos el factor humano de las empresas con visión,
              a fin de evolucionar hacia un legado de progreso y verdad.
            </p>
          </header>
          <div className={styles.options}>
            <CallToAction />
            <div>
              <Link href={navigationConfig[1].href}>
                {navigationConfig[1].children}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
