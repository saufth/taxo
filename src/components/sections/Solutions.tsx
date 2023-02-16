// Components
import Image from 'next/image'
// Styles
import styles from '../../styles/sections/Solutions.module.css'
import CallToAction from '../navigation/CallToAction'

/** The solutions of the organization configuration */
const solutionsConfig = [
  {
    text: 'Lorem ipsum dolor sit amet sit amet dolor',
    icon: 'tax1'
  },
  {
    text: 'Lorem ipsum dolor sit amet sit amet dolor',
    icon: 'tax2'
  },
  {
    text: 'Lorem ipsum dolor sit amet sit amet dolor',
    icon: 'tax3'
  },
  {
    text: 'Lorem ipsum dolor sit amet sit amet dolor',
    icon: 'tax4'
  },
  {
    text: 'Lorem ipsum dolor sit amet sit amet dolor',
    icon: 'tax5'
  },
  {
    text: 'Lorem ipsum dolor sit amet sit amet dolor',
    icon: 'tax6'
  }
]

/**
* The solutions section component
* @returns The Solutions component
*/
const Solutions = () => {
  return (
    <section id='solutions' className={styles.solutions}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2>
            Nuestras soluciones
          </h2>
          <p>
            Nuestro principal objetivo es convertirnos en un aliado estratégico y determinante
            en el éxito presente y futuro de nuestros clientes. Nos apasiona generar valor en sus
            modelos de negocio para que, día con día, se vuelvan más competitivos.
          </p>
        </header>
        <div className={styles.content}>
          <ul className={styles.list}>
            {solutionsConfig.map((service, key) => (
              <li className={styles.listItem} key={key}>
                <Image
                  src={`/images/icons/${service.icon}.svg`}
                  alt={service.icon}
                  width={48}
                  height={48}
                />
                {service.text}
              </li>
            ))}
          </ul>
          <div className={styles.image} />
        </div>
        <div className={styles.legend}>
          <p>
            Constantemente salimos de la zona de confort que impone el mercado, con el único
            objetivo de que nuestros clientes logren alcanzar su máximo potencial. Date la
            oportunidad de conocernos. Te sorprenderás.
          </p>
          <CallToAction theme='secondary' />
        </div>
      </div>
    </section>
  )
}

export default Solutions
