// Components
import CallToAction from '../navigation/CallToAction'
// Styles
import styles from '../../styles/data-display/Quote.module.css'
// Types
import { QuoteProps } from '../../types/data-display'

/**
* Used for diplay a phrase with author and a legend
* @see {@link QuoteProps} for props definition
* @param {QuoteProps} QuoteProps The component porps
* @returns The Quote component
*/
const Quote = ({ phrase, author, legend }: QuoteProps) => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.phrase}>
          {phrase}
        </div>
        <div className={styles.author}>
          {author}
        </div>
        <div className={styles.legend}>
          {legend}
        </div>
        <div className={styles.quoteAction}>
          <CallToAction theme='secondary' />
        </div>
      </div>
    </div>
  )
}

export default Quote
