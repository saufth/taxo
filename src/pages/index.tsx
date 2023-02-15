// Components
import About from '../components/sections/About'
import Hero from '../components/sections/Hero'
import Solutions from '../components/sections/Solutions'
import Quote from '../components/data-display/Quote'
// Types
import { AboutProps } from '../types/sections'
import { QuoteProps } from '../types/data-display'

/** Strategy section configuration */
const strategyConfig: AboutProps = {
  id: 'strategy',
  heading: 'La estrategía',
  description: 'El éxito a corto, mediano y largo plazo de cualquier empresa no depende de un solo aspecto, sino de la sincronización de muchos. Aquí te presentamos los más importantes para nosotros, mismos que forman parte de nuestro ADN y que son la clave en la generación de soluciones de valor para nuestros clientes.',
  showcases: [
    {
      heading: 'Trabajamos en equipo',
      descriptions: [
        'Filosofía: Los negocios son opuestos a las matemáticas. Mientras las matemáticas plantean que la mejor forma de sumar es multiplicar, en los negocios la mejor forma de sumar es dividir. Dividir el esfuerzo, el trabajo, las tareas y hasta los ingresos.',
        'Más allá de querer ser un experto en todas las áreas de una empresa o negocio, busca rodearte de un equipo de expertos que complemente correctamente las habilidades y conocimientos que no tienes.'
      ],
      image: 'about-team'
    },
    {
      heading: 'Innovamos constantemente',
      descriptions: [
        'Lo importante es generar innovación alrededor de lo que el cliente considera valioso.',
        'Para lograr generar innovaciones de valor, es imperativo conocer al cliente, a la competencia, al mercado y a ti mismo como organización.'
      ],
      image: 'about-innovate'
    },
    {
      heading: 'Transformamos problemas en oportunidades',
      descriptions: [
        'Problemas = áreas de oportunidad.',
        'Mientras más grande y frecuente sea el problema, mayor será la posibilidad de generar valor.',
        'La creatividad es un elemento clave en nuestro proceso de encontrar soluciones.'
      ],
      image: 'about-oportunity'
    },
    {
      heading: 'No asumimos',
      descriptions: [
        'Se debe tener certeza en cada tarea u objetivo a realizar. Nunca asumir, en caso no tener una certeza plena.',
        'Evitar el retrabajo. Dar indicaciones claras incrementa las probabilidades de que las cosas se hagan bien y a la primera.',
        'El estudio de mercado estratégico es un pilar indispensable en el momento de tomar decisiones que generen valor para el cliente.'
      ],
      image: 'about-assume'
    },
    {
      heading: 'Planeamos y ejecutamos con estrategia',
      descriptions: [
        'Se debe analizar y elegir con mucho cuidado la mejor forma de llegar del punto A (en donde estamos) al punto B (a donde se quiere llegar).',
        'Administrar con eficiencia los recursos disponibles.',
        'Siempre hay una forma óptima o mejor de hacer las cosas.',
        'El minimalismo y la metodología MVP son claves dentro de nuestra estrategia.'
      ],
      image: 'about-strategy'
    },
    {
      heading: 'Prevemos futuras tendencias',
      descriptions: [
        'Saber cuándo entrar y salir de cualquier oportunidad de negocio. Nada es eterno; todo tiene un ciclo, un punto alto y un punto bajo.',
        'Lo único constante es el cambio. Sé tú quien decida los cambios en tu empresa, y no el mercado el que te obligue a hacerlos.'
      ],
      image: 'about-prevent'
    },
    {
      heading: 'Buscamos progreso, no perfección',
      descriptions: [
        'El mundo de los negocios es un juego infinito en el que no se tiene una certeza plena de todos los elementos que participan el mercado, ni de la variabilidad de estos.  A lo máximo que se puede aspirar es a tener estimaciones.',
        '¿Qué sí está en nuestro control? Generar una cultura de progreso constante dentro de nuestra organización; aspirar a ser mejores cada día con relación a nuestras propias métricas e inspirar el cambio en esta cultura de progreso en cada rincón de la compañía.'
      ],
      image: 'about-progress'
    }
  ]
}

/** The quote configuration */
const quoteConfig: QuoteProps = {
  phrase: '“Puedes tener la mejor estrategia y el mejor edificio del mundo, pero si no cuentas con el corazón y la mente de las personas que trabajan contigo, nada tomará vida ”.',
  author: 'Renee West',
  legend: 'Exvicepresidente de Recursos Humanos de la empresa Primm Valley Resorts, presidente y COO de Luxor y Hotel Excalibur.'
}

/**
 * The main page of the application
 * @returns HomePage component
 */
const HomePage = () => {
  return (
    <>
      <Hero />
      <Solutions />
      <About {...strategyConfig} />
      <Quote {...quoteConfig} />
    </>
  )
}

export default HomePage
